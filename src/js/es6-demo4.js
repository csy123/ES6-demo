//es6 对正则的扩展
var rex = new RegExp(/abc/gi,'i');  //es6 不会报错
console.log(rex.flags);

//字符窜可以有四种方法处理字符窜：match(),replace(),search()和split();
console.log("match方法"+"abc".match(/b/));
console.log("replace方法"+"abc".replace(/b/,'111'));
console.log("search方法"+"abc".search(/b/));
console.log("split方法"+"abc".split(/b/));
