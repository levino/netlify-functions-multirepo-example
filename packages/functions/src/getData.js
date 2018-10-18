exports.handler = (_, __, callback) => {
  return callback(null, {
    statusCode: 200,
    body: "Success!"
  });
};
