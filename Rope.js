class Rope {
    constructor(bodyA,pointB) {
      
      
        var options = {
          bodyA: bodyA,
          
         pointB:pointB
      }
      this.rope =Constraint.create(options)
     this.pointB=pointB
     this.pointX=bodyA.x
     this.pointY=bodyA.y-250
     
      World.add(world, this.rope);
    }
    display(){
      if(this.rope.bodyA){

      
      var pointA=this.rope.bodyA.position
      var pointB=this.pointB
      push()
      stroke("white")
      line(pointB.x,pointB.y,pointA.x,pointA.y)
      pop()
      }
    }
  }
  