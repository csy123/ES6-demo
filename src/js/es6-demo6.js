//数组
//$1 扩展运算符（...）它好比 rest 参数的逆运算,将一个数组转为用逗号分隔的参数序列
console.log(...[1,2,5])
console.log(1,...[3,6,78],5)
console.log(...document.querySelectorAll("div"))
console.log(...[1,8,15])
//var abc = ...[25,30,12]
//alert(typeof abc )//报错
//该运算符主要用于函数调用
function add(x,y){
	return x + y;
};
console.log(add(...[6,9]));


//$1.1 合并数组
//es5的写法
//[1, 2].concat(more)
console.log([1,2,...[6,56]]);

var arr1 = ["a","b"];
var arr2 = ["c"];
var arr3 = ["d","f"];
//es5 合并方法
console.log(arr1.concat(arr2,arr3));
//es6 合并方法
console.log([...arr1,...arr2,...arr3])

//$1.2与解构赋值组合
//es5 
var list = [2,5,58,2,36];
var a = list[0],rest = list.slice(1);
//es6 
console.log([a,...rest] = list);

// const [first, ...last] = [1, 2, 3, 4, 5];
// console.log(last)

// const [first, ...last] = [];
// console.log(first)
// console.log(last)

// const [first, ...last] = ["haha"];
// console.log(first)
// console.log(last)

//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
//const [...bust,first] = ["haha","hehe"];
//const [g,...b,c] = [1,2,3,4,5,6]

//$1.3 将字符窜转换正真的数组
console.log([..."hello"])

//$1.4 实现了 Iterator 接口的对象 ,任何iterator对象都可以用扩展运算符转为真正的数组
var divList = document.querySelectorAll("div")
console.log(...divList)


//$2 Array.from()   该方法用于将两类对象转为真正的数组，类似数组对象（array-like object）和可遍历对象（iterable）
//类数组eg
let arrayLike = {
	"0":"a",
	"1":"b",
	"2":"c",
	length:3
};
//es5 写法
console.log([].slice.call(arrayLike));
//es6 写法
console.log(Array.from(arrayLike));
//可以遍历对象
var divDomList = document.querySelectorAll("div");
Array.from(divDomList).forEach( function(element, index) {
	console.log(element.innerHTML);
});




//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
console.log(Array.from("hello moto"))

// Array.from方法还支持类似数组的对象。所谓类似数组的对象，
// 本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，
// 都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。
//具有length属性的对象
console.log(Array.from({length:5}))//[undefined, undefined, undefined, undefined, undefined]

//$ 2.1 Array.from还可以接受第二个参数，类似数组的map方法，用来对每个元素进行处理
//eg
var arrayLike1 = document.querySelectorAll("div");
console.log(Array.from(arrayLike1, x => x.textContent + x.textContent));
//类似于map
console.log(Array.from(arrayLike1).map(x => x * x));
console.log(Array.from([1,3,6],(x) => x * x))
//$ 3 Array.of 用于将一组值，转为正真数组 可以替代new Array()或者Array()
console.log(Array.of(3,8,9));


//$ Array 实例copyWithin(target,start,end); 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置
console.log([1,2,3,4,5].copyWithin(0,4));

//$5 Array 数组实例的 find() 和 findIndex()
//$5.1 find()方法参数是一个回调函数
console.log([1,8,36,0,10].find((x) => x > 10));//所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
//$5.2 findIndex()方法参数是一个回调函数跟find()类似，返回第一个满足条件的元素，在数组中的位置
console.log([1,8,36,0,10].findIndex((x) => x > 10))

//$6 Array.fill();使用给定的值，填充数组，替换原来的值
console.log(["a","c"].fill(10))
//该方法还可以接受第二个、第三个参数，用于指定，替换开始、结束位置
console.log(["a","c","b"].fill(10,1,2));


//$8 Array.includes(); Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
console.log([1,5,6,3,89].includes(5));
console.log([1,5,6,3,NaN].includes(NaN));
//接受第二个参数，指定表示搜索的位置
console.log([1,5,6,3,89].includes(3,-1));