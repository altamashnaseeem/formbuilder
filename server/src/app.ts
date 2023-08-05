import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import userRouter from './routes/userRoutes';
import AppError from './utils/appError';
import { globalErrorHandler } from './controllers/errorController';

const app: Application = express();

app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/v1/users', userRouter);

app.all('*', (req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
