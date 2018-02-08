/*
* @Author: cd
* @Date:   2018-01-16 17:26:49
* @Last Modified by:   cd
* @Last Modified time: 2018-01-16 17:27:12
*/
require.config({
  // baseUrl: ""
  paths:{
    'jquery': "../lib/jquery-2.2.2",
    "math_profile": "./math_profile",
    "document_alert": "./not_standard"
  },
  shim: {
    'document_alert':{
      deps: ['jquery'],
      exports: '_'
    }
  }
})
require(['jquery', 'math' ,'document_alert'],function($, Math, _){
  $("#click_me").on("click",function(){
    $("#show_text").html("requireJs is so easy"+Math.add(1,3));
    alert("半径为3圆的面积"+Math.circle_area(3));
    aler();
  });
})