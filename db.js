const jsonServer = require('json-server');
const server = jsonServer.create();

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
});
