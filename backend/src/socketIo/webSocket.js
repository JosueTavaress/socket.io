const { io } = require('../http');

io.on('connection', (socket) => {
  console.log(socket.id);
});