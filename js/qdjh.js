//《前端面试江湖》，2016年买给自己的生日礼物

//8.如何获取浏览器URL中查询字符串的参数
function getQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
//9.如何实现一个删除字符串左边空白字符的方法？
//^表示开始，'\s'表示空白字符，'/g'表示全局匹配
function leftTrim(str) {
    return str.replace(/^\s*/g, "");
}

//10.What is the data type that JavaScript's typeof returns?
//undefined,boolean,string,number,object,function

//13.实现字符串反转主要是把字符串从末尾开始的每一个元素截取后，再重新组成一个新的字符串
function revert(str) {
    var temp = ""; //remember to initialize
    for (i = str.length - 1; i > 0; i--) {
        temp += str[i];
    }
    return temp;
}
//18.如何检测一个变量是一个string类型？请写出函数实现
function testStr(str) {
    //if((typeof str)=="string")
    if ((typeof str) == "string" || str.constructor == String)
        return true;
    else
        return false;
}

//constructor vs prototype

function Person(name) {
    this.name = name;
    this.showMe = function() {
        alert(this.name);
    }
};

var one = new Person('js');

console.log(one.prototype) //undefined
console.log(typeof Person.prototype); //object
console.log(Person.prototype.constructor); //function Person(name) {...};

//20.有一个字符串abcd-ef-ghi，请用JavaScript将它处理成ghi&ef&abcd.
var str = "abcd-ef-ghi";
var temp = str.split('-');
var result = temp.reverse().join('&');


//请实现鼠标单击页面中的任意标签，alert该😊的名称
document.onclick = function(e) {
    var e = e || window.event;
    var src = e["target"] || e["srcElement"];
    alert(src.tagName.toLowerCase());
}

//33.下面的javascript代码段中，alert的结果是多少？
var a = 1;

function f() {
    //alert(a);
    var a = 2;
}
f(); //undefined

//34.结合<span id="outer">12<span id="inner">text</span></span>,谈谈innerHTML、outerHTML的区别
var childNodes = document.getElementById('inner_outer').getElementsByTagName("p");
//alert(childNodes[0]);
childNodes[0].innerHTML = document.getElementById("outer").innerHTML;
childNodes[1].innerHTML = document.getElementById("outer").outerHTML;
// alert("innerHTML:"+document.getElementById("outer").innerHTML);
// alert("outerHTML:"+document.getElementById("outer").outerHTML);
// alert("innerText:"+document.getElementById("outer").innerText);
// alert("outerText:"+document.getElementById("outer").outerText);

//42.找出id为“newsList”的HTML元素下的第一个节点，并将其移动到“newsList”的最后
var element = document.getElementById("newsList")
var temp = element.getElementsByTagName("p")[0];
element.removeChild(temp);
element.appendChild(temp);

//书中答案，貌似不可行
// var ul=document.getElementById("newsList").childNodes;
// alert(ul.firstChild.value);
// ul.appendChild(ul.firstChild);

//复制节点
var copy = temp.cloneNode(true);
element.appendChild(copy);

//46.insertAfter()
//DOM没有提供insertAfter()方法
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        // 如果最后的节点是目标元素，则直接添加。因为默认是最后
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
    }
}
var newElement = document.createElement("p");
var textNode = document.createTextNode("Hi June, just hold on!");
newElement.appendChild(textNode);
document.createAttribute("class");
//insertAfter(newElement,element);
var parent = element.parentNode;
parent.insertBefore(newElement, element);

//48.实现输出document对象中的所有成员的名称和类型
// for(key in document){
//     document.write(key+="=="+document[key]+"<br />");
// }

//49.找出所有className包含text的标签<li>,并将它们的背景颜色设置为黄色
var list = document.getElementsByTagName("li");
for (i = 0; i < list.length; i++) {
    var temp = list[i].getAttribute("class");
    if (temp != null && temp.indexOf("text") != -1) {
        list[i].style.backgroundColor = "yellow";
    }
}

//65.请编写代码扩展JavaScript的string对象，让其拥有一个新的方法killpoint()来删除字符串中的所有英文句号“.”，请用尽量少的代码实现。

String.prototype.killpoint = function() {
    return this.replace(/\./g, '');
}

//66.对string对象进行扩展，使其具有删除前后空格的方法
String.prototype.bothtrim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

//67
//获取字符数组
String.prototype.toCharArray = function() {
    return this.split("");
}

//获取n个相同的字符串
String.prototype.repeat = function(num) {
    var tempArr = [];
    for (var i = 0; i < num; i++) {
        tempArr.push(this);
    }
    return tempArr.join("");
}

//字符串逆序 （数组逆序有reverse方法）
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}

//测试是否是数字
String.prototype.isNumeric = function() {
    var tempFloat = parseFloat(this);
    if (isNaN(tempFloat))
        return false;
    return tempFloat == this;
}

//测试是否是整数
String.prototype.isInt=function(){
    if(this=="NaN")
        return false;
    return this==parseInt(this);
}

//合并多个空白为一个空白
String.prototype.oneSpace=function(){
    //* 匹配前面元字符0次或多次;+ 匹配前面元字符1次或多次;? 匹配前面元字符0次或1次
    //此处应该用+，表示至少有一个空白
    return this.replace(/\s+/g,' ');
}

//保留数字
String.prototype.leftNum=function(){
    return this.replace(/[^\d]+/g,"");
}

//保留字母
String.prototype.leftChar=function(){
    return this.replace(/[^a-zA-Z]+/g,"");
}

//保留中文
String.prototype.leftChinese=function(){
    return this.
}
