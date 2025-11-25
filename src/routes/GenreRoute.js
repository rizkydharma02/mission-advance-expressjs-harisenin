import express from 'express';
import { GenreController } from '../controller/GenreController.js';

const router = express.Router();

// Create - Post Genre Endpoint
router.post('/', GenreController.createNewGenre);

// Create - Post Bulk Genre Endpoint
router.post('/bulk', GenreController.createNewBulkGenre);

// Read - Get All Genre Endpoint
router.get('/', GenreController.getAllGenre);

// Read - Get Genre By Id Endpoint
router.get('/:id', GenreController.getGenreById);

// Update - Patch Genre Endpoint
router.patch('/:id', GenreController.updateGenrePartial);

// Update - Put Genre Endpoint
router.put('/:id', GenreController.updateGenreAll);

// Delete - Delete All Genre Endpoint
router.delete('/', GenreController.deleteAllGenre);

// Delete - Delete Genre By Id Endpoint
router.delete('/:id', GenreController.deleteGenreById);

export default router;
