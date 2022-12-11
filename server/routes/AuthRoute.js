import { Router } from "express";
import { body } from "express-validator";

import IndexControllers from "../controllers/IndexControllers";
import validation from "../helper/validation"

const router = Router();

router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter valid email")
      .trim()
      .normalizeEmail(),
  ],
  validation.result,
  IndexControllers.AuthController.login
);

export default router;
