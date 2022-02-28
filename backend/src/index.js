const { server, PORT } = require('./http');
require('./socketIo/webSocket');

server.listen(PORT, console.log(`online port ${PORT}`));