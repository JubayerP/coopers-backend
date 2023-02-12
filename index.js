const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())

const users = [
    {
        username: 'user1',
        password: 'password1'
    },
    {
        username: 'user2',
        password: 'password2'
    }
];


const todos = [
    {
        id: "1",
        todo: "Finish the team work"
    },
    {
        id: "2",
        todo: "Create a new function"
    }
]


app.get('/', (req, res) => {
    res.send('Hello World!');
});




app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (!user) {
        return res.status(401).send('Username or password is incorrect');
    }

    res.send({ message: 'Login successful' });
});


app.get('/todos', (req, res) => {
    res.send(todos);
})

app.listen(5000, () => {
    console.log('app listening on port 5000!');
});
