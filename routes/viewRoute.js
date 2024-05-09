const express = require("express");
const viewController = require('../controllers/viewController')
const apiController = require('../controllers/apiController')
const router = express.Router({ mergeParams: true });


router.get("/", viewController.home);
router.get("/about", viewController.about);
router.get("/services", viewController.services);
router.get("/services/custom-software-development", viewController.customSoftwareDevelopment);
router.get("/services/web-application-development", viewController.webApplicationDevelopment);
router.get("/services/ui-ux-design", viewController.uiUxDesign);
// router.get("/services/staff-augmentation", viewController.staffAugmentation);
// router.get("/services/web-portal-development", viewController.webPortalDevelopment);
router.get("/services/mobile-app-development", viewController.mobileAppDevelopment);
// router.get("/services/e-commerce-solutions", viewController.eCommerceSolutions);

router.get("/contact", viewController.contact);
router.get("/blog", viewController.blog);
router.get("/portfolio", viewController.portfolio);
router.get("/terms", viewController.terms);
router.get("/login", viewController.login);
// router.get("/dashboard", viewController.dashboard);


router.post("/subscribe", apiController.addToNewsletter);
router.post("/needhelp", apiController.needhelp);
router.post("/contact", apiController.contactform);




module.exports = router;
