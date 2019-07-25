# Glup Workflow Automation

**Version 1.0.0**

A gulp configuration file that will help you automate:  
* sass compilation,  
* css and JavaScript minification and bundling,  
* image optimization.

___

## Contributors

Momo BARRO  
[linkedin](https://www.linkedin.com/in/mouhamadou-s-barro-4203537b/)

___

## License & Copyright

MIT License 

Copyright (c) 2019 Mouhamadou Sadio BARRO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

___

## Usage

**Installation**

* Clone the repository  
* install the dependencies  

Run command:

```bash
$ npm install
```

**Run**

This will watch your files, compile your sass, minify and bundle your css and js, and finally run your dev server at http://http://localhost:3000  

Run command:

```bash
$ npm start
```

___

## Notes

Make sure to always reference your assets from the `dist/assets/` folder in your template files. This folder is automatically generated when you run the `$ npm start` command.