import express from 'express';
import { SeriesController } from '../controller/SeriesController.js';
import AuthMiddleware from '../middleware/Auth.js';

const router = express.Router();

// Create - Post Series Endpoint
router.post('/', AuthMiddleware, SeriesController.createNewSeries);

// Create - Post Bulk Series Endpoint
router.post('/bulk', AuthMiddleware, SeriesController.createNewBulkSeries);

// Read - Get All Series Endpoint
router.get('/', AuthMiddleware, SeriesController.getAllSeries);

// Read - Get Series By Id Endpoint
router.get('/:id', AuthMiddleware, SeriesController.getSeriesById);

// Update - Patch Series Endpoint
router.patch('/:id', AuthMiddleware, SeriesController.updateSeriesPartial);

// Update - Put Series Endpoint
router.put('/:id', AuthMiddleware, SeriesController.updateSeriesAll);

// Delete - Delete All Series Endpoint
router.delete('/', AuthMiddleware, SeriesController.deleteAllSeries);

// Delete - Delete Series By Id Endpoint
router.delete('/:id', AuthMiddleware, SeriesController.deleteSeriesById);

export default router;
