class DomElement {
    constructor(children) {
        this.children = children;
    }

    draw(type) {

        const children = Array.isArray(this.children) ? this.children : [this.children];

        const element = document.createElement(type);

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
        const attrs = Object.entries(this.attrs);
        const element = super.draw(this.type);

        if (attrs.length !== 0) {
            attrs.map((attr) => {
                if (attr[0] === 'class' || attr[0] === 'id' || attr[0] === 'title' || attr[0] === 'style') {
                    element.setAttribute(attr[0], attr[1]);
                } else {
                    console.warn(`div does not accept ${attr[0]}`);
                }
            })
        }

        return element;
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
        const attrs = Object.entries(this.attrs);
        const element = super.draw(this.type);

        if (attrs.length !== 0) {
            attrs.map((attr) => {
                if (attr[0] === 'class' || attr[0] === 'id' || attr[0] === 'title' || attr[0] === 'style') {
                    element.setAttribute(attr[0], attr[1]);
                } else {
                    console.warn(`span does not accept ${attr[0]}`);
                }
            })
        }
        return element;
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
        const attrs = Object.entries(this.attrs);
        const element = super.draw(this.type);

        if (attrs.length !== 0) {
            attrs.map((attr) => {
                if (attr[0] === 'class' || attr[0] === 'id' || attr[0] === 'type' || attr[0] === 'style') {
                    element.setAttribute(attr[0], attr[1]);
                } else {
                    console.warn(`ul does not accept ${attr[0]}`);
                }
            })
        }
        return element;
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
        const attrs = Object.entries(this.attrs);
        const element = super.draw(this.type);

        if (attrs.length !== 0) {
            attrs.map((attr) => {
                if (attr[0] === 'class' || attr[0] === 'id' || attr[0] === 'style') {
                    element.setAttribute(attr[0], attr[1]);
                } else {
                    console.warn(`li does not accept ${attr[0]}`);
                }
            })
        }
        return element;
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
        const attrs = Object.entries(this.attrs);
        const element = super.draw(this.type);

        if (attrs.length !== 0) {
            attrs.map((attr) => {
                if (attr[0] === 'class' || attr[0] === 'id' || attr[0] === 'action' || attr[0] === 'target' || attr[0] === 'style') {
                    element.setAttribute(attr[0], attr[1]);
                } else {
                    console.warn(`form does not accept ${attr[0]}`);
                }
            })
        }
        return element;
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
        const attrs = Object.entries(this.attrs);
        const element = super.draw(this.type);

        if (attrs.length !== 0) {
            attrs.map((attr) => {
                if (attr[0] === 'class' || attr[0] === 'id' || attr[0] === 'for' || attr[0] === 'style') {
                    element.setAttribute(attr[0], attr[1]);
                } else {
                    console.warn(`label does not accept ${attr[0]}`);
                }
            })
        }
        return element;
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
        const attrs = Object.entries(this.attrs);
        const element = super.draw(this.type);

        if (attrs.length !== 0) {
            attrs.map((attr) => {
                if (attr[0] === 'class' || attr[0] === 'id' || attr[0] === 'type' || attr[0] === 'value' || attr[0] === 'name' || attr[0] === 'style') {
                    element.setAttribute(attr[0], attr[1]);
                } else {
                    console.warn(`input does not accept ${attr[0]}`);
                }
            })
        }
        return element;
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
        const attrs = Object.entries(this.attrs);
        const element = super.draw(this.type);

        if (attrs.length !== 0) {
            attrs.map((attr) => {
                console.warn(`br does not accept ${attr[0]}`);
            })
        }
        return element;
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
      el("form", {action: '/some_action', href: "#"}, [
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













