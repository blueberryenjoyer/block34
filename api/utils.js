function requireUser(req, res, next) {
  if (req.user) {
    next();
  }
  else { }


}

module.exports = {
  requireUser
}