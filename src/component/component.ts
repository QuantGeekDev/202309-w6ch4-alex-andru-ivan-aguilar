abstract class Component {
  protected readonly element: Element;
  protected readonly parentElement: Element;

  constructor(parentElemenent: Element, tagName: string, className: string) {
    this.parentElement = parentElemenent;
    this.element = document.createElement(tagName);
    this.element.className = className;
  }

  public render() {
    this.parentElement.appendChild(this.element);
    this.populate();
  }

  protected abstract populate(): void;
}

export default Component;
