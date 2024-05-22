import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
	name:{
		type:String,
	},
	email:{
		type:String,
		required:[true, 'Email field is required!']
	},
	mobile:{
		type:Number,
		required:[true, "Mobile field is required"]
	},
	password:{
		type:String,
		required:[true, "Password field is required!"]
	},
	profilePic:{
		type:String,
		default:null
	},
	refreshToken:{
		type:String,
		default:null
	}
}, {timestamps:true});

userSchema.pre("save", async function(next){
	if(!this.isModified('password')) return next();
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

userSchema.methods.isPasswordCorrect = async function(password){
	return await bcrypt.compare(password, this.password);
}
userSchema.methods.generateAccessToken = function(){
	return jwt.sign({
		id:this._id,
		name:this.name,
		email:this.email,
		mobile:this.mobile,

	}, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn:process.env.ACCESS_TOKEN_EXPIRY
	});
}

userSchema.methods.generateRefreshToken = function(){
	return jwt.sign({
		id:this._id
	}, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn:process.env.REFRESH_TOKEN_EXPIRY
	});
}

export const User = mongoose.model('User', userSchema);