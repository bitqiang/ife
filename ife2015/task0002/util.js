/**
 * Created by chuli on 2016/2/14.
 */
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr){
	return typeof arr = "object" && Object.prototype.toString.call(arr) ==="[object Array]";
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn){
	return typeof fn === "function";
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src){
	var o;
	if(Object.prototype.toString.call(src) === "[object Array]"){
		o=[];
	}else{
		o={};
	}
	for(var i in src){
		if(src.hasOwnProperty(i)){
			if(typeof src[i] === "object"){
				o[i] = cloneObject(src[i]);
			}else {
				o[i] = src[i];
			}
		}
	}
	return 0;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr){
	var newArr = [];
	for(var i in arr){
		if(newArr.indexOf(arr[i]) == -1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串

function simpleTrim(str){
	var i;
	var j;
	for(i = 0; i < str.length; i++){
		if(str.charAt(i) != " " && str.charAt(i) != "\t"){
			break;
		}
	}
	for(j = str.length - 1; j >= 0; j--){
		if(str.length(j) != " " && str.charAt(j) != "\t" ){
			break;
		}
	}
	return str.slice(i, j + 1)
}



// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str){
	if(str.length != -1){
		return str.replace(/^\s+|\s+$/g,'');
	}
}

// 除去数组中的空元素
function deleteBlank(arr){
	var arr2 = [];
	for(var i = 0; i <= arr.length; i++){
		if(arr[i].match(/\s+/) || arr[i] ===""){
			continue;
		}else {
			arr2.push(arr[i]);
		}
	}
	return arr2;
}

//  实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr,fn){
	for(var i in arr){
		fn(arr[i],i);
	}
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj){
	return Object.keys(obj).length;
}


//---------------------------------------------------------
// 判断是否为邮箱地址
function isEmail(emailStr){
	var pattern = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
	return pattern.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone){
	var pattern = /^(\+\d{1,4})?\d{7,11}$/;
	return pattern.test(phone);
}

// //-----------------------------------------------------------
// // 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName){
	var oldClassName = element.className; //获取旧的样式类
	element.className = oldClassName === "" ? newClassName : oldClassName + "" + newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName){
	var oldClassName = element.className;
	var pattern = new RegExp("\\b" + oldClassName + "\\b");
	element.className = trim(originClassName.replace(pattern, ' '));
}


 // 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode){
	return element.parentNode === siblingNode.parentNode ;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element){
	var pos = {};
	pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
	pos.y = element.getBoundingClientRect().top +  Math.max(document.documentElement.scrollTop, document.body.scrollTop);
	return pos;
}

