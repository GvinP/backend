import fs from 'fs'
import {v1} from "uuid";
import {User} from "./index";

export const getUsers = () => {
    return User.find()
    // return new Promise((resolve, reject) => {
    //     fs.readFile("./users.json", (err, buff) => {
    //         resolve(JSON.parse(buff.toString()));
    //     });
    // });
};

export const addUser = async (name: string) => {
    let user1 = new User({name})
    return user1.save()

    // let users: any = await getUsers();
    // users.push({ id: v1(), name: name });
    // return new Promise((resolve, reject) => {
    //     fs.writeFile("users.json", JSON.stringify(users), function (err) {
    //         if (err)
    //             reject(err);
    //         resolve(1);
    //     });
    // });
}
export const deleteUser = async (id: string) => {
    return User.deleteOne( {_id: id})

    // let users: any = await getUsers();
    // users.push({ id: v1(), name: name });
    // return new Promise((resolve, reject) => {
    //     fs.writeFile("users.json", JSON.stringify(users), function (err) {
    //         if (err)
    //             reject(err);
    //         resolve(1);
    //     });
    // });
}
