class pendulam {
    constructor(x,y,color) {
      var options = {
          restitution:1,
          friction:0,
frictionAir:0,

         
         inertia:Infinity
      }
      
      this.x=x
      this.y=y
      this.body = Bodies.rectangle(x,y,40,40,options);
      
      this.color=color
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      
      fill(this.color);
      ellipse(0, 0, 60,60);
      pop();
    }
  };