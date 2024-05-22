import mongoose from 'mongoose';
import { asyncHandler } from '../utils/asyncHandler.js';

export const dbConnect = asyncHandler(async(req, res) => {
	try{
		const conn = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@nodeapi.e6v5tml.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority&appName=NodeApi`) 
		// const conn = await mongoose.createConnection(process.env.DB_URI);
		// conn.on('connected', () => console.log('connected'));
		console.log(`Database connection successfully connected Host !! ${conn.connection.host}`)
	}catch(error){
		res.status(500).json({ message: 'Server Error' });
	}
});