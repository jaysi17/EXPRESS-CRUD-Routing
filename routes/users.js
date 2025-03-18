import express from 'express';
import { createUser, getUsers, getUser, deleteUser, patchUser} from '../controllers/users.js';

const router = express.Router(); //initialize router

//all routes here are starting with /users
//GET ALL users
router.get('/', getUsers);

//POST - create a user, send data(values user inputted) from frontend to server
router.post('/', createUser);

//GET by ID
router.get('/:id', getUser);

// DELETE by ID
router.delete('/:id', deleteUser);

// UPDATE by ID
router.patch('/:id', patchUser);

export default router; // to make use in the "index.js"