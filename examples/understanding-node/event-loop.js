// getting result in order

// call with SetImmediate
setImmediate(() => console.log("1"));

// call with setTimeout
setTimeout(() => console.log("2"), 0);

// call with Promise in sync
Promise.resolve().then(() => console.log('3'));

// IIFE, immediately-invoked function expression
(() => console.log('5'))();

// last call for app
process.on('beforeExit', () => {
    console.log('7');
});