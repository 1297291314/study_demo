//define第一个参数是需要模块以数组表示



define(['math_profile'], function(math_const){
  var add = function (x, y){
    return x+y;
  }

  var circle_area = function(r){
    return math_const.pi*Math.pow(r,2);
  }
  return{
    add: add,
    circle_area: circle_area
  }
})