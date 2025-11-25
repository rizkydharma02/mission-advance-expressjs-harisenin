import express from 'express';
import { MylistController } from '../controller/MylistController.js';

const router = express.Router();

// Create - Post Mylist Endpoint
router.post('/', MylistController.createNewMylist);

// Create - Post Bulk Mylist Endpoint
router.post('/bulk', MylistController.createNewBulkMylist);

// Read - Get All Mylist Endpoint
router.get('/', MylistController.getAllMylist);

// Read - Get Mylist By Id Endpoint
router.get('/:id', MylistController.getMylistById);

// Update - Patch Mylist Endpoint
router.patch('/:id', MylistController.updateMylistPartial);

// Update - Put Mylist Endpoint
router.put('/:id', MylistController.updateMylistAll);

// Delete - Delete All Mylist Endpoint
router.delete('/', MylistController.deleteAllMylist);

// Delete - Delete Mylist By Id Endpoint
router.delete('/:id', MylistController.deleteMylistById);

export default router;
