import { Component } from './components.js'
export class Ground extends Component {
    
    constructor(x, y, width, height, color, ctx, id) {
        super(x, y, width, height, color, ctx);
        this.id = id;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {

    }

}