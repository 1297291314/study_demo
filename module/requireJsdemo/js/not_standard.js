




function aler(){
  console.log(1);
  $("body").on("click", function(){
    alert("我不标准，还需要依赖jquery");
  })
}