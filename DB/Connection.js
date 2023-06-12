const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://akbarimanali1032:0987654321@cluster.1qrhrrx.mongodb.net/postAPI", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB Connection....done');
}).catch((error) => {
    console.log(error);
})