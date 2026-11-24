// Event Module
// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events.
//Eg.1 -- registering for the event to be fired only one time using once
//Eg.2 --  Create an event emitter instance and register a couple of callbacks
//Eg.3 -- Registering for the event with callback parameters

const EventEmitter = require("events");  // created Event class
const event = new EventEmitter(); // created object of event class 

// event.on("sayMyName", () =>{
//     console.log("Your name is Mehnaz Bashir");
// });
// event.on("sayMyName", () =>{
//     console.log("Your age is 24");
// });
// event.on("sayMyName", () =>{
//     console.log("Your course is MCA");
// });

// event.emit("sayMyName");

event.on("checkPage", (sc, msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkPage", 200, "ok");
