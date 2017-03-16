import * as mongoose from 'mongoose';

export interface Login extends mongoose.Document {
  userId: string;
  password: string
}
let loginSchema = new mongoose.Schema ({
  userId: {
    type: String
  },
  password: {
    type: String
  }
})
export default mongoose.model<Login>('Login', loginSchema);
