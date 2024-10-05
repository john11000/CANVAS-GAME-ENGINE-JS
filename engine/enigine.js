import { Physics } from "./physics/physics.js";

export class Engine {
    elements = [];
    physics = null;
    physicsElement = [];

    constructor(width, height, canvas, ctx) {
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.ctx = ctx;
        this.physics = new Physics(this.width, this.height - 20);
    }

    AddPhysics(element) {
        this.physicsElement.push(element);
    }

    addElement(element) { 
        this.elements.push(element);
    }

    getElement(id) {
        return this.elements.find(element => element.id == id);
    }

    renderElements() {
        this.elements.forEach(element => {
            if (this.physicsElement.includes(element)){
                this.physics.update(element);
            }; 
            element.update();
            element.draw()
        });
    }

    start() {
        this.configure();
        this.update();
    }

    configure = () => {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    update = () => {
        this.clearCanvas();
        this.renderElements();
        requestAnimationFrame(this.update);
    }


    clearCanvas () {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}