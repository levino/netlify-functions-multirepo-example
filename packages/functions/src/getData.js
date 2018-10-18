exports.handler = (_, __, callback) => {
  return callback(null, {
    statusCode: 200,
    body: "Success!",
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Headers": "content-type,origin,text,startlower",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "content-type": "text/plain",
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    }
  });
};
