# DOM Element Relations

## Parent Node
The parent node is the node that is directly above another node in the DOM hierarchy.

### Example
```html
<div id="parent">
    <p id="child">This is a child element.</p>
</div>
```
```javascript
const child = document.getElementById('child');
const parent = child.parentNode;
console.log(parent); // <div id="parent">...</div>
```

## Child Nodes
Child nodes are the nodes that are directly below another node in the DOM hierarchy.

### Example
```html
<ul id="parent">
    <li class="child">Item 1</li>
    <li class="child">Item 2</li>
</ul>
```
```javascript
const parent = document.getElementById('parent');
const children = parent.childNodes;
console.log(children); // NodeList(3) [text, li.child, li.child]
```

## First Child
The first child is the first child node of a parent node.

### Example
```html
<div id="parent">
    <p id="firstChild">First child</p>
    <p>Second child</p>
</div>
```
```javascript
const parent = document.getElementById('parent');
const firstChild = parent.firstChild;
console.log(firstChild); // <p id="firstChild">First child</p>
```

## Last Child
The last child is the last child node of a parent node.

### Example
```html
<div id="parent">
    <p>First child</p>
    <p id="lastChild">Last child</p>
</div>
```
```javascript
const parent = document.getElementById('parent');
const lastChild = parent.lastChild;
console.log(lastChild); // <p id="lastChild">Last child</p>
```

## Sibling Nodes
Sibling nodes are nodes that share the same parent node.

### Example
```html
<div id="parent">
    <p id="firstChild">First child</p>
    <p id="secondChild">Second child</p>
</div>
```
```javascript
const firstChild = document.getElementById('firstChild');
const secondChild = firstChild.nextSibling;
console.log(secondChild); // <p id="secondChild">Second child</p>
```

## Previous Sibling
The previous sibling is the node immediately before a specified node.

### Example
```html
<div id="parent">
    <p id="firstChild">First child</p>
    <p id="secondChild">Second child</p>
</div>
```
```javascript
const secondChild = document.getElementById('secondChild');
const previousSibling = secondChild.previousSibling;
console.log(previousSibling); // <p id="firstChild">First child</p>
```

## Next Sibling
The next sibling is the node immediately after a specified node.

### Example
```html
<div id="parent">
    <p id="firstChild">First child</p>
    <p id="secondChild">Second child</p>
</div>
```
```javascript
const firstChild = document.getElementById('firstChild');
const nextSibling = firstChild.nextSibling;
console.log(nextSibling); // <p id="secondChild">Second child</p>
```