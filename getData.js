const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  let data = await dynamo
    .get({
      //table name is booksTable in this case
      //table key is genere
      TableName: "booksTable",
      Key: {
        genere: "self help",
      },
    })
    .promise();

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(data),
  };

  return response;
};
