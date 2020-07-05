import Coordinates from './Coordinates';

export default class Entity {
  public pos: Coordinates;
  public visible: boolean;

  constructor() {
    this.pos = new Coordinates(0, 0);
  }

  update(dt?: number, t?: number) {
    console.log("updated!");
  }
}