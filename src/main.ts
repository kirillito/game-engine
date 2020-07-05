import engine from "../engine/index.js";

const { Container, Entity, CanvasRenderer, Text } = engine;

// Game setup code
const w = 800;
const h = 640;
const renderer = new CanvasRenderer(w, h);
document.querySelector("#board").appendChild(renderer.view);

// Game objects
const scene = new Container();

// Example game element to manipulate
const player = new Entity();

scene.add(player);
scene.update();
scene.remove(player);

console.log(scene.children);

const message = new Text("The Renderer!", {
  font: "40pt sans-serif",
  fill: "DarkRed",
  align: "center"
});
message.pos.x = w / 2;
message.pos.y = h / 2 - 20;
scene.add(message);

// Render the main container
renderer.render(scene);
