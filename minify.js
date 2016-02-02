var fs = require('fs');
var uglify = require("uglify-js");

var uglified = uglify.minify(['slick/zepto.js', 'slick/zepto.extra.js', 'slick/slick.js']);

fs.writeFile('dist/concat.min.js', uglified.code, function (err){
    if(err) {
        console.log(err);
    } else {
        console.log("Script generated and saved:", 'concat.min.js');
    }
});