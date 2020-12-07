class rec{

constructor(x,y,width,height){

this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
this.width=width;
this.height=height;
World.add(world,this.body)
        }
display(){
 var  xy = this.body.position
 fill(255,0,0);
rect(xy.x,xy.y,this.width,this.height);
}
        
}