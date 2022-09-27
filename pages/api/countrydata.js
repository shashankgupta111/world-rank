import { MongoClient } from "mongodb";

const dbs = MongoClient.connect("mongodb://localhost:27017");

export default function handler(req, res) {
  var query = req.query;
  dbs.then((databases) =>
    databases
      .db("data")
      .collection("users")
      .findOne({ "name.common": query.country }, (err, docs) => {
        if (err) {
          console.error(err);
        }
        res.end(JSON.stringify(docs));
      })
  );
}
