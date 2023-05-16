const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// mongoose.set('strictQuery', true);
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/codeial_development');
 console.log("MongoDB is connect");
  // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
}