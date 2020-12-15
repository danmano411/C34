class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.012
        }

        this.chain = Constraint.create(options)
        this.pointB = pointB;

        World.add(world, this.chain)
    }

    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.pointB
        push();
        stroke("white")
        line(posA.x, posA.y, posB.x, posB.y)
        pop();
    }
}