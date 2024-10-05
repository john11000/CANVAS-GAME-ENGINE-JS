import { Component } from "./components.js";

export class Player extends Component {
    constructor(x, y, width, height, color, ctx, name = "John") {
        super(x, y, width, height, color, ctx);
        this.speed = 4;
        this._name = name;
        this.initEventListeners();
    }

    set name(name) {
        this._name = name;
    }

    get name() { 
        return this._name;
    }

    draw() {
        super.draw();
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    jump() {
        this.y -= 20;
    }

    initEventListeners() {
        addEventListener("keydown", (event) => {
            switch (event.code) {
                case "ArrowLeft":
                    this.moveLeft();
                    break;
                case "ArrowRight":
                    this.moveRight();
                    break;
                case "Space":
                    this.jump();
                    break;
            }
        });
    }
 
    update() {
    }
}
