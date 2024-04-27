exports.home = async (req, res, next) => {
  res.status(200).render("index",{title:"DavmoTech | Home"});
};

exports.about = async (req, res, next) => {
  res.status(200).render("about",{title:"DavmoTech | About"});
};

exports.services = async (req, res, next) => {
  res.status(200).render("services",{title:"DavmoTech | Services"});
};

exports.contact = async (req, res, next) => {
  res.status(200).render("contact",{title:"DavmoTech | Contact"});
};

exports.login = async (req, res, next) => {
  res.status(200).render('login');
};
