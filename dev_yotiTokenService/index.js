/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const yoti = require('yoti');
const fs = require('fs');
const path = require("path");
const https = require('https');
var cors = require('cors');

const app = express();
const port = 3009;

app.use(cors());

app.get('/service/:token', (req, res) => {
  const oneTimeUseToken = req.params.token;
  const CLIENT_SDK_ID = '2a1f12c5-fc85-4860-b2a3-2d9790c45f5b';
  const PEM_PATH = path.resolve(__dirname, 'keys/frtest-access-security.pem');
  const PEM_KEY = fs.readFileSync(PEM_PATH);

  yotiClient = new yoti.Client(CLIENT_SDK_ID, PEM_KEY);
  console.log(oneTimeUseToken);
  if (oneTimeUseToken) {
    yotiClient.getActivityDetails(oneTimeUseToken).then((activityDetails) => {
      const profile = activityDetails.getProfile();
      console.log(profile);
      res.send(JSON.stringify(profile));
    });
  } else res.status(500).send('sorry');
});

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'keys/example.com+5-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'keys/example.com+5.pem')),
};
https.createServer(options, app).listen(port);
