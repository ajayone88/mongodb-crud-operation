const mongodb = require('mongodb');
const chalk = require('chalk');

const MongodbClient  = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongodbClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client)=>{
   if(error){
       return console.log(chalk.red.bold("Connection failed : - "+ error));
   }
   const dbCon  = client.db(databaseName);

   //Insert One Document in collection
   // dbCon.collection('user').insertOne({
   //     name:"Ajay",
   //     age:32
   // });

    //Insert Many Document in collection
    //  dbCon.collection('user').insertMany([{
    //      name:"Dharam",
    //      age:36
    //  },{
    //      name:"Rishi",
    //      age:32
    //  }]);

    //Read Documents from collection
    // dbCon.collection('user').find({}).toArray((error, data)=>{
    //     if(error){
    //         return console.log("Error occurred : - "+ error);
    //     }
    //     console.log(data);
    // });

    //Read Documents count from collection
    // dbCon.collection('user').find({}).count((error, data)=>{
    //     if(error){
    //         return console.log("Error occurred : - "+ error);
    //     }
    //     console.log(data);
    //     client.close();
    // });

    //Read Documents by id  from collection
    // dbCon.collection('user').findOne({"_id": ObjectId('5eccd1b404a2795e44830df5')}, (error, data) =>{
    //     if(error){
    //         console.log("Error occurred : - "+ error);
    //     }
    //     console.log(data);
    //     client.close();
    // });

    //Update Documents by id from collection Deprecated
    // dbCon.collection('user').update({
    //         "_id": ObjectId('5eccd1b404a2795e44830df5')
    // },{
    //    $set:{
    //        age:37
    //    }
    // });

    //Update Single document in collection
    // dbCon.collection('user').updateOne({
    //     "_id": ObjectId("5eccd1b404a2795e44830df5")
    // },{
    //     $set:{
    //         name: "Dharam Maurya"
    //     }
    // })

    //Update Many document in collection
    // dbCon.collection('user').updateMany({},{
    //     $set:{
    //         job: "Engineer"
    //     }
    // })

    //Delete one document in collection
    // dbCon.collection('user').deleteOne({
    //     "_id": ObjectId("5ecbdb37b910ab5134ec6da4")
    // })

    //Delete many document in collection
    //dbCon.collection('user').deleteMany({})
});