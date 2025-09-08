import express from 'express';
// import {login, register} from '../controllers/authController.js';
import authController from '../controllers/authController.js';
const router = express.Router();

router.post('/user/register', authController.register);
router.post('/user/login', authController.login);

export default router;