class Player {
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.rank=0;
    }
    getCount(){
     var playerCountref=database.ref('playerCount');   
     playerCountref.on("value",function(data){
       playerCount=data.val();  
     })
    }
    updateCount(Count){
    database.ref('/').update({
        playerCount:Count
    });
}
    getCars(){
   database.ref('carsatend').on("value",(data)=>{;
   this.rank=data.val();
    })
    }
    static updateCars(rank){
        database.ref('/').update({
            carsatend:rank
        })
    } 
update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        
    })
}
static getplayerinfo(){
    var playerinforef=database.ref('players')
    playerinforef.on("value",(data)=>{
        allplayers=data.val();
    })
}
}