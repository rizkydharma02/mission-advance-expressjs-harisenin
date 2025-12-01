import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const originalName = file.originalname;
    cb(null, originalName);
  },
});

const uploads = multer({ storage: storage, limits: { fileSize: 3 * 1000 * 1000 } });

export default uploads;
