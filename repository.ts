import fs from 'fs'


export const getUsers = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./users.json", (err, buff) => {
            resolve(JSON.parse(buff.toString()));
        });
    });
};

export const addUser = async (name: string) => {
    let users: any = await getUsers();
    users.push({ id: 3, name: name });
    return new Promise((resolve, reject) => {
        fs.writeFile("users.json", JSON.stringify(users), function (err) {
            if (err)
                reject(err);
            resolve(1);
        });
    });
}
