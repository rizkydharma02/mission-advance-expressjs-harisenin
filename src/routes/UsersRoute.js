import express from 'express';
import { UsersController } from '../controller/UsersController.js';

const router = express.Router();

// Create - Post Users Endpoint (register/login should be public)
router.post('/', UsersController.createNewUser);

// Create - Post Bulk Users Endpoint
router.post('/bulk', UsersController.createNewBulkUser);

// Read - Get All Users Endpoint
router.get('/', UsersController.getAllUser);

// Read - Get Users By Id Endpoint
router.get('/:id', UsersController.getUserById);

// Update - Patch Users Endpoint
router.patch('/:id', UsersController.updateUserPartial);

// Update - Put Users Endpoint
router.put('/:id', UsersController.updateUserAll);

// Delete - Delete All Users Endpoint
router.delete('/', UsersController.deleteAllUser);

// Delete - Delete Users By Id Endpoint
router.delete('/:id', UsersController.deleteUserById);

export default router;
