var canvas;
var ctx;
var w = 800;
var h = 500;

var flower = {
    x:0,
    y:0,
    w: 50,
    h: 50,
    a:0.75,
    r: 40,
    num: randRange(5, 20),
};

var wave = {
    x:0,
    y:0,
    a:0.25,
    r:100,
};

setUpCanvas();

Wircle(wave.x, wave.y, wave.r, wave.a);

flowerShape(flower);






//function declarations

function rand(range){
    var result = Math.random ()*range;
    return result
}

function randRange (min, max){
    var result = Math.random()* (max-min)+min;
    return result
}

function flowerShape(o){
    //to prevent total coverage by frame
        for (let i=0; i <o.num; i++){
        var x = o.x+rand(w);
        var y = o.y+rand(h);
        if(y > h - 40 || x > w - 40) {
        y -= 50; x -= 50; } else if (y < 40 || x < 40){
        y += 50; x += 50;}
       
       let PetCo = {
            hue: randRange(270, 325),
            l: randRange(40,100),};
        let CirCo ={ 
            hue: randRange(70, 150),
            l: randRange(20,60),  };
        let LayCo = {
            hue: randRange(0, 70),
            l: randRange(25, 70),};
        let r = randRange (o.r *0.7, o.r*1.5);
        Circle(x, y, r-(r/10) , o.a, CirCo);
        Petals (x, y, PetCo, o.a, r);
        LayerPetals (x, y, LayCo, o.a, r);
    }
};
function Circle(x, y, r, a, CirCo){
        ctx.beginPath();
        // ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = "hsla("+CirCo.hue+" , 40%, "+CirCo.l+"%, "+a+")";
        ctx.fill();
    }
function Petals(x, y, PetCo, a, r){
        let w = r *0.75;
        let l = r *1;
        ctx.fillStyle = "hsla("+PetCo.hue+", 45%, "+PetCo.l+"%, "+a+")";
        //top petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+w, y-l*0.6, x, y-l);
        ctx.quadraticCurveTo(x-w, y-l*0.6, x, y);
        ctx.closePath();
        ctx.fill();

        //left petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-l*0.6, y-w, x-l, y);
        ctx.quadraticCurveTo(x-l*0.6, y+w, x, y);
        ctx.closePath();
        ctx.fill();
        
        //right petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+l*0.6, y+w, x+l, y);
        ctx.quadraticCurveTo(x+l*0.6, y-w, x, y);
        ctx.closePath();
        ctx.fill();
        
        // bottom petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-w, y+l*0.6, x, y+l);
        ctx.quadraticCurveTo(x+w, y+l*0.6, x, y);
        ctx.closePath();
        ctx.fill();

    }; 

function LayerPetals(x, y, LayCo, a, r){   
        let w = r * 0.3;
        let l = r*1;
        ctx.fillStyle = "hsla("+LayCo.hue+", 80%, "+LayCo.l+"%, "+a+")";
        //top petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+w, y-w, x, y-l*0.5);
        ctx.quadraticCurveTo(x-w, y-w, x, y);
        ctx.closePath();
        ctx.fill();

        //left petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-w, y-w, x-l*0.5, y);
        ctx.quadraticCurveTo(x-w, y+w, x, y);
        ctx.closePath();
        ctx.fill();
        
        //right petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x+w, y+w, x+l*0.5, y);
        ctx.quadraticCurveTo(x+w, y-w, x, y);
        ctx.closePath();
        ctx.fill();
        
        // bottom petal
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x-w, y+w, x, y+l*0.5);
        ctx.quadraticCurveTo(x+w, y+w, x, y);
        ctx.closePath();
        ctx.fill();
    }; 


function Wircle(wx, wy, r, a){
    for (let i=0; i<3; i++){
        var wx = wave.x+rand(w);
        var wy = wave.y+rand(h);
        let WirCo = {
        hue: randRange(180, 255),
        l: randRange(0,50)
    };
        ctx.beginPath();
        ctx.arc(wx, wy, r*3, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = "hsla("+WirCo.hue+" , 60%, "+WirCo.l+"%, "+a+")";
        ctx.fill();
    }
}
   const refreshButton = document.getElementById("refreshButton");

      function refreshPage() {
        window.location.reload();
      }

      refreshButton.addEventListener("click", refreshPage);
    
//basic setup

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
