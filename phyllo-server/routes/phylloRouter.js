const router = require("express").Router();

const phylloController = require("../controllers/phylloController");

router.get("/healthz", phylloController.healthz);

router.get("/users", phylloController.users);
router.post("/users", phylloController.addNewUser);
router.get("/users/:id", phylloController.userById);

module.exports = router;
