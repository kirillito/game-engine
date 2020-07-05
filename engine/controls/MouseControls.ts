import Coordinates from "../models/Coordinates";

export default class MouseControls {
  private element: Element;
  private position: Coordinates;
  public isDown: boolean;
  public pressed: boolean;
  public released: boolean;

  constructor(container: HTMLElement) {
    this.element = container || document.body;

    this.position = new Coordinates(0, 0);
    this.isDown = false;
    this.pressed = false;
    this.released = false;

    // Handlers
    document.addEventListener("mousedown", e => this.down(e), false);
    document.addEventListener("mouseup", e => this.up(), false);
    document.addEventListener("mousemove", e => this.move(e), false);
  }

  mousePosFromEvent(e: MouseEvent) {
    const rect = this.element.getBoundingClientRect();
    const xr = this.element.clientWidth / this.element.clientWidth;
    const yr = this.element.clientHeight / this.element.clientHeight;
    this.position.x = (e.clientX - rect.left) * xr;
    this.position.y = (e.clientY - rect.top) * yr;
  }

  down(e: MouseEvent) {
    this.isDown = true;
    this.pressed = true;
    this.mousePosFromEvent(e);
  }

  up() {
    this.isDown = false;
    this.released = true;
  }

  move(e: MouseEvent) {
    this.mousePosFromEvent(e);
  }

  update() {
    this.released = false;
    this.pressed = false;
  }
}
