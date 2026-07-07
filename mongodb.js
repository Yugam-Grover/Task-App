const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task_manager";

const client = new MongoClient(connectionURL);

// ***********connecting to the database via async/await**********
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected Correctly!");
  } catch (err) {
    console.log("Unable to connect to the database.");
  }

  const db = client.db(databaseName);

  // const res = await db
  //   .collection("users")
  //   .deleteOne({ _id: new ObjectId("6a4bce334e77edee06549687") });

  const res = await db.collection("users").deleteMany({ name: "Yugam Grover" });
  console.log(res.deletedCount);
}

connectDB();
