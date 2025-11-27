import express from 'express';
import { MoviesController } from '../controller/MoviesController.js';
import AuthMiddleware from '../middleware/Auth.js';

const router = express.Router();

// Create - Post Movies Endpoint
router.post('/', AuthMiddleware, MoviesController.createNewMovie);

// Create - Post Bulk Movies Endpoint
router.post('/bulk', AuthMiddleware, MoviesController.createNewBulkMovies);

// Read - Get All Movies Endpoint
router.get('/', AuthMiddleware, MoviesController.getAllMovie);

// Read - Get Movie By Id Endpoint
router.get('/:id', AuthMiddleware, MoviesController.getMovieById);

// Update - Patch Movies Endpoint
router.patch('/:id', AuthMiddleware, MoviesController.updateMoviePartial);

// Update - Put Movies Endpoint
router.put('/:id', AuthMiddleware, MoviesController.updateMovieAll);

// Delete - Delete All Movies Endpoint
router.delete('/', AuthMiddleware, MoviesController.deleteAllMovie);

// Delete - Delete Movies By Id Endpoint
router.delete('/:id', AuthMiddleware, MoviesController.deleteMovieById);

export default router;
