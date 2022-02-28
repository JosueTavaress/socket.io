const model = require('../models/userModel');

const addUser = async (createUser) => {
   const { email, name } = createUser;
   const userExist = await model.getUserEmail(email);

   if (userExist.length) {
   const erro = { status: 409, message: 'existing user' };
   throw erro;
   };

   const id = await model.addUser(createUser);
   return { id, name };
};

const login = async (dataUser) => {
   const user = await model.getUserEmail(dataUser.email);

   if (!user.length) {
      const erro = { status: 404, message: 'User not found' };
      throw erro;
   }

   const { id, name, password } = user[0];

   if (dataUser.password !== password) {
      const erro = { status: 401, message: 'Password incorrect' }
      throw erro;
   }

   return {id, name};
}

module.exports = { addUser, login };