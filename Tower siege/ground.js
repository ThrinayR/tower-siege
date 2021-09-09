class Ground
{
constructor(a,b,c,d){
var options = {
    
isStatic: true,


}    

this.x = a
this.y = b
this.w = c
this.h = d




this.body = Bodies.rectangle(a,b,c,d,options)
//this.image=loadImage("polygon+(1).png")
World.add(world,this.body)


}


display(){

    var hexagon_position = this.body.position;
    push()
    //fill ("grey")
    translate (hexagon_position.x, hexagon_position.y)
    rect(0,0,this.w,this.h)
    //image(this.image,0,0,this.w,this.h)
    pop ()
    }
    


}