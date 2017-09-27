for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}

//es6 语法
// let 声明变量 不存在变量提升
/*console.log(foo);
var foo = 2;*/

let foo = 2;
console.log(foo);



//暂时性死区
var explale = 23;
if (true) {
    var explale = 62;
    //let explale;
    console.log(explale);
    woqu(explale)
}

function woqu(num) {
    console.log(num)
}

//let 不允许重复声明 ，同一个作用于内不允许重复声明同一个变量,函数内部不能重新声明参数
function fuc(abc) {
    //let a;
    //var a;
    //let abc;
    {
        let abc;
    }
}

//es6 let位javscript 定义了块级作用域
{
    {
        {
            {
                {
                    let abc = "haha";
                }
                let abc = "haha"
                //console.log(abc)
            }
        }
    }
}


//es6 支持块作用于内声明函数
//允许在块级作用域内声明函数。
//函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
//同时，函数声明还会提升到所在的块级作用域的头部。
//最好是声明函数表达式
function f() { console.log('I am outside!'); }
(function() {
	//相当于var f = undefined;
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
        var a = function (){
        	console.log("I am sb")
        }
    }

    //f();
}());

// es6 do表达式 do{} 有返回值，返回值是什么呢？
// let x = do {
//   let t = f();
//   t * t + 1;
// };
console.log("x:");


//const 声明一个只读的常量，一旦声明，常量的值就不能改变，并且马上赋值，否则会报错
// const HAHA = 'haha';
// HAHA = 3; //报错
//const HAHA;//报错
//const 跟let一样只在声明所在的作用域内有效
if(true){
    const ABC = 5;
}
//alert(ABC); 报错ABC  undefined
//const 同样声明的常量也是不提升的，同样也存在暂时性死区,同样也不能重复声明
// if(true){
//     console.log(TEST);
//     const TEST = "test";
// }

var message = "你死定了";
let sb = 5;

// const message = "budasini";
// const sb = 'hehe';   报错重复声明变量
// 
// const实际上保证的，并不是变量的值不得改动，
// 而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），
// 值就保存在变量指向的那个内存地址，因此等同于常量。
// 但对于复合类型的数据（主要是对象和数组），
// 变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，
// 至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
// es6 总共有六种声明变量的方法var 、function、let、const 、import、class
/*顶层对象
*在浏览器环境是window对象，在node环境则是global对象
*为了兼容es5，es6语法中var 跟function声明的全局变量还是属于windo对象
*但是let、const、class声明的全局变量不属于window对象属性
*/
var a = 1;
console.log(window.a);

let b = 2;
console.log(window.b);//报错undefined
