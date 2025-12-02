import express from 'express';
import { AuthController } from '../controller/AuthController.js';

const router = express.Router();

// Create - Post Users Endpoint (register/login should be public)
router.post('/register', AuthController.register);

router.post('/login', AuthController.login);

router.get('/verify-email', AuthController.verifyEmail);

export default router;
