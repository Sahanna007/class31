class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[]
    this.pic = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.position.x>200 && this.body.speed>10){
      var position=[this.body.position.x, this.body.position.y]
    
    this.trajectory.push(position)
    }
  
    for(var i=0;i<this.trajectory.length;i=i+1){
      console.log(this.trajectory[i][0]+"  "+this.trajectory[i][1])
      image(this.pic,this.trajectory[i][0],this.trajectory[i][1])
    }
    

    super.display();
  }
}
