var path = require("path")
var express = require("express")
var app = express();
var routes = require("./routes/index") 
//读取静态
app.use(express.static(path.join(__dirname, 'public')));
// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');

routes(app);
console.log("sever running on 3000")
app.listen(3000);