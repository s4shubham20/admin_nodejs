import express from 'express';
import cors from 'cors';
import { router } from './routes/user.routes.js';

const app = express();

app.use(cors({
	 origin:process.env.CORS_ORIGIN
}));
app.use(express.json());

app.use('/api/v1', router);

export {app};