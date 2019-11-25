const server = require('./data/api/server')

const PORT = process.env.PORT || 4000;


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});