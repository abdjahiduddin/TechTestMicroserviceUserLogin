import { Router } from "express";
import IndexControllers from "../controllers/IndexControllers";

const router = Router();

router.get("/", IndexControllers.TestController.testApi);

export default router;
