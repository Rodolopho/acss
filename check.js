const acss=require("./index.js");
const path=require("path");
const fs=require('fs');


//acss.run('demo', "demo/demo.css");
// console.log(acss.compile('test/index2.html'));

let file=path.resolve(__dirname, 'test.css');

// fs.writeFile(file, '', function (err) {
//   if (err) throw err;
//   console.log('File create:'+ file);
// });

console.log(acss.style("br5px"));
console.log(acss.styleJs("br5px bblr5px"));
console.log(Array.isArray([1,2,3]));