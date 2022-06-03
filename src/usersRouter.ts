import express from "express";
import {addUser, deleteUser, getUsers} from "./repository";

export const router = express.Router();


router.get('/', async (req, res) => {
    let users = await getUsers()
    res.send(users)
})

router.get('/:id', async (req, res) => {
    let userId = req.params.id;
    let users: any = await getUsers();
    let user = users.find((el: any) => el.id === +userId);
    if (user) {
        res.send(user);
    }
    else {
        res.send(404);
    }
})

router.post('/', async (req, res) => {
    await addUser(req.body.name);
    res.send({ success: true });
})

router.delete('/:id', async (req, res) => {
    let userId = req.params.id;
    await deleteUser(userId);
    res.send({ success: true });
})
