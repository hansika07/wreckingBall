class Hero{
  constructor(x, y,imgwidth, imglength) {
    var options = {
        
        'restitution':0.3,
        'friction':0.5
        
    };
    this.body = Bodies.circle(x, y, 30, options);
    this.radius =30;
    this.imagewidth=imgwidth;
    this.imagelength=imglength;
    this.image=loadImage("/images/Superhero-01.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
  
    circle()
    imageMode(CENTER);
    image(this.image,0,0,this.imagewidth,this.imagelength);
    
    pop();
  }
}



