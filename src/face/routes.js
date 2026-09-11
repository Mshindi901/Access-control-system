import express from 'express';
import {
    newRecord,
    checkMatch
} from './controlller.js'
const router = express.Router()
router.post('/face-match', checkMatch);
router.post('/face', newRecord);

export default router;