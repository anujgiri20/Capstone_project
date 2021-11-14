import express, { response } from "express";
import  { MongoClient,ObjectId } from "mongodb";
import cors from "cors"
import dotenv from "dotenv"


const app = express()
dotenv.config();
const PORT = process.env.PORT

async function createconnections() {

   const MONGO_URL = process.env.MONGO_URL
   const client = new MongoClient(MONGO_URL)
   await client.connect();
   console.log("connected")
   return client;
}


app.use(express.json())
app.use(cors())
//chest data collection
app.get("/chestdata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("data").find({}).toArray();
   response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   
   response.send(result)
});
app.post("/chest", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("data").insertMany(add_data)
     response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
 
   console.log(add_data, result)
   response.send(result)
});
app.delete("/deletechest/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("data").deleteOne({_id: new ObjectId(id)})
   console.log(id)
   console.log(user)
   response.send(user)
   
});
app.patch("/chestupdate/:id", async(request, response) => {
   console.log(request.params);

   const {id} = request.params.id;
   const client = await createconnections();
   const newdata=  request.body;
   const user= await client.db("gymDatabase").collection("data").updateOne({id:id},{$set:newdata})
   
   // console.log(user)
   response.send(user)
   console.log(newdata)
   

});





//bicep data collection
app.get("/bicepsdata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("biceps").find({}).toArray();
    response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   
   response.send(result)
});
app.post("/biceps", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("biceps").insertMany(add_data)
   console.log(add_data, result)
   response.send(result)
});




//back data collection
app.get("/backdata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("back").find({}).toArray();
    response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   response.send(result)
});
app.post("/back", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("back").insertMany(add_data)
   console.log(add_data, result)
   response.send(result)
});






//Triceps data collection
app.get("/Tricepsdata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("Triceps").find({}).toArray();
    response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   response.send(result)
});
app.post("/Triceps", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("Triceps").insertMany(add_data)
   console.log(add_data, result)
   response.send(result)
});




//Shoulder data collection
app.get("/Shoulderdata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("Shoulder").find({}).toArray();
    response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   response.send(result)
});
app.post("/Shoulder", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("Shoulder").insertMany(add_data)
   console.log(add_data, result)
   response.send(result)
});




//Legs data collection
app.get("/Legsdata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("Legs").find({}).toArray();
    response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   response.send(result)
});
app.post("/Legs", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("Legs").insertMany(add_data)
   console.log(add_data, result)
   response.send(result)
});




//Abdominal data collection
app.get("/Abdominaldata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("Abdominal").find({}).toArray();
    response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   response.send(result)
});
app.post("/Abdominal", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("Abdominal").insertMany(add_data)
   console.log(add_data, result)
   response.send(result)
});




//Combined data collection
app.get("/Combineddata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("Combined").find({}).toArray();
    response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   response.send(result)
});
app.post("/Combined", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("Combined").insertMany(add_data)
   console.log(add_data, result)
   response.send(result)
});





//Cardio data collection
app.get("/Cardiodata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("Cardio").find({}).toArray();
    response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   response.send(result)
});
app.post("/Cardio", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("Cardio").insertMany(add_data)
   console.log(add_data, result)
   response.send(result)
});





//yoga starts
//Cardio data collection
app.get("/yogadata", async (request, response) => {
   const client = await createconnections();
   const result = await client.db("gymDatabase").collection("yoga").find({}).toArray();
    response.header("Access-Control-Allow-Origin","*")
   response.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
   response.send(result)
});
app.post("/yoga", async (request, response) => {
   const client = await createconnections();
   const add_data = request.body

   const result = await client.db("gymDatabase").collection("yoga").insertMany(add_data)
   console.log(add_data, result)
   response.send(result)
});





// deleting section
//delete biceps
app.delete("/deletebiceps/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("biceps").deleteOne({_id: new ObjectId(id)})
   console.log(user)
   response.send(user)
   
});
//delete back
app.delete("/deleteback/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("back").deleteOne({_id: new ObjectId(id)})
   console.log(user)
   response.send(user)
   
});
//delete Triceps
app.delete("/deletetriceps/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("Triceps").deleteOne({_id: new ObjectId(id)})
   console.log(user)
   response.send(user)
   
});
//delete Shoulder
app.delete("/deleteShoulder/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("Shoulder").deleteOne({_id: new ObjectId(id)})
   console.log(user)
   response.send(user)
   
});
//delete Legs
app.delete("/deleteLegs/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("Legs").deleteOne({_id: new ObjectId(id)})
   console.log(user)
   response.send(user)
   
});
//delete Abdominal
app.delete("/deleteAbdominal/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("Abdominal").deleteOne({_id: new ObjectId(id)})
   console.log(user)
   response.send(user)
   
});
//delete Combined
app.delete("/deleteCombined/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("Combined").deleteOne({_id: new ObjectId(id)})
   console.log(user)
   response.send(user)
   
});

//delete Cardio
app.delete("/deleteCardio/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("Cardio").deleteOne({_id: new ObjectId(id)})
   console.log(user)
   response.send(user)
   
});

//delete yoga
app.delete("/deleteyoga/:id", async(request, response) => {
   const id = request.params.id;
   const client = await createconnections();
   const user= await client.db("gymDatabase").collection("yoga").deleteOne({_id: new ObjectId(id)})
   console.log(user)
   response.send(user)
   
});







app.listen(PORT, () => console.log("server is started in port 1234"));




