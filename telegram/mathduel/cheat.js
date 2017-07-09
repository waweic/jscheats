function checkTask() {
	var x = parseInt(document.getElementById('task_x').innerHTML);
	var y = parseInt(document.getElementById('task_y').innerHTML);
	var eq = parseInt(document.getElementById('task_res').innerHTML);
	var op = document.getElementById('task_op').innerHTML;	
	console.log(x);
	console.log(op);
	console.log(y);
	console.log("=");
	console.log(eq);
	if(op == "+") {
		return x + y == eq;
	}
	if(op == "–") {
		return x - y == eq;
	}
	if(op == "×") {
		return x * y == eq;
	}
	if(op == "/") {
		return x / y == eq;
	}
	
}
function react() {
	if(parseInt(document.getElementById('score_value').innerHTML) >= 400) {
		clearInterval(interid);
	}
	if(checkTask()) {
		document.getElementById("button_correct").click();
		console.log("correct")
	}
    else {
    	document.getElementById("button_wrong").click();
    	
    }
}

var interid = setInterval(react, 10);
