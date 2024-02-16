import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { create, getpost } from '../controllers/post.controllers.js';


const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getpost', getpost)

export default router;
