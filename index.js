require("dotenv").config()
const { PORT } = require("./config")
const server = require('./api/server.js');

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
