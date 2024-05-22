import express, { Router } from 'express';
import { isAuthenticate } from '../middlewares/isAuthenticate.js'
import {index, create, edit, update,
		destroy, resetPassword, updateProfilePic,
		loginHandler, logoutHandler
	} from '../controllers/user.controller.js';

const router = Router();

router.use('/user', router);
router.route('/').get(index);
router.route('/create').post(isAuthenticate, create);
router.route('/edit/:id').post(isAuthenticate, edit);
router.route('/update/:id').post(isAuthenticate, update);
router.route('/destroy/:id').post(isAuthenticate, destroy);

export { router };