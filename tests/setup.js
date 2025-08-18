const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongo;

beforeAll(async () => {
  // Create an instance of the in-memory MongoDB server
  mongo = await MongoMemoryServer.create();
  // Get the connection URI from the server instance
  const url = mongo.getUri();
  
  // Connect Mongoose to the in-memory database using the correct URI
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  // Clear all data from the collections after each test
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

afterAll(async () => {
  // Disconnect Mongoose and stop the in-memory server after all tests are done
  await mongoose.connection.close();
  await mongo.stop();
});
