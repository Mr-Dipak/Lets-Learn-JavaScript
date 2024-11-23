# Document Object Model (DOM) Notes

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## Key Concepts

### Nodes
- **Element Node**: Represents an HTML element.
- **Text Node**: Represents the text inside an HTML element.
- **Attribute Node**: Represents an attribute of an HTML element.
- **Comment Node**: Represents comments in the HTML.

### Properties
- **document.documentElement**: Returns the root element of the document.
- **document.body**: Returns the `<body>` element.
- **document.head**: Returns the `<head>` element.
- **node.childNodes**: Returns a live NodeList of child nodes of the given node.
- **node.firstChild**: Returns the first child node of the given node.
- **node.lastChild**: Returns the last child node of the given node.
- **node.nextSibling**: Returns the node immediately following the specified one.
- **node.previousSibling**: Returns the node immediately preceding the specified one.
- **node.parentNode**: Returns the parent node of the specified node.
- **node.nodeName**: Returns the name of the node.
- **node.nodeType**: Returns the type of the node.

### Methods
- **document.getElementById(id)**: Returns the element with the specified ID.
- **document.getElementsByClassName(className)**: Returns a live HTMLCollection of elements with the specified class name.
- **document.getElementsByTagName(tagName)**: Returns a live HTMLCollection of elements with the specified tag name.
- **document.querySelector(selector)**: Returns the first element that matches the specified CSS selector.
- **document.querySelectorAll(selector)**: Returns a static NodeList of all elements that match the specified CSS selector.
- **element.setAttribute(name, value)**: Sets the value of an attribute on the specified element.
- **element.getAttribute(name)**: Returns the value of an attribute on the specified element.
- **element.removeAttribute(name)**: Removes an attribute from the specified element.
- **element.appendChild(node)**: Adds a node to the end of the list of children of a specified parent node.
- **element.removeChild(node)**: Removes a child node from the DOM and returns the removed node.
- **element.replaceChild(newNode, oldNode)**: Replaces a child node within the specified parent node.
- **element.insertBefore(newNode, referenceNode)**: Inserts a new node before the reference node as a child of a specified parent node.
- **element.cloneNode(deep)**: Clones the specified node. If `deep` is true, it clones all descendants as well.

## Examples

### Selecting Elements
```javascript
// Get element by ID
const header = document.getElementById('header');

// Get elements by class name
const items = document.getElementsByClassName('item');

// Get elements by tag name
const paragraphs = document.getElementsByTagName('p');

// Query selector
const firstItem = document.querySelector('.item');

// Query selector all
const allItems = document.querySelectorAll('.item');
```

### Manipulating Elements
```javascript
// Create a new element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, World!';

// Append the new element to the body
document.body.appendChild(newDiv);

// Set an attribute
newDiv.setAttribute('id', 'newDiv');

// Get an attribute
const divId = newDiv.getAttribute('id');

// Remove an attribute
newDiv.removeAttribute('id');

// Remove the element
document.body.removeChild(newDiv);
```

### Traversing the DOM
```javascript
const list = document.getElementById('list');

// Get the first child
const firstChild = list.firstChild;

// Get the last child
const lastChild = list.lastChild;

// Get the next sibling
const nextSibling = firstChild.nextSibling;

// Get the previous sibling
const prevSibling = lastChild.previousSibling;

// Get the parent node
const parent = firstChild.parentNode;
```

### Cloning Nodes
```javascript
const originalNode = document.getElementById('original');
const clonedNode = originalNode.cloneNode(true); // Deep clone
document.body.appendChild(clonedNode);
```

### Replacing and Inserting Nodes
```javascript
const newNode = document.createElement('div');
newNode.textContent = 'I am new!';

const oldNode = document.getElementById('old');
document.body.replaceChild(newNode, oldNode);

const referenceNode = document.getElementById('reference');
document.body.insertBefore(newNode, referenceNode);
```

These are some of the fundamental methods and properties of the DOM that allow you to interact with and manipulate web documents dynamically.
### Class List Methods
- **element.classList.add(className)**: Adds the specified class to the element.
- **element.classList.remove(className)**: Removes the specified class from the element.
- **element.classList.toggle(className)**: Toggles the specified class on the element.
- **element.classList.contains(className)**: Returns `true` if the element contains the specified class, otherwise `false`.
- **element.classList.replace(oldClass, newClass)**: Replaces an existing class with a new class on the element.

### Examples

#### Using Class List Methods
```javascript
const element = document.getElementById('myElement');

// Add a class
element.classList.add('newClass');

// Remove a class
element.classList.remove('oldClass');

// Toggle a class
element.classList.toggle('active');

// Check if an element has a class
const hasClass = element.classList.contains('active');

// Replace a class
element.classList.replace('oldClass', 'newClass');
```