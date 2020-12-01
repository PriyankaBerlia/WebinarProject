class box{
    constructor(x,y,w,h){
        var boxOptions = {
            density : 1,
            friction : 0.5,
            restitution : 1
        }

        this.body = Bodies.rectangle(x,y,w,h,boxOptions);
        World.add(myWorld,this.body);
        this.width = w;
        this.height = h;
    }

    display(){

        push();
        fill("white");
        strokeWeight(3);
        stroke("green");
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rect(0,0,this.width,this.height);
        pop();
    }
}