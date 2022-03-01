const connection = require('./connection');

const getAllChanels = async () => {
  const sql = 'SELECT * FROM chatTime.chanel'
  const [chanels] = await connection.execute(sql);
  return chanels;
};

const getChennelId = async (id) => {
 const sql = 'SELECT * FROM chatTime.chanel WHERE id=?';
 const [channel] = await connection.execute(sql, [id]);
 return channel;
};

module.exports = { getAllChanels, getChennelId };