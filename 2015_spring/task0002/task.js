function $ (id) {
		return document.getElementById(id);
		// body...
	}
	function add(num1,num2){
		return num1+num2;
	}
	function renderResult(result){
		$("result").innerHTML = result;
	}
	function addEventHandle(){
		var num1 = $("number1").value;
		var num2 = $("number2").value;
		var result = add(num1+num2);
		renderResult(result);
	}
	function initEvent(){
		$("addbtn").addEventlistener("click",addEventHandle,false);
	}
	initEvent();
	