const mongodb = require("mongodb");
const MongoCLient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task_manager";

const client = new MongoCLient(connectionURL);

// ***********connecting to the database via async/await**********
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected Correctly!");
    const db = client.db(databaseName);
    // db.collection("users")
    //   .find({ age: 22 })
    //   .toArray()
    //   .then((count) => {
    //     console.log(count);
    //   });

    db.collection("users")
      .countDocuments({ age: 22 })
      .then((res) => console.log(res));
  } catch (err) {
    console.log("Unable to connect to the database.");
  }

  // db.collection("users")
  //   .findOne({ name: "Yugam Grover" })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection("users")
  //   .insertOne({
  //     name: "Yugam Grover",
  //     age: 22,
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log("unable to insert the document");
  //   });
  // db.collection("tasks")
  //   .insertMany([
  //     {
  //       name: "Rohan",
  //       age: 12,
  //     },
  //     {
  //       name: "Chintu",
  //       age: 24,
  //     },
  //   ])
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log("unable to insert the document");
  //   });
}

connectDB();

// ********Connecting to the database via promise*********
// client
//   .connect()
//   .then(() => {
//     console.log("Connected Correctly via promise!");
//   })
//   .catch(() => {
//     console.log("Unable to connect to the database.");
//   });
