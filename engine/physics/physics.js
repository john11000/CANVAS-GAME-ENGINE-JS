export class Physics {

    gravity = 0.5;
    physicsElements = [];

    constructor(width, height, physicsElements=[]) {
        this.width = width;
        this.height = height;
        this.physicsElements = physicsElements;
    }   

    addPhysicsElements(physicsElements) {
        this.physicsElements = physicsElements;
    }

    update = (object) => {
        if (object.y >= this.height - object.height) {
            object.canJump = true;
            return;
        }
        object.canJump = false;
        object.y += 1;
    }

}