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

module.exports = { addUser };