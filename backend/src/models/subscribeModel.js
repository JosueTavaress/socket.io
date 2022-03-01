const connection = require('./connection');

const subscribe = async ({idUser, idChannel}) => {
  const sql = 'INSERT INTO chatTime.subscribe (user_id, chanel_id) VALUE (?,?)';
  const [{ insertId }] = await connection.execute(sql, [idUser, idChannel]);
  return insertId;
};

const getSubUser = async ({idUser, idChannel}) => {
  const sql = 'SELECT * FROM chatTime.subscribe WHERE user_id=? AND chanel_id=?;';
  const [sub] = await connection.execute(sql, [idUser, idChannel]);
  return sub;
};

module.exports = { subscribe, getSubUser };