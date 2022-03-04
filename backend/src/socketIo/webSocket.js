const { io } = require('../http');
const decodeJWT = require('../utils/decodeJWT');
const serviceMessage = require('../services/messageService');

io.on('connection', socket => {

    socket.on('Select_Channel_Send_Message', async (data) => {

      console.log('SOCKET CONNECT => ', data);

      socket.join(data.channel);

     const newMensage = {...data, data_time: new Date};

      io.to(data.channel).emit('message', newMensage);


      if (data.token && data.channel) {
        const decode = decodeJWT(data.token);

        const dataMessage = {
          userId: decode.payload.id,
          channelId: data.channel,
          message: data.message
        }

        await serviceMessage.addMessage(dataMessage);
        
      } 

  });

    socket.on('disconnect', () => {
      console.log('Disconnect => user exit')
  });

});