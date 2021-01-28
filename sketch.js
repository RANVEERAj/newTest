var  database;
var gameState;
var playerCount;
var game,player,form;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game()
}

function draw(){
  
  background("white");
  game.getState()
  game.start()
 
  
}

