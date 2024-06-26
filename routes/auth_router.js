const express = require("express");
const auth_controller = require("../controllers/auth_controller");
const router = express.Router();
router.get("/", auth_controller.auth_controller);
router.post("/login", auth_controller.login_controller);
router.get("/reg", auth_controller.reg_controller);
router.post("/reg", auth_controller.post_reg_controller);
router.post("/auth", auth_controller.auth_post_controller);
router.post("/logout", auth_controller.logout_post_controller);
module.exports = router;
