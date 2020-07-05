import Entity from "engine/models/Entity";
import Text from "engine/models/Text";
import Container from "engine/Container";

export default class CanvasRenderer {
  private width: number;
  private height: number;
  public view: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    const canvas = document.createElement("canvas");
    this.width = canvas.width = width;
    this.height = canvas.height = height;
    this.view = canvas;
    this.context = canvas.getContext("2d");
    this.context.imageSmoothingEnabled = false;
    this.context.textBaseline = "top";
  }

  render(container: Container, clear: boolean = true) {
    if (container.visible == false) {
      return;
    }
    const { context } = this;

    function renderRec(container: Container) {
      // Render the container children
      container.children.forEach((child: Entity) => {
        if (child.visible == false) {
          return;
        }
        context.save();

        // Handle transforms
        if (child.pos) {
          context.translate(Math.round(child.pos.x), Math.round(child.pos.y));
        }

        // Draw the leaf nodes
        if (child instanceof Text) {
          let textEntity: Text = <Text>child;
          const { font, fill, align } = textEntity.style;
          if (font) context.font = font;
          if (fill) context.fillStyle = fill;
          if (align) context.textAlign = <CanvasTextAlign>align;
          context.fillText(textEntity.text, 0, 0);
        }

        // Render any child sub-nodes
        if (child instanceof Container) {
          renderRec(child);
        }
        context.restore();
      });
    }

    if (clear) {
      context.clearRect(0, 0, this.width, this.height);
    }
    renderRec(container);
  }

}