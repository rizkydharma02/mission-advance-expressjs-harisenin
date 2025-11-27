import express from 'express';
import { GenreController } from '../controller/GenreController.js';
import AuthMiddleware from '../middleware/Auth.js';

const router = express.Router();

// Create - Post Genre Endpoint
router.post('/', AuthMiddleware, GenreController.createNewGenre);

// Create - Post Bulk Genre Endpoint
router.post('/bulk', AuthMiddleware, GenreController.createNewBulkGenre);

// Read - Get All Genre Endpoint
router.get('/', AuthMiddleware, GenreController.getAllGenre);

// Read - Get Genre By Id Endpoint
router.get('/:id', AuthMiddleware, GenreController.getGenreById);

// Update - Patch Genre Endpoint
router.patch('/:id', AuthMiddleware, GenreController.updateGenrePartial);

// Update - Put Genre Endpoint
router.put('/:id', AuthMiddleware, GenreController.updateGenreAll);

// Delete - Delete All Genre Endpoint
router.delete('/', AuthMiddleware, GenreController.deleteAllGenre);

// Delete - Delete Genre By Id Endpoint
router.delete('/:id', AuthMiddleware, GenreController.deleteGenreById);

export default router;
