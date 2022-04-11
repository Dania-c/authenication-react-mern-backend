import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Hadi',
      email: 'hadi@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Rola',
      email: 'rola@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
};
export default data;
