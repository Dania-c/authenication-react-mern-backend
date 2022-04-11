import express from 'express';

import {
  getUserbyemail,
  getAllUsers,
  createUser,
} from '../controllers/user.js';
// import client from '../models/client.js';

const userRouter = express.Router();
userRouter.post('/signin', getUserbyemail);
userRouter.post('/signup', createUser);
userRouter.get('/', getAllUsers);

export default userRouter;
