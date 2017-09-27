//字符窜的扩展字符便遍历器
for (let codePoint of 'chenshiyu') {
	console.log(codePoint)
}

//最大优点是识别为大于0x20BB7;码点
var text = String.fromCodePoint(0x20BB7);
for (let i of text) {
	console.log(i)
}

var s = "hello word";
console.log(s.includes("wo"));
console.log(s.startsWith("hel"))
console.log(s.endsWith("d"));

//repeat(n)返回一个新的字符串，将原来的字符串重复n次
console.log(s.repeat(4))

//字符窜补全长度的功能padStart，padEnd
console.log('x'.padStart(-1,"cd"))
console.log('x'.padEnd(12));
//字符模板
var haha = "love u more than i can see";
var temple = `<ul><li>${haha}</li></ul>`;
$(".test-str").append(temple);

//大括号里面可以书写任何javascript表达式
var x = 'a';
var y = 'b';
console.log(`${x + y}`);

//标签模板 字符窜模板还可以接在函数名后面，该函数将用来处理字符窜模板
alert`haha`;//标签模板其实不是模板，而是函数一种特殊的调用模式
var a = 5;
var b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return "OK";
}

tag`Hello ${ a + b } world ${ a * b}`;

var total = 30;


// function passthru(literals) {
//   var result = '';
//   var i = 0;
//    console.log(arguments);
//   while (i < literals.length) {
//     result += literals[i++];
//     if (i < arguments.length) {
//       result += arguments[i];
//     }
//   }

//   return result;
// }
function passthru(literals, ...values) {
  var output = "";
  for (var index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
 
  }
  console.log("output"+output);
  console.log("literals"+literals)
  console.log("values"+values);
  //output += literals[index]
  
  return output;
}

var msg = passthru`The total is ${'total'} (${'total'*1.05} with tax)`;

//“标签模板”的一个重要应用，就是过滤HTML字符串，防止用户输入恶意内容。
var sender = '<script>alert("abc")</script>'; // 恶意代码
var message =
  SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}

console.log("message"+message)

console.log`123`


tag`First line\nSecond line`;//模板处理函数的第一个处理参数（模板字符窜数组）还有一个属相raw

function tag(strings) {
  console.log(strings.raw[0]);
  // "First line\\nSecond line"
}
