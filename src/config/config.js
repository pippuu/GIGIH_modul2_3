require('dotenv').config();

const config = {
    server: {
        host: process.env.SERVER_HOST || "localhost",
        port: process.env.SERVER_PORT || "8080"
    },
}
module.exports = config;