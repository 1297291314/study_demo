function deepclone(param){
    if(Object.prototype.toString.call(param)==='[object Object]'){
        var obj = {}
        for(var i in param){
            obj[i] = deepclone(param[i])
        }
        return obj
    }else if(Object.prototype.toString.call(param)==='[object Array]'){
        return param.map(function(item){
            return deepclone(item)
        })
    }else{
        return param
    }
}