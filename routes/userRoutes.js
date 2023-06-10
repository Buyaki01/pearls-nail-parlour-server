const express = require('express')
const router = express.Router(usersController)
const usersController = require('../controllers/usersController')

router.route('/')
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser)

module.exports = router
