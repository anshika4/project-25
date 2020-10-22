class PaperBall {
  constructor(x, y) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:0.2
    }
    this.body = Bodies.circle(x, y,50,options);
  this.radius=70;
    World.add(world, this.body);
    this.image = loadImage("paper.png");
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
  

   
    image(this.image, 0, 0, this.radius*2, this.radius*2);
    pop();
  }
}
