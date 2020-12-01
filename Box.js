class box{
    constructor(x,y,width,height){
        var options={
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("orange");
        rect(pos.x,pos.y,this.width,this.height);
    }
}