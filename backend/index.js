const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



