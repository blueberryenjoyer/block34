function requireUser(req, res, next) {

  if (user) {
    res.send(req.user)
  }
  else { console.log('req user isnt working for some reason') }

}

module.exports = {
  requireUser
}