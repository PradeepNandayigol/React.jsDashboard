const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router
.route("/users")
.get(authMiddleware, adminController.getAllusers);

router
.route("/users/update/:id")
.patch(authMiddleware, adminController.updateUserById);

router
.route("/users/:id")
.get(authMiddleware, adminController.getUserById);

router
.route("/users/delete/:id")
.delete(authMiddleware, adminController.deleteUserById);


router
.route("/contacts")
.get(authMiddleware, adminController.getAllcontacts);

router
.route("/contacts/delete/:id")
.patch(authMiddleware, adminController.deleteContactById);

module.exports = router;