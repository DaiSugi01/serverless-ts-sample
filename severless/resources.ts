
export default {
  usersTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "usersTable",
      // Define data type of Primary Key (and Sort Key if you want)
      AttributeDefinitions: [
        {
          AttributeName: "id",
          AttributeType: "S",
        },
        {
          AttributeName: "name",
          AttributeType: "S",
        },
      ],
      // Define HASH key and RANGE key
      // HASH＝Primary Key, RANGE=Sort Key
      KeySchema: [
        {
          KeyType: "HASH",
          AttributeName: "id",
        },
        {
          KeyType: "RANGE",
          AttributeName: "name",
        },
      ],
      // Define capacity unit
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
    },
  },
  itemsTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "itemsTable",
      // Define data type of Primary Key (and Sort Key if you want)
      AttributeDefinitions: [
        {
          AttributeName: "itemId",
          AttributeType: "S",
        },
        {
          AttributeName: "itemName",
          AttributeType: "S",
        },
      ],
      // Define HASH key and RANGE key
      // HASH＝Primary Key, RANGE=Sort Key
      KeySchema: [
        {
          KeyType: "HASH",
          AttributeName: "itemId",
        },
        {
          KeyType: "RANGE",
          AttributeName: "itemName",
        },
      ],
      // Define capacity unit
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
    },
  },
}
