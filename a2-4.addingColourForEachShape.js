var canvas;
var ctx;
var w = 800;
var h = 500;

var flower = {
    x:0,
    y:0,
    c: 360,
    // c: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350],
    a:0.75,
    random:0,
// change: {x: 0, y: 0, w: 0, h: 0, c: 0, a: 0, random: 0}
};

var colours = []
    for(let i=0; i<10; i++){
        colours.push(rand(360));
    };



setUpCanvas();

flowerShape(flower);

//function declarations

function flowerShape(o){
    //to prevent total coverage by frame
        for (let i=0; i <10; i++){
        var x = o.x + rand(w);
        var y = o.y +rand(h);

        if(y > h - 25 || x > w - 25) {
        y -= 30;
        x -= 30;
        } else if (y < 25 || x < 25){
        y += 40;
        x += 40;
        }
        //o.c = rand(360);
        PetCo = rand(360);
        CirCo = rand(360);
        LayCo = rand(360);
        Circle(x, y, 60, o, CirCo);
        Petals (x, y, o, PetCo);
        LayerPetals (x, y, o, LayCo);
        
    }
}
    
function Petals(x, y, o, PetCo){
        ctx.fillStyle = "hsla("+PetCo+", 100%, 45%, "+o.a+")";
    
        //(cpx, cpy, x, y)

        //top petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+40, y-50, x, y-70);
        ctx.quadraticCurveTo(x-40, y-50, x, y);
        ctx.closePath();
        ctx.fill();

        //left petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-50, y-40, x-70, y);
        ctx.quadraticCurveTo(x-50, y+40, x, y);
        ctx.closePath();
        ctx.fill();
        
        //right petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+50, y+40, x+70, y);
        ctx.quadraticCurveTo(x+50, y-40, x, y);
        ctx.closePath();
        ctx.fill();
        
        // bottom petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-40, y+50, x, y+70);
        ctx.quadraticCurveTo(x+40, y+50, x, y);
        ctx.closePath();
        ctx.fill();

    }; 

function LayerPetals(x, y, o, LayCo){
        ctx.fillStyle = "hsla("+LayCo+", 90%, 30%, "+o.a+")";
        //top petal
         ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+30, y-30, x, y-40);
        ctx.quadraticCurveTo(x-30, y-30, x, y);
        ctx.closePath();
        ctx.fill();

        //left petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-30, y-30, x-40, y);
        ctx.quadraticCurveTo(x-30, y+30, x, y);
        ctx.closePath();
        ctx.fill();
        
        //right petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+30, y+30, x+40, y);
        ctx.quadraticCurveTo(x+30, y-30, x, y);
        ctx.closePath();
        ctx.fill();
        
        // bottom petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-30, y+30, x, y+40);
        ctx.quadraticCurveTo(x+30, y+30, x, y);
        ctx.closePath();
        ctx.fill();
    }; 

    function Circle(x, y, r, o, CiCo){
        ctx.beginPath();
        // ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = "hsla("+CiCo+", 90%, 80%, "+o.a+")";
        ctx.fill();
    }


function rand(range){
    var result = Math.random ()*range;
    return result
}
function randi(range){
    var result = Math.random()*range;
    var integer_result = Math.floor(result);
    return integer_result
}
function setUpCanvas (){
    canvas = document.getElementById ("canvas");
    canvas.width = w;
    canvas.height= h;
    ctx = canvas.getContext ("2d");
    ctx.fillStyle = "beige";
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    img = document.getElementById("frame");
    img.width=w+350;
    img.height=h+325;
}

console.log("this is assignment two of sctm-2005");