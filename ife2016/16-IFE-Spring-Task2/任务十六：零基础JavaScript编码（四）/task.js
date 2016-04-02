/**
 * Created by chuli on 2016/3/24.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
    var aqi = [];



/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var key;
    var data;
    var aqiCity = document.getElementById('aqi-city-input');
    var aqiValue = document.getElementById('aqi-value-input');
    //city
    key = aqiCity.value.trim();
    //zhishu
    data = aqiValue.value.trim();
    var valueRegular =/[^0-9]/;
    var cityRegular =/[^\u4e00-\u9fa5a-zA-Z]/;
    var flag = true;

    if (!key){
        alert("请输入城市");
        aqiCity.focus();
        flag = false;
    }
    if(cityRegular.test(key)){
        alert("输入的城市不合法，请重新字母或者汉字");
        aqiCity.value = "";
        aqiCity.focus();
        flag = false;
    }
    if (!data){
        alert("请输入指数");
        aqiValue.focus();
        flag = false;
    }
    if (valueRegular.test(data)){
        alert("输入是指数不合法，请重新输入数字");
        aqiValue.value = "";
        aqiValue.focus();
        flag = false;
    }
    if(flag){
        //aqi['zhishu'] = data;
        //aqi['city'] = key;
        aqi['0'] = {
            'zhishu':data,
            'city':key
        };

    }

}



/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aqiTable = document.getElementById('aqi-table');
    var itemsHTML = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
    for(var item in aqi){
        //console.log(aqi);
        itemsHTML += '<tr><td>' + aqi[item].city +'</td><td>' + aqi[item].zhishu + '</td><td><button>删除</button></td></tr>';
    }
    console.log(itemsHTML);
    aqiTable.innerHTML = itemsHTML;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}


/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // 这里利用到事件委托
    var aqiTable = document.getElementById('aqi-table');
    aqiTable.onclick = function(evnt){
        evnt = evnt || window.event;
        var target = evnt.target || evnt.srcElement;
        if(target.tagName.toLowerCase() === "button"){
            var delNode = target.parentNode.parentNode;
            aqiTable.deleteRow(delNode.rowIndex);
        }
    };
}

function init() {
    var addBtn = document.getElementById('add-btn');

    addBtn.onclick = function(){
        addBtnHandle();
    };

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    delBtnHandle();
}
window.onload = function(){
    init();
}

