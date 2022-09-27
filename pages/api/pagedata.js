import { MongoClient } from "mongodb";

const dbs = MongoClient.connect("mongodb://localhost:27017");

export default function handler(req, res) {
  dbs.then((databases) =>
    databases
      .db("data")
      .collection("users")
      .find({})
      .toArray(function (err, docs) {
        if (err) {
          console.error(err);
        }
        res.end(JSON.stringify(docs));
      })
  );
}
