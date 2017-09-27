//变量的结构赋值
let testArry =  [a,b,c] = [0,1]
console.log(testArry);

let xyzArray = [i, j, k] = new Set(['a', 'b', 'c']);
console.log(xyzArray);

//结构赋值允许默认值
let fooArray =  [foo=true] = [];
let abArray =  [e,f=2] = [1,3];
console.log(fooArray);
//如果默认值是表达式，则表达式是惰性求值的只有在用到时候才会求值
function f(){
	console.log("aaa")
};
let [x=f()] = [1];

//对象的结构赋值
let {g,h} = {g:2,h:"haha"};
//默认值生效的条件是，对象的属性值严格等于undefined。
let {z= 1} = {z:5};
var someArray = [4,5,6]
var  [first,second,third] = someArray;
console.log(first+""+second+""+third);
const [l, m, n, o, p] = 'hello';
console.log(l+""+m+""+n+""+o+""+p);

var {x:y = 3} = {x: 5};
console.log(y);//对象有x，输出对于值

var {x:y = 3} = {y:10};
console.log(y);//对象没有x，输出默认值

var arr = [1,2,3,4,5,6,7];
var {3:first, [arr.length-1]: last} = arr;//此处last的左部用[]括起来，代表去取arr[arr.length-1]
console.log(first);//输出1
console.log(last);//输出7