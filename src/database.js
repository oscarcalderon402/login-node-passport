const mongoose = require('mongoose');
const { mongodb } = require('./keys');

const conectDB = async () => {
  try {
    await mongoose.connect(mongodb.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('DB Conectada');
  } catch (error) {
    console.log('hubo un error');
    console.log(error);
    process.exit(1); // Detener la app
  }
};

module.exports = conectDB;
