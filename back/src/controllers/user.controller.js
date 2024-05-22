import { User } from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const index = asyncHandler(async(req, res) => {
	const user = await User.find({});
	console.log('users', user);
});

const create = asyncHandler(async(req, res) => {

});

const edit = asyncHandler(async(req, res) => {

});

const update = asyncHandler(async(req, res) => {

});

const destroy = asyncHandler(async(req, res) => {

});

const resetPassword = asyncHandler(async(req, res) => {

});

const updateProfilePic = asyncHandler(async(req, res) => {

});

const loginHandler = asyncHandler(async(req, res) => {

});

const logoutHandler = asyncHandler(async(req, res) => {

});

export {
	index,
	create,
	edit,
	update,
	destroy,
	resetPassword,
	updateProfilePic,
	loginHandler,
	logoutHandler,
}
