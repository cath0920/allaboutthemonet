var canvas;
var ctx;
var w = 800;
var h = 500;

var flower = {
    x:0,
    y:0,
    w: 0,
    h: 0,
    a:0.75,
    r: 15,
    num: 7,
    change: {x: 0, y: 0, w: 40, h: 40, c: 0, a: 0, num: 2 }
};

var f2 = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    a: 0.85,
    r: 30,
    num:15 ,
    change: {x:20, y:20, w: 100, h: 100, a:0, r:40, num: 0}
}

var lilyPad = {
    x: 0,
    y: 0,
    a: 1,
    r: 50,
    num: 10,
    change: {x: rand(w)+50, y: rand(h)+50, a: 1, r: 0, num:0}
}

// var colours = []
//     for(let i=0; i<15; i++){
//         colours.push(rand(360));
//     };

setUpCanvas();

flowerShape(flower);

flowerShape(f2);

for(let i=0; i < 10; i++){
    Wircle(lilyPad.x, lilyPad.y, lilyPad.r, lilyPad.a);
    lilyPad.x += lilyPad.change.x;
    lilyPad.y += lilyPad.change.y;
    // lilyPad.r += lilyPad.change.r;
    // lilyPad.a = lilyPad.change.a;
}

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
            hue: randRange(290, 325),
            l: randRange(30,100),};
        let CirCo ={ 
            hue: randRange(70, 150),
            l: randRange(20,80),  };
        let LayCo = {
            hue: rand(360),
            l: randRange(0, 80),};

        Circle(x, y, o.r , o.a, CirCo);
        Petals (x, y, PetCo, o.a);
        LayerPetals (x, y, LayCo, o.a);
    }
};

function Petals(x, y, PetCo, a){
        ctx.fillStyle = "hsla("+PetCo.hue+", 45%, "+PetCo.l+"%, "+a+")";
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

function LayerPetals(x, y, LayCo, a){
        ctx.fillStyle = "hsla("+LayCo.hue+", 80%, "+LayCo.l+"%, "+a+")";
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

function Circle(x, y, r, a, CirCo){
        ctx.beginPath();
        // ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = "hsla("+CirCo.hue+" , 40%, "+CirCo.l+"%, "+a+")";
        ctx.fill();
    }

function Wircle(x, y, r, a){
        let WirCo = {
            hue: randRange(75, 190),
            l: randRange(20,85)};
        ctx.beginPath();
        ctx.arc(rand(x), rand(y), r, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = "hsla("+WirCo.hue+" , 60%, "+WirCo.l+"%, "+a+")";
        ctx.fill();
    }



    
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