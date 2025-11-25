import express from 'express';
import { PacketsController } from '../controller/PacketsController.js';

const router = express.Router();

// Create - Post Packets Endpoint
router.post('/', PacketsController.createNewPacket);

// Create - Post Bulk Packets Endpoint
router.post('/bulk', PacketsController.createNewBulkPacket);

// Read - Get All Packets Endpoint
router.get('/', PacketsController.getAllPacket);

// Read - Get Packets By Id Endpoint
router.get('/:id', PacketsController.getPacketById);

// Update - Patch Packets Endpoint
router.patch('/:id', PacketsController.updatePacketPartial);

// Update - Put Packets Endpoint
router.put('/:id', PacketsController.updatePacketAll);

// Delete - Delete All Packets Endpoint
router.delete('/', PacketsController.deleteAllPacket);

// Delete - Delete Packets By Id Endpoint
router.delete('/:id', PacketsController.deletePacketById);

export default router;
