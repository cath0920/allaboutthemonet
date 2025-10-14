var canvas;
var ctx;
var w = 800;
var h = 500;

setUpCanvas();



//function declarations

// const imgElement = document.createElement('img');
// imgElement.src = "frame.png";
// imgElement.width = w + 100;
// imgElement.height = h+ 100;
//didn't work

function rand(range){
    var result = Math.random ()*range;
    return result
}
function randi(range){
    var result = Math.random()*range;
    var interger_result = Math.floor(result);
    return interger_result
}
function setUpCanvas (){
    canvas = document.getElementById ("canvas");
    //canvas.style.border = "8px solid rgb(128, 94, 21)";
    canvas.width = w;
    canvas.height= h;
    ctx = canvas.getContext ("2d");
    ctx.fillStyle = "beige";
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    img = document.getElementById("frame");
    img.width=w+100;
    img.height=h+100;
}



//const backgroundImage = new Image();
//backgroundImage.onload = function(){
//ctx.drawImage (backgroundImage, 0, 0, w+20, h+20);};
// backgroundImage.src = "frame.png";
//drew the image inside the canvas, I want it outside surrounding the canvas, need to use html/css
console.log("this is assignment two of sctm-2005");