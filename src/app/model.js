var mjAPI;

//initmath to help function run more smoothly
function initMath(){
	mjAPI = require("mathjax-node");
	
	mjAPI.config({
 		MathJax: {
			// traditional MathJax configuration
  		}
		});
}

function toSVG(mathExpression, drawSVG) {
"use strict";
// a simple TeX-input example
	/*
var mjAPI = require("mathjax-node"),
    out;*/
	
	/*
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});*/

//define typeset and output of mathjax api
mjAPI.typeset({
  ex: 10,
  width: 200,
  math: mathExpression,
  format: "TeX", // "inline-TeX", "MathML"
  svg:true,		 // outputs an svg file
}, function (data) {
  
	//if no errors, display svg file in output region.
  if (!data.errors) {
	  drawSVG(data.svg);
  }
  //if there are errors; give error message on which part fails
  else{
	  //make the error more readable and display it
	  var cleanError = data.errors[0].replace('TeX parse error: Undefined control sequence ', '');
	  out = "There is an error in your LateX. It probably looks like this: " + cleanError;
	  drawSVG(out);
  }
});
}



