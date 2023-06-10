const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @describe Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req,res) => {
  const users = await User.find().select('-password').lean() //we won't be using any moongose methods like save inside this method
  if (!users) {
    return res.status(400).json({ message: 'No users found' })
  }
  res.json(users)
})

// @describe Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req,res) => {
  const { username, password, roles } = req.body

  //Confirm Data
  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  //Check for duplicate
  const duplicate = await User.findOne({ username }).lean().exec()

  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate username'})
  }

  //Hash Password
  const hashedPwd = await bcrypt.hash(password, 10) //Salt Rounds

  const userObject = { username, "password": hashedPwd, roles }

  //Create and store new user
  const user = await User.create(userObject)

  if (user) { //Created
    res.status(201).json({ message: `New user ${username} created` })
  } else {
    res.status(400).json({ message: 'Invalid user data received' })
  }
})

// @describe Update user
// @route PUT /users
// @access Private
const updateUser = asyncHandler(async (req,res) => {
  const { id, username, roles, active, password } = req.body

  //Confirm Data
  if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
    return res.status(400).json({ message: 'All fields are required' })
  }

  const user = await User.findById(id).exec() //Using .exec() as we are assigning a parameter and a promise is needed
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  //Check for duplicate
  const duplicate = await User.findOne({ username }).lean().exec()
  //Allow updates to the original user not current user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate Username' })
  }

  user.username = username
  user.roles = roles
  user.active = active

  if (password) {
    //Hash password
    user.password = await bcrypt.hash(password, 10) //Salt Rounds
  }

  const updatedUser = await user.save()

  res.json({ message: `${updatedUser.username} updated`})
})

// @describe Delete user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req,res) => {
  const { id } = req.body
  if (!id) {
    return res.status(400).json({ message: 'User ID required' })
  }
  const notes = await Note.findOne({ user: id }).lean().exec()
  if (notes?.length) {
    return res.status(400).json({ message: 'user has assigned notes' })
  }

  const user = await User.findById(id).exec()
  if (!user) {
    return res.status(400).json({ message: 'User not found'})
  }

  const result = await user.deleteOne()

  const reply = `Username ${result.username} with ID ${result._id} deleted`
  res.json(reply)
})

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }
