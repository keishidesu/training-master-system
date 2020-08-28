import express from 'express';
import postDownload from './get/postDownload.js';
import postUpload from './post/postUpload.js';
import fileUpload from 'express-fileupload';

const router = express();

//enable files upload
router.use(fileUpload({
    createParentPath: true
}));

router.get('/post/:id', postDownload);
router.post('/post-upload', postUpload);

export default router;