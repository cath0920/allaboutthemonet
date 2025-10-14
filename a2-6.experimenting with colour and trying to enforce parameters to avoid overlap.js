var canvas;
var ctx;
var w = 800;
var h = 500;

var flower = {
    x:0,
    y:0,
    c: 360,
    a:0.75,
   // random:0,
    // change: {x: 0, y: 0, w: 0, h: 0, c: 0, a: 0, random: 0}
};

var colours = []
    for(let i=0; i<15; i++){
        colours.push(rand(360));
    };

setUpCanvas();

flowerShape(flower);
otherFlowers(flower);

//function declarations

function flowerShape(o){
    //to prevent total coverage by frame
        for (let i=0; i <7; i++){
        var x = o.x + 10+rand(w);
        var y = o.y +15+rand(h);
        if(y > h - 25 || x > w - 25) {
        y -= 50;
        x -= 50;
        } else if (y < 25 || x < 25){
        y += 50;
        x += 50;
        }
        // o.c = rand(360);
        PetCo = {
            hue: randRange(290, 325),
            l: randRange(30,100),
        };
        CirCo = randRange(60, 165);
        LayCo = rand(360);
// //trying to ensure the circle and petal colours aren't too similar/the same
//         if (CirCo >= PetCo.hue -15 || CirCo >= PetCo.hue -30 || CirCo >= PetCo.hue - 45){
//             CirCo = (CirCo + rand(30))%360;
//         } else if (CirCo <= PetCo.hue-45){
//            //CirCo = (CirCo + rand(10))%360;
//        // }

        //LayCo = rand(360)%5; //experimenting to see how modulo works and where
        Circle(x, y, 30, o, CirCo);
        Petals (x, y, o, PetCo);
        LayerPetals (x, y, o, LayCo);
    }
}

   function otherFlowers(){
     for (let i=0; i <7; i++){
        var x = o.x +rand(w);
        var y = o.y +rand(h);
        if(y > h - 25 || x > w - 25) {
        y -= 50;
        x -= 50;
        } else if (y < 25 || x < 25){
        y += 50;
        x += 50;
        }
         PetCo1 = {
            hue: randRange(325, 360),
            l: randRange(30,100),
        };
        CirCo = randRange(60, 165);
        LayCo = rand(360);
        Circle(x, y, 30, o, CirCo);
        Petals (x, y, o, PetCo1);
        LayerPetals (x, y, o, LayCo); 
        }}

function Petals(x, y, o, PetCo){
        ctx.fillStyle = "hsla("+PetCo.hue+", 45%, "+PetCo.l+"%, "+o.a+")";
    
        //top petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+20, y-25, x, y-35);
        ctx.quadraticCurveTo(x-20, y-25, x, y);
        ctx.closePath();
        ctx.fill();

        //left petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-25, y-20, x-35, y);
        ctx.quadraticCurveTo(x-25, y+20, x, y);
        ctx.closePath();
        ctx.fill();
        
        //right petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+25, y+20, x+35, y);
        ctx.quadraticCurveTo(x+25, y-20, x, y);
        ctx.closePath();
        ctx.fill();
        
        // bottom petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-20, y+25, x, y+35);
        ctx.quadraticCurveTo(x+20, y+25, x, y);
        ctx.closePath();
        ctx.fill();

    }; 

function LayerPetals(x, y, o, LayCo){
        ctx.fillStyle = "hsla("+LayCo+", 80%, 25%, "+o.a+")";
        //top petal
         ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+15, y-15, x, y-20);
        ctx.quadraticCurveTo(x-15, y-15, x, y);
        ctx.closePath();
        ctx.fill();

        //left petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-15, y-15, x-20, y);
        ctx.quadraticCurveTo(x-15, y+15, x, y);
        ctx.closePath();
        ctx.fill();
        
        //right petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+15, y+15, x+20, y);
        ctx.quadraticCurveTo(x+15, y-15, x, y);
        ctx.closePath();
        ctx.fill();
        
        // bottom petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-15, y+15, x, y+20);
        ctx.quadraticCurveTo(x+15, y+15, x, y);
        ctx.closePath();
        ctx.fill();
    }; 

    function Circle(x, y, r, o, CirCo){
        ctx.beginPath();
        // ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = "hsla("+CirCo+", 90%, 80%, "+o.a+")";
        ctx.fill();
    }


function rand(range){
    var result = Math.random ()*range;
    return result
}

function randRange (min, max){
    var result = Math.random()* (max-min)+min;
    return result
}

// function randi(range){
//     var result = Math.random()*range;
//     var integer_result = Math.floor(result);
//     return integer_result
// }
function setUpCanvas (){
    canvas = document.getElementById ("canvas");
    canvas.width = w;
    canvas.height= h;
    ctx = canvas.getContext ("2d");
    ctx.fillStyle = "hsla(215, 70%, 20%, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    img = document.getElementById("frame");
    img.width=w+350;
    img.height=h+325;
}

console.log("this is assignment two of sctm-2005");