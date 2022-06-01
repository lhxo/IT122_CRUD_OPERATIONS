//NPM imports
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//Local imports
import postRoutes from './routes/posts.js'

//Express
//Intializing our express server
//Express allows us to create data models for our server 
const app = express();

//our express server will use bodyParser to load images. We want to limit the size of the image to 30mb.
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
//Allows use of CORS so we can get around IPs
app.use(cors());

app.use('/posts', postRoutes);

//MongoDB
// https://www.mongodb.com/cloud/atlas
//MongoDB is what we will use to manage our database

//Connection to MongoDB
const CONNECTION_URL = ''
//Access port 5000 or a port that is provided.
const PORT = process.env.PORT || 5000;

//Mongoose uses our MongoDB URL to 
//useUnifiedTopology is not required, but it will help prevent errors in the future.
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
//If successfully connects console log that we are running
.then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
//else if unsuccessful connection we catch an error then return the error message
.catch((error)=> console.log(error.message));