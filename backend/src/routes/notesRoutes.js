import express from 'express';
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById } from '../controllers/notesController.js';
const router = express.Router();

// Define routes for notes
router.get('/', getAllNotes); // Get all notes
router.get('/:id', getNoteById); // Get a note by ID
router.post('/', createNote); // Create a new note
router.put('/:id', updateNote); // Update a note by ID
router.delete('/:id', deleteNote); // Delete a note by ID

// Export the router
export default router;