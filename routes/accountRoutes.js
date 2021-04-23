const express = require("express");
const router = express.Router();
const auth = require("../auth");
const accountController = require("../controllers/accountController");

// CREATE
router.get("/create_account", accountController.createAccount);
router.post("/create_account", accountController.createAccount);

// READ
router.get("/read_account", auth.checking, accountController.readAccount);

// UPDATE
router.post("/update_account", accountController.updateAccount);

// DELETE
router.post("/delete_account", accountController.deleteAccount);

module.exports = router;