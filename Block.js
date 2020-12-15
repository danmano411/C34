class Block{
    constructor(x, y){
        var options = {
            isStatic: false
        }

        this.width = 100;
        this.height = 50;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options)

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        rect(pos.x, pos.y, this.width, this.height)
    }
}