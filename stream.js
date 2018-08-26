/**
 * Created by yangyangha on 2018/8/26.
 */

/**
 * 几本流使用--读取文件
 */
var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('./data/input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");



/**
 * 复制文件 --pip/stream 读一部分，写一部分
 * fs模块并没有提供一个copy的方法
 * http://www.zymseo.com/node/434.html
 */
fs.createReadStream('./data/input.txt').pipe( fs.createWriteStream('./data/copyed1.txt') );
//或者基本流方式

var rs = fs.createReadStream('./data/input.txt');
var ws = fs.createWriteStream('./data/copyed2.txt');

rs.on('data', function(chunk){
    if( ws.write(chunk)===false ){
        rs.pause();//如果上一段读取的内容还未写完，则暂停读取
    }
});

ws.on('train', function(){
    rs.resume();//上一段内容全部写入完毕之后，开始继续读取
});

rs.on('end', function(){
    console.log('end');
    ws.end();
});

rs.on('error', function(error){
    console.log(error);
});


//文件读取方式--这种方式是把文件内容全部读入内存，然后再写入文件，对于小型的文本文件，这没有多大问题
var source = fs.readFileSync('./data/input.txt', 'utf8');//读取1.txt中的内容
fs.writeFileSync('./data/copyed3.txt', source);//将source资源写入2.txt文件