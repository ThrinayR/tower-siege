class Slingshot
{
constructor(BodyA,PointB){

var options ={

BodyA:BodyA,
PointB:PointB,
stifness:0.04,
length:10

}
this.sling = Constraint.create(options)
World.add(world,this.sling)
this.PointB=PointB
}
fly()
{
this.sling.BodyA= null







}

display()
{

 if(this.sling.BodyB)
    {
      var PointA = null
      var PointB = this.sling.BodyB.position
      
      
      ine(PointA.x,PointA.y,PointB.x,PointB.Y)



    }



}




}




//BodyB = hexagon
//PointB = contact between sling attached to hexagon