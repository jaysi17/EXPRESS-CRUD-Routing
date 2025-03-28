import {v4 as uuidv4} from 'uuid'; // library that is capable of generating unique id

let users = [];

export const createUser = (req, res) => { 
    const user = req.body; //store to user the body that gets POSTed in Postman    

    users.push({ ... user, id:  uuidv4()}); //spread property then add a new property "ID" on top of it, then push.
    res.send(`User with the name ${user.firstName} added to the database`);
}

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((users) => users.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((users) => users.id === id);
    users.splice(foundUser, 1)
    res.send(`User with an ID of ${id} has been deleted.`)
}

export const patchUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age, username, description, price} = req.body;

    const user = users.find((user) => user.id === id); 

    //check if a parameter to be changed has a value, then assign the new value 
    if (firstName) {
        user.firstName = firstName;
    }
    
    if (lastName) {
        user.lastName = lastName;
    }
    
    if (age) {
        user.age = age;
    }

    if (username) {
        user.username = username;
    }

    if (description) {
        user.description = description;
    }

    if (price) {
        user.price = price;
    }
    res.send(`User with the ID ${id} has been updated.`)
}

