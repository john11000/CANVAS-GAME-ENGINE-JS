import { Engine } from "../engine/enigine.js";
import { Ground } from "../engine/entities/ground.js";
import { Player } from "../engine/entities/player.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 400;
const GAME_HEIGHT = 200;
const game = new Engine(GAME_WIDTH, GAME_HEIGHT, canvas, ctx);
const ground = new Ground(0, GAME_HEIGHT - 20, GAME_WIDTH, 20, "green", ctx, "suelo");
const platform = new Ground(150, 100, 40, 20, 'green', ctx, "platforma1");
const player = new Player(0, ground.y - 400, 20, 40, "red", ctx, "Jhon Anderson"); 



game.addElement(platform); 
game.addElement(ground);
game.addElement(player);
game.AddPhysics(player);


game.start();


 