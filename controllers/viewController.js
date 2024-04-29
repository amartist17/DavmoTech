exports.home = async (req, res, next) => {
  res.status(200).render("index",{title:"DavmoTech | Home"});
};

exports.about = async (req, res, next) => {
  res.status(200).render("about",{title:"DavmoTech | About"});
};

exports.services = async (req, res, next) => {
  res.status(200).render("services",{title:"DavmoTech | Services"});
};

exports.customSoftwareDevelopment = async (req, res, next) => {
  res.status(200).render("services/custom-software-development", {title: "DavmoTech | Custom Software Development"});
};

exports.webApplicationDevelopment = async (req, res, next) => {
  res.status(200).render("services/web-application-development", {title: "DavmoTech | Web Application Development"});
};

exports.uiUxDesign = async (req, res, next) => {
  res.status(200).render("services/ui-ux-design", {title: "DavmoTech | UI/UX Design"});
};

exports.staffAugmentation = async (req, res, next) => {
  res.status(200).render("services/staff-augmentation", {title: "DavmoTech | Staff Augmentation"});
};

exports.webPortalDevelopment = async (req, res, next) => {
  res.status(200).render("services/web-portal-development", {title: "DavmoTech | Web Portal Development"});
};

exports.mobileAppDevelopment = async (req, res, next) => {
  res.status(200).render("services/mobile-app-development", {title: "DavmoTech | Mobile App Development"});
};

exports.eCommerceSolutions = async (req, res, next) => {
  res.status(200).render("services/e-commerce-solutions", {title: "DavmoTech | E-Commerce Solutions"});
};


exports.portfolio = async (req, res, next) => {
  res.status(200).render("portfolio",{title:"DavmoTech | Portfolio"});
};

exports.blog = async (req, res, next) => {
  res.status(200).render("blog",{title:"DavmoTech | Blog"});
};

exports.contact = async (req, res, next) => {
  res.status(200).render("contact",{title:"DavmoTech | Contact"});
};

exports.terms = async (req, res, next) => {
  res.status(200).render("terms",{title:"DavmoTech | Terms"});
};

exports.login = async (req, res, next) => {
  res.status(200).render('login');
};
