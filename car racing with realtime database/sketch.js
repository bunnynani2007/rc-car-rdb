var ball;
var gameDataBase;
var position;
var track, car1img, car2img, car3img, car4img, ground;
var gamestate;
var gamestatus=0;
var player, allPlayers, form, playercount;
var car1, car2,car3,car4;
var cars=[];
function preload(){
    track=loadImage("../images/track.jpg");
    car1img=loadImage("../images/car1.png");
    car2img=loadImage("../images/car2.png");
    car3img=loadImage("../images/car3.png");
    car4img=loadImage("../images/car4.png");
    ground=loadImage("../images/ground.png")
}

function setup(){
    createCanvas(500,500);
    gameDataBase=firebase.database();
   gamestate= new Gamestate()
   gamestate.getState();
   gamestate.start();

}

function draw(){
    background("white");
}

