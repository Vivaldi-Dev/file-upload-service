import { Router } from 'express';
import upload from '../utils/multer.config';
import { uploadFile, getFile } from '../controllers/file.controller';

const router = Router();

router.post('/upload', upload.single('file'), uploadFile);

router.get('/files/:id', getFile);

export default router;
