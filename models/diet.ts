import * as mongoose from 'mongoose';

export interface Diet extends mongoose.Document {
  food: string
}

let dietSchema = new mongoose.Schema({
  food: {
    type: String
  }
});

export default dietSchema;
