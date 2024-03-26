import express from "express"
import { createUrl } from "../controllers/shortUrl";
import { getAllurl } from "../controllers/shortUrl";
import { getUrl } from "../controllers/shortUrl";
import { deleteUrl } from "../controllers/shortUrl";

const app=express()

const router =express.Router();

router.post("/shortUrl",createUrl);
router.get("/shortUrl",getAllurl)
router.get("/shortUrl/:id",getUrl)
router.delete("/shortUrl/:id",deleteUrl)

export default router;