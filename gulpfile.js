const {src, dest, watch, series, parallel} = require('gulp')

// css & js plugin
const concat = require ('gulp-concat')
const rename = require ('gulp-rename')
const changed = require('gulp-changed')
const browserSync = require('browser-sync').create()

// css plugins
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const postcss = require('gulp-postcss')
const uncss= require('postcss-uncss')

// js plugin
const uglify = require('gulp-uglify')

// img plugin
const imagemin = require('gulp-imagemin')


/**
 *  List of plugins used in the css function and their respective roles
 * 
 * sass - compiles our sass files to 
 */
const css = () => {
    let source = './src/assets/scss/'
    let destination = './src/assets/css/'

    return src(['./node_modules/bootstrap/scss/bootstrap.scss', source+'*.scss'])
    .pipe(sass())
    .pipe(dest(destination))
    .pipe(browserSync.stream())   
}

/**
 * List of plugins used in the cssMinify function and their respective roles
 * 
 * uncss - eliminates the unused css
 * changed - check and process only files that changed in our directory
 * concat - takes all the files in our css directory and concatenates them to a single file
 * postcss - pipe CSS through several plugins, but parse CSS only once. Here we used uncss through postcss
 * csso - minifies the css
 * rename - allows us to rename our css file with min suffix attached to it. eg: randomFile.min.css
 * 
 */
const cssMinify = () => {

    let source = './src/assets/css/'
    let destination = './src/dist/assets/css/'
    let plugins = [
        uncss({
            html: ['./src/**/*.html']
        })
    ]

    return src(source+'*.css')
    .pipe(changed(destination))    
    .pipe(concat('style.css'))
    .pipe(postcss(plugins))
    .pipe(csso())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(dest(destination))
    .pipe(browserSync.stream())
}

/**
 * List of plugins used in the jsMinify function and their respective roles
 * changed, concat & rename check cssMinify for reference
 * uglify - minifies the JavaScript 
 * 
 */
const jsMinify = () => {
    let source = './src/assets/js/'
    let destination ='./src/dist/assets/js/'

    return src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/popper.js/dist/umd/popper.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        source+'*.js'
    ], {sourcemaps: true})
    .pipe(changed(destination))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(dest(destination))
    .pipe(browserSync.stream())
}

/**
 * List of plugins used in the img function and their respective roles
 * imagemin - optimizes image sizes by minifying them.
 */
const img = () => {
    let source = './src/assets/images/'
    let destination = './src/dist/assets/images/'

    return src(source+'*{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin())
    .pipe(dest(destination))
    .pipe(browserSync.stream())
}

/**
 * The watchFile function watches all changes in our project and executes some actions accordingly
 * Here, anytime there is a change in our .scss, .js, images or .html files the browser reloads 
 */
const watchFile = () => {
    browserSync.init({
        server: {
            baseDir: './src'
        },
        browser: 'chrome'
    })
    watch('./src/assets/scss/**/*.scss',series(css, cssMinify))
    watch('./src/assets/js/**/*.js', jsMinify)
    watch('./src/assets/images/**/*', img)
    watch([
        './src/assets/js/**/*.js',
        './src/**/*.html'
        ]).on('change', browserSync.reload)
}

exports.css = css
const build = parallel(cssMinify, jsMinify, img)
exports.build = build
exports.default = parallel(series(css, build), watchFile)