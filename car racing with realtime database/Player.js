class Player{
    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;

    }
    getCount(){
        var pcount=gameDataBase.ref("PlayerCount");
        pcount.on("value",(data)=>{
            playercount=data.val();

        });
    
    }
    updateCount(count){
        //var ucount=gameDataBase.ref("PlayerCount")    
        gameDataBase.ref("/").update({
            PlayerCount:count
        })
    }
    updatePlayer(){
        try{
    gamedataBase.ref("Players/player"+this.index).set({
        Distance:this.distance,
        Name:this.name
    })
}
 catch(e){
     console.log(e)
 }    

    }
   static getPlayerInfo(){
        var readDB=gameDataBase.ref("Players")
        readDB.on("value",(data)=>{
            allPlayers=data.val();
        });
    }

}