const connection = require('./connection');

const getAllChanels = async () => {
  const sql = 'SELECT * FROM chatTime.chanel'
  const [chanels] = await connection.execute(sql);
  return chanels;
}

module.exports = { getAllChanels };