import * as mongoose from 'mongoose';
import {Diet} from './diet';
import dietSchema from './diet';
import {Habitat} from './habitat';
import habitatSchema from './habitat';

interface Animal extends mongoose.Document {
  name: string;
  picture: string;
  conservationStatus: string;
  habitat: Habitat[];
  cuddleStatus: string;
  scientificName: string;
  diet: Diet[];
}

let animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  conservationStatus: {
    type: String
  },
  habitat: {
    type: [habitatSchema]
  },
  cuddleStatus: {
    type: String,
    enum: ['not cuddly', 'cuddly']
  },
  scientificName: {
    type: String
  },
  diet: {
    type: [dietSchema]
  }
});

export default mongoose.model<Animal>('Animal', animalSchema);
