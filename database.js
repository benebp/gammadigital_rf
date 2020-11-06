'use strict';

require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const dbUrl = process.env.DB_URL;

const getDatabase = () => {
  return MongoClient.connect(dbUrl, { useUnifiedTopology: true })
    .then(client => {
      const gammaDb = client.db('gamma_db');
      const recordCollection = gammaDb.collection('records_rf');
      console.log('Connected to Database');
      return recordCollection
    }
  )};

module.exports = getDatabase();