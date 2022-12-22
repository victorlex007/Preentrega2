import mongoClient from './mongoclient.js';

const cnxStr ="mongodb+srv://vlezcano:<password>@cluster0.pwmavsn.mongodb.net/test"

export const mongoClient = new MongoClient(cnxStr);
await mongoClient.connect();

export const database = mongoClient.db("coderhouse")
