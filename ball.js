class ball{
    constructor(x,y,w,h){
        var ballOptions = {
            restitution : 1.5,
            isStatic : true
        }

        this.body = Bodies.circle(x,y,w,ballOptions);
        World.add(myWorld,this.body);
        this.width = w;
        this.height = h;
    }

    display(){
        //fill("red");
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}