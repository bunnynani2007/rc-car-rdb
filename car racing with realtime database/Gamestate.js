class Gamestate{
    constructor(){
        
    }
    getState(){
        var gamestatusref=gameDataBase.ref("gameState")
        gamestatusref.on("value",(data)=>{gamestatus=data.val()});
    }
    updateState(state){
        gameDataBase.ref("gameState").update({
            gameState:state
        
        });
    }
    async start(){
        if(gamestatus === 0){
            player=new Player()
            var playerref=await gameDataBase.ref("PlayerCount").once("value")
            if(playerref.exists()){
                playercount=playerref.val()
                player.getCount();
            }
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car1.addImage("car1", car1img);
        car2=createSprite(300,200);
        car2.addImage("car2",car2img);
        car3=createSprite(500,200);
        car3.addImage("car3",car3img);
        car4=createSprite(700,200);
        car4.addImage("car4",car4img);
        cars=[car1,car2,car3,car4];
    }
    play(){
        form.getHide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            background(rgb(198,135,103));
            image(track, 0, -displayHeight*4,displayWidth,displayHeight*5);
            var index=0
            var x=175;
            var y=0;

            for(var plr in allplayers){
                index=index+1;
                x=x+200;
                y=displayHeight-allplayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index === player.index){
                    stroke(10)
                    fill("red");
                    ellipse(x,y,60,60);
                    cars[index-1].shapeColor="red";

                }

            }

        }

        if(keyDown(UP_ARRoW) && player.index!==null){
            player.distance+=10
            player.updatePlayer();
        }
        drawSprites();
    }
}