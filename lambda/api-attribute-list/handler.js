"use strict";
const https = require("https");

module.exports.attributes = (event, context, callback) => {
  const requestUri =
    "https://firestore.googleapis.com/v1/projects/grattr-e73b9/databases/(default)/documents/attributes/" +
    event.pathParameters.email;
  https.get(requestUri, (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      let json = JSON.parse(data);
      if (json.error) {
        const response = {
          statusCode: 404,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          status: "NOT_FOUND",
        };
        context.failure(response);
        return;
      }
      let attributes = json.fields.attributes.arrayValue.values.map(
        (item) => item.stringValue
      );
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(attributes),
      };
      context.succeed(response);
    });
  });
};
