import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';


export const isAuthenticate = asyncHandler (async(req, res , next) =>{
	console.log(req);
	try{
		const token = req.cookies.accessToken || req.header('Authorization')?.replace('Bearer ', '');
		if(!token)
			throw new ApiError(400, "Unauthorized request!");
		const decodeToken = jwt.verify(token, process.env.accessToken);

		if(!decodeToken)
			throw new ApiError(400, "AccessToken is invalid!");

		const user = await User.findById(decodeToken?.user?._id);

		if(!user)
			throw new ApiError(404, "User not found !");
		req.user = user;
		next();
	}catch(error){
		res.status(500).json({ message: 'Server Error' });
	}
});