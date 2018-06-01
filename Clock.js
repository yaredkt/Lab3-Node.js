var EventEmmiter = require('events');

class Clock extends EventEmmiter {

    constructor(){
        super();
    }

}

var clock = new Clock();

clock.on('tick', ()=>{

     setInterval(() => {
         console.log('Wohoo');
     }, 1000);
});

clock.emit('tick');