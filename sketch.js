//personagem pc

var zumbi1
var zumbi2
var zumbi3

var zumbi1imagem
var zumbi2imagem
var zumbi3imagem

var rede1
var bumerangue2
var pa3

var rede1imagem
var bumerangue2imagem
var pa3imagem

//personagem npc
var caixoes

var caixoesimagem

var planta1
var planta2
var planta3

var planta1imagem
var planta2imagem
var planta3image 

var baudeajuda
var baudeajudaimagem

var premio 
var premioimagem

var fundo
var fundoimagem

var parede1
var parede2
var parede3
var parede4
var parede5
var parede6
var parede7
var parede8

var parede1a
var parede2a
var parede3a
var parede4a
var parede5a
var parede6a
var parede7a
var parede8a

var parede1b
var parede2b
var parede3b
var parede4b
var parede5b
var parede6b
var parede7b
var parede8b

var parede1c
var parede2c
var parede3c
var parede4c
var parede5c
var parede6c
var parede7c
var parede8c

var parede1d
var parede2d
var parede3d
var parede4d
var parede5d
var parede6d
var parede7d
var parede8d

var parede1e
var parede2e
var parede3e
var parede4e
var parede5e
var parede6e
var parede7e
var parede8e

var parede1f
var parede2f
var parede3f
var parede4f
var parede5f
var parede6f
var parede7f
var parede8f

var parede1g
var parede2g
var parede3g
var parede4g
var parede5g
var parede6g
var parede7g
var parede8g

var parede1i
var parede2i
var parede3i
var parede4i
var parede5i
var parede6i
var parede7i
var parede8i

var parede1j
var parede2j
var parede3j
var parede4j
var parede5j
var parede6j
var parede7j
var parede8j

var parede1k
var parede2k
var parede3k
var parede4k
var parede5k
var parede6k
var parede7k
var parede8k

var parede1l
var parede2l
var parede3l
var parede4l
var parede5l
var parede6l
var parede7l
var parede8l

var parede1m
var parede2m
var parede3m
var parede4m
var parede5m
var parede6m
var parede7m
var parede8m

var parede1n
var parede2n
var parede3n
var parede4n
var parede5n
var parede6n
var parede7n
var parede8n

var parede1o
var parede2o
var parede3o
var parede4o
var parede5o
var parede6o
var parede7o
var parede8o

var parede1p
//preload imagens pra carregar 

function preload() {
     zumbi1imagem = loadImage("zumbi1.png");
    // zumbi2imagem = loadImage();
    // zumbi3imagem = loadImage();
    
    // rede1imagem = loadImage();
    // bumerangue2imagem = loadImage();
    // pa3imagem = loadImage();
    
    // caixoessimagem = loadImage();
    // baudeajudaimagem = loadImage();
    // premioimagem = loadImage();
    
    // planta1imagem = loadImage();
    // planta2imagem = loadImage();
    // planta3image = loadImage();
    }

