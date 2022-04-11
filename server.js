import express from 'express'; // import instead of require because

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';

// we have added in package.json : "type": "module",
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json()); // these 2 lines for data to be replaced to json in the req body
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serving this humble code from the port ${port}`);
});
