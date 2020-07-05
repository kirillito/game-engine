import Entity from './models/Entity';

export default class Container extends Entity {
  public children: Entity[];

  constructor() {
    super();
    this.children = [];
  }

  add(child: Entity) {
    this.children.push(child);
    return child;
  }

  remove(child: Entity) {
    this.children = this.children.filter(c => c !== child);
    return child;
  }

  update(dt?: number, t?: number) {
    this.children.forEach(child => {
      if (child.update) {
        child.update(dt, t);
      }
    });
  }
}
