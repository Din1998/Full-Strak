const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

// setting up config file
dotenv.config({ path: 'Backend/config/config.env'});

//connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} node.`)
});

//Handle uncaught exceptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.stack}`);
  console.log('Shutting Down The Server');
  process.exit(1);
})

//Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('shutting down the server')
  server.close(() => {
    process.exit(1)
  })
})