const connection = require('./connection');

const addUser = async (createUser) => {
  const { name, password, lastName, email } = createUser;
  const sql = 'INSERT INTO chatTime.user (name, last_name, email, password) VALUE (?,?,?,?)';
  const [{ insertId }] = await connection.execute(sql, [name, lastName, email, password]);
  return insertId;
};

const getUserEmail = async (email) => {
  const sql = 'SELECT * FROM chatTime.user WHERE email=?';
  const [data] = await connection.execute(sql, [email]);
  return data;
};

const getUserById = async (id) => {
  const sql = 'SELECT * FROM chatTime.user WHERE id=?'
  const [user] = await connection.execute(sql, [id]);
  return user;
};

module.exports = { addUser, getUserEmail, getUserById };