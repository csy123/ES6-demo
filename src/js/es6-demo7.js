//对象的扩展
//$1 属性简介表示方法 ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
var foo ="wo qu";
var quickAlert = function(){
	console.log("hahahahahahaah")
}
var abc = {foo,quickAlert};
console.log(abc.foo)
abc.quickAlert();


function creat(x,y){
	return {x,y};
}

console.log(creat(5,10));

//方法简写
var o = {
	method (){
		console.log("确定，您真的需要调用我？")
	}
}
o.method();

var birthyday = '1988/10/14';
var Person = {
	name:"张三",
	birthyday,
	hello(){
		console.log('我的名字是:',this.name)
	}
}
Person.hello();

//这种写法用于函数的返回值，将会非常方便。
function getPoints(){
	var x = 10;
	var y = 20;
	return {x,y};
}
console.log(getPoints());

//CommonJS 模块输出一组变量，就非常合适使用简洁写法。
var ms = {};
function getItem(key){
	return key in ms ? ms[key] : null;
};
function setItem(key,value){
	ms[key] = value;
};
function clearItem(){
	ms = {};
}
//module.exports = {getItem,setItem,clearItem}

//属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。
var cart = {
	_wheels:4,
	get wheels(){
		return this._wheels
	},
	set wheels(value){
		if(value < this._wheels){
			throw new Error("数字太小")
		}
		this._wheels = value;
	}
}
console.log(cart.wheels);

//属性名表达式，es6允许字面量定义对象时，可以用表达式作为属性名，置于方括号内
let prokey = 'foo' ;
let obj = {
	[prokey]:true,
	['a' + 'bc']:123
}
console.log(obj.abc);

let lastword = "last word";
const a = {
	'first word':'hello',
	[lastword]:'word'
}
console.log(a['first word']);
console.log(a['last word']);

console.log(a[lastword]);


//表达式还可以定义方法名
let testObj = {
	["h" + 'ello'](){
		return 'hi'
	}
}
console.log(testObj.hello())

//$3 方法的name属性
//函数的name属性，返回函数名，对象方法也是函数，也有name属性
const testObjFunName = {
	sayName(){
		console.log("hello");
	}
}
console.log(testObjFunName.sayName.name);


//$4 Object.is(); ES5中比较两个值是否相等，只有两个运算符，相等运算符“==”和严格相等运算符“===”，都有缺点：第一种会转换数据类型，
//Object.is()与“===”行为基本一致，对于+0和-0，以及NAN是否等于自身处理不一样


//$5 Object.assign();用于对象的合并，将源对象（sourse）可枚举属性复制到目标对象（target）
var target = {a:1};
var sourse2 = {b:2};
var sourse3 = {c:3};
Object.assign(target,sourse2,sourse3);
console.log(target);

//如果源对象，跟目标对象具有相同属性或多个源对象有相同属性，则后面的属性会覆盖前面的属性
var test1 = {a:1,b:2};
var test2 = {b:3,c:4};
var test3 = {c:5};
Object.assign(test1,test2,test3);
console.log(test1);

//Object.assign()实行的是浅拷贝，不是深拷贝，如果源对象某个属性值是个对象，那么目标对象拷贝得到的是这个对象的引用
var obj1 = {a:{b:1}};
var obj2 = Object.assign({},obj1);
obj1.a.b = 3;
console.log(obj2.a.b);

