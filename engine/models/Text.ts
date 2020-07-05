import Entity from "./Entity";

interface style {
  font: string;
  fill: string;
  align: string;  
}

export default class Text extends Entity {
  public text: string;
  public style: style;

  constructor(text: string = "", style: style) {
    super();
    this.text = text;
    this.style = style;
  }
}