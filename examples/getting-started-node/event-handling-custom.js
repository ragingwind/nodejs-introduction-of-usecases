const EventEmitter = require('events');

class HTTP3 extends EventEmitter {
  constructor(max) {
    super();

    // it will cause an warning for memory leak
    super.setMaxListeners(max || 1);
  }

  request(msg) {
    if (!msg) {
      this.emit('request', new Error('no message'));
      return;
    }

    this.emit('request', null, msg);
  }
}

const http3 = new HTTP3();

http3.on('request', (err, msg) => {
  if (err) {
    throw err;
  }

  console.log('done with', msg);
});

http3.request('msg');