function setup() {

createCanvas(2025,1000);

// camera.zoom = 5

zumbi1 = createSprite(200,800,50,50);
zumbi1.addImage("z",zumbi1imagem)
zumbi1.scale = 0.07


 parede1 = createSprite(600, 950, 5, 100)
 parede2 = createSprite(1400, 950, 5, 100)
 parede3 = createSprite(67.5, 200, 135,5)
 parede4 = createSprite(300, 950, 5, 100)
 parede5 = createSprite(67.5, 400, 135, 5)
 parede6 = createSprite(165, 850, 5, 100)
 parede7 = createSprite(450, 850, 5, 100)
 parede8 = createSprite(833, 852, 5, 100)
 parede1a = createSprite(1150, 850, 5, 100)
 parede2a = createSprite(1885, 850, 5, 100)
 parede3a = createSprite(310, 752, 5, 100)
 parede4a = createSprite(450, 750, 5, 100)
 parede5a = createSprite(700, 750, 5, 100)
 parede6a = createSprite(1150, 750, 5, 100)
 parede7a = createSprite(1270, 750, 5, 100)
 parede8a = createSprite(1666, 750, 5, 100)
 parede1b = createSprite(177, 650, 5, 100)
 parede2b = createSprite(177, 550, 5, 100)
 parede3b = createSprite(600, 650, 5,100)
 parede4b = createSprite(234, 900, 135, 5)
 parede5b = createSprite(380, 800, 135, 5)
 parede6b = createSprite(664, 900, 135, 5)
 parede7b = createSprite(764, 900, 135, 5)
 parede8b = createSprite(1215, 900, 135, 5)
 parede1c = createSprite(1080, 900, 135, 5)
 parede2c = createSprite(1335, 900, 135, 5)
 parede3c = createSprite(1819, 900, 135, 5)
 parede4c = createSprite(1690, 900, 135, 5)
 parede5c = createSprite(510, 800, 135, 5)
 parede6c = createSprite(634, 800, 135, 5)
 parede7c = createSprite(898, 800, 135, 5)
 parede8c = createSprite(968, 800, 135, 5)
 parede1d = createSprite(1335, 800, 135, 5)
 parede2d = createSprite(1468, 800, 135, 5)
 parede3d = createSprite(1600, 800, 135, 5)
 parede4d = createSprite(1954, 800, 135, 5)
 parede5d = createSprite(244, 700, 135, 5)
 parede6d = createSprite(1600, 700, 135, 5)
 parede7d = createSprite(1730, 700, 135, 5)
 parede8d = createSprite(1795, 650, 5, 100)
 parede1e = createSprite(1730, 600, 135, 5)
 parede2e = createSprite(1600, 600, 135, 5)
 parede3e = createSprite(1470, 600, 135, 5)
 parede4e = createSprite(1400, 650, 5, 100)
 parede5e = createSprite(1345, 600, 135, 5)
 parede6e = createSprite(1210, 600, 135, 5)
 parede7e = createSprite(1077, 600, 135, 5)
 parede8e = createSprite(1012, 650, 5, 100)
 parede1f = createSprite(1147, 550, 5, 100)
 parede2f = createSprite(1147, 450, 5, 100)
 parede3f = createSprite(1077, 492, 135, 5)
 parede4f = createSprite(942, 492, 135, 5)
 parede5f = createSprite(807, 492, 135, 5)
 parede6f = createSprite(872, 440, 5, 100)
 parede7f = createSprite(872, 544, 5, 100)
 parede8f = createSprite(872, 644, 5, 100)
 parede1g = createSprite(806, 693, 135, 5)
 parede2g = createSprite(765, 693, 135, 5)
 parede3g = createSprite(670, 600, 135, 5)
 parede4g = createSprite(538, 600, 135, 5)
 parede5g = createSprite(403, 600, 135, 5)
 parede6g = createSprite(450, 545, 5, 100)
 parede7g = createSprite(515, 491, 135, 5)
 parede8g = createSprite(645, 491, 135, 5)
 parede1h = createSprite(680, 491, 135, 5)
 parede2h = createSprite(242, 500, 135, 5)
 parede3h = createSprite(310, 450, 5, 100)
 parede4h = createSprite(310, 350, 5, 100)
 parede5h = createSprite(245, 300, 135, 5)
 parede6h = createSprite(310, 250, 5, 100)
 parede7h = createSprite(310, 150, 5, 100)
 parede8h = createSprite(245, 100, 135, 5)
 parede1j = createSprite(370, 300, 135, 5)
 parede2j = createSprite(505, 300, 135, 5)
 parede3j = createSprite(570, 250, 5, 100)
 parede4j = createSprite(570, 350, 5, 100)
 parede5j = createSprite(505, 400, 135, 5)
 parede6j = createSprite(630, 400, 135, 5)
 parede7j = createSprite(872, 345, 5, 100)
 parede8j = createSprite(872, 245, 5, 100)
 parede1k = createSprite(801, 300, 135, 5)
 parede2k = createSprite(801, 195, 135, 5)
 parede3k = createSprite(737, 145, 5, 100)
 parede4k = createSprite(670, 96, 135, 5)
 parede5k = createSprite(535, 96, 135, 5)
 parede6k = createSprite(470, 150, 5, 100)
 parede7k = createSprite(935, 194, 135, 5)
 parede8k = createSprite(1000,141, 5, 100)
 parede1l = createSprite(935, 93, 135, 5)
 parede2l = createSprite(870, 40, 5, 100)
 parede3l = createSprite(1070, 195, 135, 5)
 parede4l = createSprite(1000, 350, 5, 100)
 parede5l = createSprite(1068, 300, 135, 5)
 parede6l = createSprite(1200, 300, 135, 5)
 parede7l = createSprite(1270, 350, 5, 100)
 parede8l = createSprite(1270, 250, 5 ,100)
 parede1m = createSprite(1270, 450, 5, 100)
 parede2m = createSprite(1270, 150, 5, 100)
 parede3m = createSprite(1340, 500, 135, 5)
 parede4m = createSprite(1470, 500, 135, 5)
 parede5m = createSprite(1400, 450, 5, 100)
 parede1n = createSprite(1340, 100, 135, 5)
 parede1n = createSprite(1470, 100, 135, 5)
 parede1n = createSprite(1600, 100, 135, 5)
 parede1n = createSprite(1670, 150, 5, 100)
 parede1n = createSprite(1735, 200, 135, 5)
 parede1n = createSprite(1800, 150, 5, 100)
 parede1n = createSprite(1735, 500, 135, 5)
 parede1n = createSprite(1670, 450, 5, 100)
 parede1o = createSprite(1600, 400, 135, 5)
 parede2o = createSprite(1535, 350, 5, 100)
 parede3o = createSprite(1470, 300, 135, 5)
 parede4o = createSprite(1400, 250, 5, 100)
 parede5o = createSprite(1470, 200, 135, 5)
 parede6o = createSprite(1600, 300, 135, 5)
 parede7o = createSprite(1720, 300, 135, 5)
 parede8o = createSprite(1790, 350, 5, 100)

 parede1p = createSprite(1860, 400, 135, 5)
}

function draw(){
background("black");
drawSprites()

// camera.x = zumbi1.x
// camera.y = zumbi1.y

if (keyIsDown (UP_ARROW)){
    zumbi1.y = zumbi1.y -3
}

if (keyIsDown(LEFT_ARROW)){
    zumbi1.x = zumbi1.x -3
}

if (keyIsDown (RIGHT_ARROW)){
    zumbi1.x = zumbi1.x +3
}

if (keyIsDown (DOWN_ARROW)){
    zumbi1.y = zumbi1.y +3
}

// parede1.bounceOff(zumbi1)

}











