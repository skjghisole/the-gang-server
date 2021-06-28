require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

let memberSWData = {
    columnLabels: ['Character Name', 'Class', 'Level', 'Confirmed'],
    rows: [
        {
            characterName: 'Pebbles',
            class: 'Shaman',
            level: 160,
            Confirmed: true
        }
    ]
};


const memberList = [
    {
        characterName: 'Pebbles',
        class: 'Shaman',
        level: 160,
        Confirmed: true
    }
]

app.get('/', (req, res) => {
    res.send('yolo')
});

app.post('/attendance/sw', (req, res) => {
    memberSWData.rows = memberSWData.rows.concat(req.body)
    res.json(memberSWData);
});

app.get('/attendance/sw', (_, res) => {
    res.json(memberSWData);
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})