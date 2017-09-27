import '../less/test.less';
var moment = require('moment');//直接导入第三方库，该库回被打包在一起
function Test (){
	alert("58")
}
new Test();
console.log(moment().format())
