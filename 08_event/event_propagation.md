/**
 * Event Propagation:
 * 
 * Event propagation is the process by which an event travels through the DOM tree. 
 * It consists of three phases:
 * 
 * 1. Capturing Phase (Event Capturing):
 *    - The event starts from the root of the DOM tree and moves down towards the target element.
 *    - During this phase, event listeners registered for the capturing phase will be triggered.
 *    - To register an event listener for the capturing phase, the third argument of `addEventListener` should be set to `true`.
 * 
 * 2. Target Phase:
 *    - The event reaches the target element.
 *    - Event listeners registered directly on the target element will be triggered.
 * 
 * 3. Bubbling Phase (Event Bubbling):
 *    - The event bubbles up from the target element back to the root of the DOM tree.
 *    - During this phase, event listeners registered for the bubbling phase will be triggered.
 *    - By default, event listeners are registered for the bubbling phase unless specified otherwise.
 * 
 * Notes:
 * - Event propagation allows for the implementation of event delegation, where a single event listener can handle events for multiple child elements.
 * - The `stopPropagation` method can be used to stop the event from propagating further.
 * - The `stopImmediatePropagation` method can be used to stop the event from propagating and prevent other listeners of the same event from being called.
 * - Understanding event propagation is crucial for managing complex event handling scenarios in web development.
 */