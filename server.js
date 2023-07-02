const mongoose = require('mongoose');
const app = require('./app');

const DB_URL = 'mongodb+srv://aparabiswas28:<password>@cluster0.bm6bugr.mongodb.net/?retryWrites=true&w=majority';
const DB_PASSWORD = 'BJqoTrIgK104BYZl';

const DB = DB_URL.replace('<password>', DB_PASSWORD);

const PORT = 8082;

mongoose.connect(DB).then(() => {
    console.log("DB connected successfully")
}).catch((error) => {
    console.log("DB error", error);
})

app.listen(PORT, () => {
    console.log('Listening on the port ${PORT}')
});