import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { create, getpost, deletepost } from '../controllers/post.controllers.js';


const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getpost', getpost)
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost);

export default router;
