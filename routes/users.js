import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = []

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    // console.log("post route reached");

    // console.log(req.body);

    const user = req.body;

    const userId = { ...user, id: uuidv4()};

    users.push(userId);

    res.send(`user ${user.name} is added`);
});


router.get('/:id', (req, res) => {
    
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});



router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`user with id ${id} is deleted`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find((user) => user.id === id);
    const { name, age } = req.body;

    if(name) {
        user.name = name;
    }

    if(age) {
        user.age = age;
    }

    res.send(`user with id ${id} is changed`);
});

export default router;