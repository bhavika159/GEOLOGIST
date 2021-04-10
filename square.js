class square {
    constructor(x,y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 40;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var squarepos=this.body.position;		
			push()
			translate(squarepos.x, squarepos.y);
			rectMode(CENTER)
			strokeWeight(5);
			stroke("black");
			fill("darkblue");
    rect(0, 0, this.width, this.height);
    pop();
  };
};
