// Function.prototype.bindFn = function(Arg){
//     if(typeof this !== 'function'){
//         throw new TypeError('This is not a function')
//     }
//     // 存储进来的函数
//     var self = this
//     var args = [].slice.call(arguments,1)
//     var bound = function(){
//         var boundArgs = [].slice.call(arguments)
//         return self.apply(Arg,args.concat(boundArgs))
//     }
//     return bound
// }
Function.prototype.myBind = function(thisArg){
    if(typeof this !== 'function'){
        throw new TypeError('This is not a function')
    }
    //  保存当前环境下的this，也是保存第一次绑定的函数本体
    var self = this
    var arg = [].slice.call(arguments, 1)
    return function(){
        var argNext = arg.concat([].slice.call(arguments))
        return self.apply(thisArg,argNext)  
    }
}
var cc = {
    a: 2,
    b: 1
}
function sum(c){
    return this.a + this.b+c 
}
var ccSum = sum.myBind(cc,1)
console.log(ccSum())

Function.prototype.myCall = function(context,arg){
    var contextThis = context || window
    contextThis.func = this
    var res = contextThis.func(...arg)// es6写法
    delete contextThis.func // 删除避免副作用
    return res
}
