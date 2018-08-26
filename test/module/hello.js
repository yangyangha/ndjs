/**
 * Created by yangyangha on 2018/8/26.
 */

/**
 * 这里的exports就是module的属性exports
 *
 * 模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
 * https://www.runoob.com/nodejs/nodejs-module-system.html
 *
 * 模块分为两类：原生模块和文件模块。原生模块即 Node.js API 提供的原生模块，原生模块在启动时已经被加载。文件模块为动态加载模块，
 * 加载文件模块的工作主要由原生模块 module 来实现和完成。原生模块在启动时已经被加载，而文件模块则需要通过调用 Node.js 的 require 方法来实现加载。
 * 需要了解的一点是，Node.js 会对原生模块和文件模块都进行缓存，因此在第二次 require 该模块时，不会有重复开销去加载模块，只需要从缓存中读取相应模块数据即可。
 * https://blog.csdn.net/u013451157/article/details/78757442
 *
 * exports 与 module.exports 的区别
 * https://blog.csdn.net/u013451157/article/details/78757442
 * https://cnodejs.org/topic/5231a630101e574521e45ef8
 * https://cnodejs.org/topic/564ee1cc1ba2ef107f854e2b
 */
exports.world = function() {
    console.log('Hello World');
}
exports.name = "hi G";
console.log(module.exports.name);