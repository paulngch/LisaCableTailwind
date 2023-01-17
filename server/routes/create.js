const express = require("express");
const router = express.Router();
require("dotenv").config();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const app = express();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

app.post("/posts", upload.single("image"), async (req, res) => {
  console.log("req.body", req.body);
  console.log("req.file", req.file);

  req.file.buffer;

  const params = {
    Bucket: bucketName,
    Key: req.file.originalName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);

  res.send({});
});
router.get("/create", (req, res, next) => {});

module.exports = router;
