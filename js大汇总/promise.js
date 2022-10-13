function myPromise(fun){
    var self = this; // 保存当前promise实例
    self.value = null; // 成功时的值
    self.error = null;// 失败时的原因
    self.onFulfilled = null;// 成功回调函数
    self.onRejected = null; //失败的回调函数
    function resolve(value){
        self.value = value;
        self.onFulfilled(self.value);// resolve时执行成功回调
    }
    function reject(error){
        self.error = error;
        self.onRejected(self.error)// reject执行失败回调
    }
    fun(resolve, reject)
}
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    //在这里给promise实例注册成功和失败回调
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
}
