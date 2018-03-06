var thepreview = document.getElementById("thepreview"),
	inlineCheck = document.getElementById("inlineCheck"),
	blockCheck = document.getElementById("blockCheck"),
	theexpression = document.getElementById("theexpression"),
	output = document.getElementById("out"); 



function onInit(){
	//remove class failure from expressionbox
	//(not sure why, I guess it doesnt work without this)
	expressionbox.classList.remove("failure");
	//initMath() helps function run faster
	initMath();
}

function view(){
	//gets LateX expression from input field
	//and sends it to translate function
	var mathExpression = theexpression.value;
	//also passes function showPreview() so this can be called back
	toSVG(mathExpression, showPreview);
}	


//function that displays the preview in the preview field
function showPreview(SVG){
	var out,
		timestamp = Date.now();
	
	if(inlineCheck.checked){
		//display inline
		out = '<div id="mathquation_' + timestamp + '" class="nm_mathequation eqinline" style="display: inline; padding: 2px;">' + SVG + '</div>';
		}
	else if(blockCheck.checked){
		//display in block
		out = '<div id="mathquation_' + timestamp + '"  class="nm_mathequation eqblock" style="width: 100%; padding: 2px; text-align:center;">' + SVG + '</div>';
		}
		
		//add to end of nm_panel div.
		document.getElementById("nm_panel").insertAdjacentHTML('beforeend', out);
}
