var form,player,game, database;
var Bg,gameState=0,playerCount=0;
var distance=0,allPlayers;
var cars,car1,car2,car3,car4

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-50,displayHeight-50);

  game=new Game()
  game.getState()
  game.start()
}

function draw(){
    if(playerCount===4){
      game.update(1)
    }
    if(gameState===1){
      clear();
      game.play()
    }
}



