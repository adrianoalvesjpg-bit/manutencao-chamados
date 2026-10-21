import express from 'express';
import cors from 'cors';

import taskRoutes from './routes/task.routes.js'
import { notFound, errorHandler } from './midlewares/error.midlewire.js'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/tasks', taskRoutes)

export default app;