class Box{
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
           'density':1.0,
            isStatic:false
        } 
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        //fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
     }
 }