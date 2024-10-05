export class Physics {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }   

    update = (object) => {
        if (object.y >= this.height - object.height) {
            return;
        }
        object.y += 1;
    }

}