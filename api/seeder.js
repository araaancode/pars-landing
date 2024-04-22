const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Place=require("./models/Place")
const places = require('./data/places');


dotenv.config();

// connect to db
mongoose.connect(process.env.MONGO_URL);

const importData = async () => {
  try {
    await Place.deleteMany();

    await Place.insertMany(places);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Place.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}