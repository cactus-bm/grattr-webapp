"use strict";
const https = require("https");

module.exports.hello = (event, context, callback) => {
  const message = `Hello ${event.pathParameters.name}`;
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: message
  };
  context.succeed(response);
};
