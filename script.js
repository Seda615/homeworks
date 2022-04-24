class DomElement {
    constructor(children, attrs) {
        this.children = children;
        this.attrs = attrs;
    }

    draw(type) {

        const children = Array.isArray(this.children) ? this.children : [this.children];
        const attrs = Object.entries(this.attrs);

        const element = document.createElement(type);

        if (attrs.length !== 0) {
            attrs.map((attr) => element.setAttribute(attr[0], attr[1]))
        }
        for (let i = 0; i < children.length; i++) {
            if (children[i] instanceof DomElement) {
                element.appendChild(children[i].draw())
            } else if (typeof children[i] === 'string') {
                element.innerText = children[i];
            }
        }
        return element;
    }
}

class DivElement extends DomElement {

    constructor(children, attrs) {
        super();
        this.children = children;
        this.attrs = attrs;
        this.type = 'div';
    }

    draw() {
        return super.draw(this.type);
    }
}

class SpanElement extends DomElement {

    constructor(children, attrs) {
        super();
        this.children = children;
        this.attrs = attrs;
        this.type = 'span';
    }

    draw() {
        return super.draw(this.type);
    }
}

class UlElement extends DomElement {

    constructor(children, attrs) {
        super();
        this.children = children;
        this.attrs = attrs;
        this.type = 'ul';
    }

    draw() {
        return super.draw(this.type);
    }
}

class LiElement extends DomElement {

    constructor(children, attrs) {
        super();
        this.children = children;
        this.attrs = attrs;
        this.type = 'li';
    }

    draw() {
        return super.draw(this.type);
    }
}

class FormElement extends DomElement {

    constructor(children, attrs) {
        super();
        this.children = children;
        this.attrs = attrs;
        this.type = 'form';
    }

    draw() {
        return super.draw(this.type);
    }
}

class LabelElement extends DomElement {

    constructor(children, attrs) {
        super();
        this.children = children;
        this.attrs = attrs;
        this.type = 'label';
    }

    draw() {
        return super.draw(this.type);
    }
}

class InputElement extends DomElement {

    constructor(children, attrs) {
        super();
        this.children = children;
        this.attrs = attrs;
        this.type = 'input';
    }

    draw() {
        return super.draw(this.type);
    }
}

class BrElement extends DomElement {

    constructor(children, attrs) {
        super();
        this.children = children;
        this.attrs = attrs;
        this.type = 'br';
    }

    draw() {
        return super.draw(this.type);
    }
}


function el(type, attrs, children) {

    if (type === 'div') {
        return new DivElement(children, attrs);
    }

    if (type === 'span') {
        return new SpanElement(children, attrs);
    }

    if (type === 'ul') {
        return new UlElement(children, attrs);
    }

    if (type === 'li') {
        return new LiElement(children, attrs);
    }

    if (type === 'form') {
        return new FormElement(children, attrs);
    }

    if (type === 'label') {
        return new LabelElement(children, attrs);
    }

    if (type === 'input') {
        return new InputElement(children, attrs);
    }

    if (type === 'br') {
        return new BrElement(children, attrs);
    }
}

const tree =
      el("form", {action: '/some_action'}, [
        el("label", {for: 'name'}, "First name:"),
        el("br", {}, null),
        el("input", {type: 'text', id: 'name', name: 'name', value: "My name"}, null),
        el("br", {}, null),
        el("label", {for: 'last_name'}, "Last name:"),
        el("br", {}, null),
        el("input", {type: 'text', id: 'last_name', name: 'last_name', value: "My second name"}, null),
        el("br", {}, null),
        el("input", {type: 'submit', value: 'Submit'}, null),
      ]);

document.getElementById('root').appendChild(tree.draw())













