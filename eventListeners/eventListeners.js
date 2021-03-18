/*
// EventListener
  The EventListener interface represents an object that can handle an event dispatched 
  by an EventTarget object.

  EventListener.handleEvent() - A function that is called whenever an event of the
  specified type occurs.

  Example

  HTML
        <button id="btn">Click Here!</button>

 JavaScript

        const buttonElement = document.getElementById('btn');

        // Add a handler for the 'click' event by providing a callback function.
        // Whenever the element is clicked, a pop-up with "Element clicked!" will appear.

        buttomElement.addEventListener('click', function (event) {
            alert('Element clicked through function!');
        });

        // For compatibility, a non-function object with a `handleEvent` property is
        // treated just the same as a function itself.

           buttonElement.addEventListener('click', {
               handleEvent: function(event) {
                   alert('Element clicked through handleEvent property!');
               }
           });