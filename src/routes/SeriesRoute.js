import express from 'express';
import { SeriesController } from '../controller/SeriesController.js';

const router = express.Router();

// Create - Post Series Endpoint
router.post('/', SeriesController.createNewSeries);

// Create - Post Bulk Series Endpoint
router.post('/bulk', SeriesController.createNewBulkSeries);

// Read - Get All Series Endpoint
router.get('/', SeriesController.getAllSeries);

// Read - Get Series By Id Endpoint
router.get('/:id', SeriesController.getSeriesById);

// Update - Patch Series Endpoint
router.patch('/:id', SeriesController.updateSeriesPartial);

// Update - Put Series Endpoint
router.put('/:id', SeriesController.updateSeriesAll);

// Delete - Delete All Series Endpoint
router.delete('/', SeriesController.deleteAllSeries);

// Delete - Delete Series By Id Endpoint
router.delete('/:id', SeriesController.deleteSeriesById);

export default router;
