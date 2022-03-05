import api from '../api/connection';

export const getChannels = async (token) => {
  try {
      const channel = await api.get('/chanels', {
        headers: {
          'Authorization': `${token}`
        }
      });
      return channel.data.chanels;
  } catch (err) {
    console.table(err);
     return [];
  }
}

export const subscribeChannel = async ({token, id}) => {
  try {
  const data = { idChannel: id }
  const idSubscribe = await api.post('/subscribe', data, {
    headers: {
      'Authorization': `${token}`
    },
  });
  return idSubscribe;
  } catch (err) {
    return false;
  }
}

export const getSubs = async (id, token) => {
  try {
    const sub = await api.get(`/subscribe/${id}`, {
      headers: {
        'Authorization': `${token}`
      }
    });

    return sub.data;
    
  } catch (error) {
    return [];
  }
}

export const getMessagesChannel = async (idChannel, token) => {
  try {
    const messages = await api.get(`chanels/messages/${idChannel}`, {
      headers: {
        'Authorization': `${token}`
      }
    });

    return messages.data.messages;

  } catch (error) {
    return [];
  }
}

export const deleteSubscribe = async (token, idChannel) => {
    try {
      await api.delete(`http://localhost:5050/subscribe/${idChannel}`, {
        headers: {
          'Authorization': `${token}`
        }
      });

      return true;

    } catch (error) {
      console.table(error);
      return false;
    }
}