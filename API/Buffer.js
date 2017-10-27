/*
* @Author: hasee
* @Date:   2017-10-27 16:10:14
* @Last Modified by:   hasee
* @Last Modified time: 2017-10-27 16:40:18
*/

// 视频：http://www.imooc.com/learn/637

// Buffer在nodejs中用来处理二进制的数组（js字符串是用utf-8存储的，处理二进制的能力是很弱的，而网络层对资源的请求，响应等基本以二进制来进行交互）创建一个专门存储二进制的缓存区，并提供了一些方法对这些缓存区的数据做进一步的处理
// buffer在nodejs里可全局访问


// 复制一个图片，拿到base64的编码，并再生成图片
var fs=require('fs');

fs.readFile('logo.png',function(err,origin_buffer){
	console.log(Buffer.isBuffer(origin_buffer))//判断是否为缓冲区

	fs.writeFile('logo_buffer.png',origin_buffer,function(err){//将开始的buffer得到一个新的new——image
		if(err) console.log(err);
	})

	var base64Image=origin_buffer.toString('base64');

	console.log(base64Image);

	var decodeImage=new Buffer(base64Image,'base64');

	console.log(Buffer.compare(decodeImage,origin_buffer));

	fs.writeFile('logo_decode.png',decodeImage,function(err){
		if(err) console.log(err);
	})
})