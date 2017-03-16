import * as mongoose from 'mongoose';

export interface Habitat extends mongoose.Document {
  location: string;
};
let habitatSchema = new mongoose.Schema({
  location: {
    type: String
  }
});
export default habitatSchema;
