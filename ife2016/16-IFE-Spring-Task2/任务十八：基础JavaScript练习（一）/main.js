/**
 * Created by chuli on 2016/3/27.
 */
(function () {
    //  右侧入添加函数
    var leftInto = document.getElementById('left-Into');
    var rightInto = document.getElementById('right-Into');
    var leftOut = document.getElementById('left-Out');
    var rightOut = document.getElementById('right-Out');
    var figure  = document.getElementById("display").firstElementChild;
    var inputBox = document.getElementsByClassName("in123")[0];
    var reg = /^100$|^[1-9]\d$/;


    //匹配函数10-100数字。
/*    function regular(num) {
        if(num <= 100 && num >= 10){
            return
        }else {
            alert("输入错误，请重新输入10-100数字！123");
        }
    };*/

    // 点击数字移除函数
    figure.onclick = function (event) {
        var ev = event || window.event;

        if (ev.target.nodeName=== "li"){
            alert(ev.target.innerText);
            this.removeChild(ev.target);
        }
    };



    leftInto.onclick  = function () {
        var inputText = inputBox.value;
        if (reg.test(inputText)){
            var li = document.createElement("li");
            li.innerHTML = inputText;
            figure.insertBefore(li,figure.firstElementChild);

        }else{
            alert("输入错误，请重新输入10-100数字！")
        }

    };



    rightInto.onclick = function () {
        var inputText = inputBox.value;
        if (reg.test(inputText)){
            var li = document.createElement("li");
            li.innerHTML = inputText;
            figure.appendChild(li);
        }else{
            alert("输入错误，请重新输入10-100数字！")
        }
    };



    leftOut.onclick = function () {
        if (figure.childElementCount !== 0){
            var firstEle = figure.firstElementChild;
            alert(firstEle.innerHTML);
            figure.removeChild(firstEle);
        }else{
            alert("没有数字啦");
        }
    }



    rightOut.onclick = function () {
        if (figure.childElementCount !== 0){
            var lastEle = figure.lastElementChild;
            alert(lastEle.innerHTML);
            figure.removeChild(lastEle);
        }else{
            alert("没有数字啦");
        }
    }

})();







/*
//左侧添加数字

function leftIn(){
    var inputText = document.getElementById("in123").value;
    var newText = document.createTextNode(inputText);
//    console.log(inputText);
    var div = document.createElement('div');
    div.id = "back";
//    console.log(newText);
    div.appendChild(newText);
    qiang.appendChild(div);
}
function rightIn() {
    var inputText = document.getElementById("in123").value;
    console.log(inputText);
    var div = document.createElement('div');
    div.id = "back";
    var newText = document.createTextNode(inputText);
    console.log(newText);
    div.appendChild(newText);
    qiang.appendChild(div);

}



//左侧点击事件
 leftInto.onclick = function(){
     leftIn();
 }


// 右侧点击事件
rightInto.onclick = function () {
    rightIn();
}*/
