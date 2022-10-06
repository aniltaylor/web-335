 // Title: taylor-aggregatequeries.js
    // Author: anita taylor
    // Date: 10 1 2022
    // Description: Aggregate queries.

// Connection string to connect to the MongoDB Shell
//mongosh "mongodb+srv://web335db.10q16z.mongodb.net/web335DB" --apiVersion 1 --username web335_user

// Query to show all docs in the houses collection
Atlas atlas-10q16z-shard-0 [primary] web335DB> db.houses.find({})


// Query to show all docs in the students collection
Atlas atlas-10q16z-shard-0 [primary] web335DB> db.students.find({})


// Query to add a doc to the students collection
Atlas atlas-10q16z-shard-0 [primary] web335DB> db.students.insertOne({"firstName": "Pomona", "lastName": "Sprout", "studentId": "s1013", "houseId": "h1008"})


// Query to find just added student
Atlas atlas-10q16z-shard-0 [primary] web335DB> db.students.findOne({"firstName": "Pomona"})


// Query to delete the added student
Atlas atlas-10q16z-shard-0 [primary] web335DB> db.students.deleteOne({"firstName": "Pomona"})


// Query to make sure student was deleted
Atlas atlas-10q16z-shard-0 [primary] web335DB> db.students.findOne({"firstName": "Pomona"})


// Query to show list of students by their houses
Atlas atlas-10q16z-shard-0 [primary] web335DB> db.students.aggregate([
{
$lookup:{
"from": "students",
"localField": "houseId",
"foreignField": "studentId",
"as": "students"}}])
  

// Query to show list of students for Gryffindor
Atlas atlas-10q16z-shard-0 [primary] web335DB> db.students.aggregate([
  {
    $lookup:{
      "from": "students",
      "localField": "houseId",
      "foreignField": "studentId",
      "as": "students"}},
    {$match:{houseId: "h1007"}}])

// Query to show list of students for Ravenclaw 
db.houses.aggregate([
  { $match: { houseId: "h1009" } },
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "Ravenclaw",
    },
  },
]);
