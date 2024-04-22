const express = require("express");
const viewController = require('../controllers/viewController')
const router = express.Router({ mergeParams: true });


router.get("/", viewController.home);
router.get("/about", viewController.about);
router.get("/services", viewController.services);
router.get("/contact", viewController.contact);
// router.get("/portfolio", viewController.portfolio);
router.get("/login", viewController.login);
// router.get("/dashboard", viewController.dashboard);



module.exports = router;
