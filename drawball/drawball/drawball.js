let ball = document.querySelector("#ball");
let background = document.querySelector("#background");
ball.onmousedown = function(event){
    // 首先获取当前ball的元素到上，左的具体位置
    var top = this.offsetTop;
    var left = this.offsetLeft;

    // 获取鼠标在ball内的上，左坐标
    console.log(event);
    var mouse_ball_y = event.pageY;
    var mouse_ball_x = event.pageX;

    // 获取background在body
    var bg_y = background.offsetTop;
    var bg_x = background.offsetLeft;

    // 鼠标移动，ball要跟着移动
    background.onmousemove = function(event_bg){
        // 获取鼠标的坐标
        var mouse_background_y = event_bg.pageY;
        var mouse_background_x = event_bg.pageX;

        // 设置ball 的具体位置
        var ball_y = mouse_background_y - top - bg_y;
        var ball_x = mouse_background_x - left - bg_x;

        ball.style.top = ball_y + "px";
        ball.style.left = ball_x + "px";

        ball.onmouseup = function(){
            ball.onmousedown = null;
            background.onmousemove = null;
        }

    }

}