const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @describe Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req,res) => {
  
})

// @describe Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req,res) => {
  
})

// @describe Update user
// @route PUT /users
// @access Private
const updateUser = asyncHandler(async (req,res) => {
  
})

// @describe Delete user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req,res) => {
  
})

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }
