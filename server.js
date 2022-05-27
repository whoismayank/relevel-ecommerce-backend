const express = require('express');
const serverConfig = require('./configs/server.config');
const app = express();

app.listen(serverConfig.PORT, async () => {
    console.log('listening on port ' + serverConfig.PORT);
})