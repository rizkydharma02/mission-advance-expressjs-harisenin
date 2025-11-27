import express from 'express';
import { UsersController } from '../controller/UsersController.js';
import AuthMiddleware from '../middleware/Auth.js';

const router = express.Router();

// Create - Post Users Endpoint (register/login should be public)
router.post('/', AuthMiddleware, UsersController.createNewUser);

// Create - Post Bulk Users Endpoint
router.post('/bulk', AuthMiddleware, UsersController.createNewBulkUser);

// Read - Get All Users Endpoint
router.get('/', AuthMiddleware, UsersController.getAllUser);

// Read - Get Users By Id Endpoint
router.get('/:id', AuthMiddleware, UsersController.getUserById);

// Update - Patch Users Endpoint
router.patch('/:id', AuthMiddleware, UsersController.updateUserPartial);

// Update - Put Users Endpoint
router.put('/:id', AuthMiddleware, UsersController.updateUserAll);

// Delete - Delete All Users Endpoint
router.delete('/', AuthMiddleware, UsersController.deleteAllUser);

// Delete - Delete Users By Id Endpoint
router.delete('/:id', AuthMiddleware, UsersController.deleteUserById);

export default router;
