import express from 'express';
import { addInteraction } from '../controllers/interactionController.js';

const router = express.Router();

router.post('/add', addInteraction);

export default router;
