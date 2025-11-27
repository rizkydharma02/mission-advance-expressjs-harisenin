import express from 'express';
import { PacketsController } from '../controller/PacketsController.js';
import AuthMiddleware from '../middleware/Auth.js';

const router = express.Router();

// Create - Post Packets Endpoint
router.post('/', AuthMiddleware, PacketsController.createNewPacket);

// Create - Post Bulk Packets Endpoint
router.post('/bulk', AuthMiddleware, PacketsController.createNewBulkPacket);

// Read - Get All Packets Endpoint
router.get('/', AuthMiddleware, PacketsController.getAllPacket);

// Read - Get Packets By Id Endpoint
router.get('/:id', AuthMiddleware, PacketsController.getPacketById);

// Update - Patch Packets Endpoint
router.patch('/:id', AuthMiddleware, PacketsController.updatePacketPartial);

// Update - Put Packets Endpoint
router.put('/:id', AuthMiddleware, PacketsController.updatePacketAll);

// Delete - Delete All Packets Endpoint
router.delete('/', AuthMiddleware, PacketsController.deleteAllPacket);

// Delete - Delete Packets By Id Endpoint
router.delete('/:id', AuthMiddleware, PacketsController.deletePacketById);

export default router;
