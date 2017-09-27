//函数参数默认值
function log(x, y) {
    y = y || "word";
    console.log(x, y);
}
log("hello");
log("hello", "china");
log("hello", '');

//ES6允许为函数参数设置默认值，即直接写在参数定义的后面
function logTest(a, b = "word") {
    console.log(a, b);
}
logTest("hello");
logTest("hello", "china");
logTest("hello", '');

function Point(x = 1, y = 2) {
    this.x = x;
    this.y = y;
}
var P = new Point();
console.log(P);

//ES6中参数变量是默认声明的，故而不能再次let或const声明
/*function foo(x,y){
	let x = 5;    //SyntaxError: redeclaration of formal parameter x
	const y = 0;
}*/

//使用默认参数时，函数不能有同名参数
/*function foo(x,x,y){
	console.log(x)
}*/
// function foo(x,x,y = 1){
// 	console.log(y);
// }

//参数默认值可以与解构赋值的默认值，结合起来使用。
// function foo({x,y = 5}){
// 	console.log(x,y)
// }
// foo({});
// foo({x:1});
// foo({x:1,y:2});
// foo();
//上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值。
function foo({ x, y = 5 } = {}) {
    console.log(x, y);
}
foo(); //undefined 5

//上面代码指定，如果没有提供参数，函数foo的参数默认为一个空对象。
//
//下面是另一个解构赋值默认值的例子。
// function feth(url,{body='',method = 'Get',headers = {} }){
// 	console.log(method)//结构赋值的默认值
// }

// feth("http://haha.com",{});
//feth("http://haha.com")

//如果结合函数参数的默认值，就可以省略第二个参数。这时，就出现了双重默认值。
function feth(url, { method = 'get' } = {}) {
    console.log(method)
}
feth("http://obs.com")

//参数默认值的位置
function f(x = 1, y) {
    return [x, y]
}
//不能只省略默认值，而不省略其他后面的参数，除非显示的传入undefined,如果出传入undefined，则会触发该参数等于默认值
console.log(f());
console.log(f(undefined, 1))
console.log(f(undefined, undefined))



//函数的length属性，指定的参数默认值的函数，length属性将会失真,lenth的含义是预期传入的参数个数，某个参数指定默认值以后，预期传入的参数就不包含这个参数了
console.log((function(a = 1, b, c) {}).length) //0 如果默认值参数不是在末尾的话，那么后面的参数也不会计入length了
console.log((function(b, c) {}).length)
console.log((function(b, c, d = 1) {}).length) //2

//参数作用域
//一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。
var x = 1;

function textX(x, y = x) {
    console.log(y)
}
textX(2)


//let c = 1; 全局的c不存在则会报错
// function textC(y = c){
// 	let c = 2;
// 	console.log(y)
// }
// textC();

//rest 参数，形式(...values) 用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}

console.log(add(1, 3, 5));

//箭头函数，ES6允许用“箭头”（=>）定义函数
var sum = (num1, num2) => num1 + num2;
console.log(sum(6, 14));

var getTempId = id => ({ id: id, name: "temp" })
console.log(getTempId("笨小孩").id)

//箭头函数，参数结构赋值
const full = ({ first, last }) => first + " " + last;
console.log(full({ first: 1, last: 2 }))

//用于简化回调函数
var array = [1, 3, 9].map(x => x * x);
console.log(array)

var array1 = [25, 36, 1, 5, 24, 25].sort((a, b) => a - b);
console.log(array1)

const numbers = (...nums) => nums;
var array2 = numbers(1, 3, 14, 57, 32);
console.log(array2)

const headAndTail = (head, ...tail) => [head, ...tail];
var array3 = headAndTail(27, ["s", 25, "sb"]);
console.log(array3)

//箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的
// function fooTest(){
// 	setTimeout(() => {
// 		console.log("id:",this.id)
// 	},100)
// }
// var id = 36;
// fooTest.call({"id":42});

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000);
    setInterval(function() {
        this.s2++;
    }, 1000);

}

var timer = new Timer();
setTimeout(function() {
    console.log(timer)
}, 3100)


// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);

//箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。下面是一个例子，DOM 事件的回调函数封装在一个对象里面。
var handler = {
    "id": 123456,
    init: function() { //箭头函数，this指向箭头函数定义时的作用域（handler对象）
        document.addEventListener("click", event => this.doSomething(event.type), false)
    },
    doSomething: function(type) {
        console.log('handler' + " " + type + " " + "for" + " " + this.id)
    }
}
//his指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，
//导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。
handler.init();



//6 绑定 this
//绑箭头函数可以绑定this对象，大大减少了显式绑定this对象的写法（call、apply、bind）。
//但是，箭头函数并不适用于所有场合，所以ES7提出了“函数绑定”（function bind）运算符，
//用来取代call、apply、bind调用。虽然该语法还是ES7的一个提案，但是Babel转码器已经支持。

//函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。



// ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。

// 这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。

// func.arguments：返回调用时函数的参数。
// func.caller：返回调用当前函数的那个函数。
// 尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。
// 
function restricted() {
  'use strict';
  restricted.caller;    // 报错
  restricted.arguments; // 报错
}
restricted();

//7.尾调用优化
//概念：就是指某个函数的最后一步是调用另一个函数。
//注意，只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。
function addOne(a) {
    var one = 1;

    function inner(b) {
        return b + one;
    }
    return inner(a);
}
//尾递归 函数调用自身，称为递归。如果尾调用自身，就称为尾递归
//eg.
// function factorial(n){
// 	var index = n;
// 	if(n===1){
// 		console.log("startTime:" + new Date().getTime())
// 		return 1;
		
// 	}
// 	index --
// 	if(index===1){
// 		console.log('endTine:'+ new Date().getTime());
// 	}
// 	return n * factorial(n-1)
// }
// var result = factorial();
// console.log(result)
// function factorial(n, total) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }

// var totalResult = factorial(5, 1);
// console.log(totalResult)


function Fibonacci (n) {
  if ( n <= 1 ) {return 1};
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

Fibonacci(10) // 89
//console.log(Fibonacci(45)) // 堆栈溢出
// Fibonacci(500) // 堆栈溢出
// 
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}
console.log(Fibonacci2(1))
console.log(Fibonacci2(100))
//ES6 中只要使用尾递归，就不会发生栈溢出，相对节省内存。尾递归的实现，需要改写递归函数，做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。
//
//函数柯里化，意思是将多参数的函数转换成单参数的形式，并且返回接受余下的参数而且返回结果的新函数
//
//1、延迟计算。上面的例子已经比较好低说明了。
//2、参数复用。当在多次调用同一个函数，并且传递的参数绝大多数是相同的，那么该函数可能是一个很好的柯里化候选。
//3、动态创建函数。这可以是在部分计算出结果后，在此基础上动态生成新的函数处理后面的业务，这样省略了重复计算。]
//或者可以通过将要传入调用函数的参数子集，部分应用到函数中，从而动态创造出一个新函数，这个新函数保存了重复传入的参数（以后不必每次都传）。
//例如，事件浏览器添加事件的辅助方法：（其实是闭包的应用）
//最后的有一个处理函数，将接受最终的参数，古一般将处理函数，当做参数传入柯里化函数
function currying (fn, n){
	return function(m){
		return fn.call(this,m,n)
	}
}


function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}
const factorial = currying(tailFactorial,1)
var result = factorial(5);
console.log('result:'+result);