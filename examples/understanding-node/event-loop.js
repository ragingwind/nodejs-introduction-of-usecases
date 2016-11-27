// getting result in order

setImmediate(() => console.log("1"));
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log('3'));
setTimeout(() => console.log("4"), 0);
(() => console.log('5'))();
Promise.resolve().then(() => console.log('6'));

process.on('beforeExit', () => {
    console.log('7');
});