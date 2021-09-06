import { model, Schema, Model } from 'mongoose';
import {IToy, toyBase} from "./toy.model"

interface IDoll extends IToy{
    hairColor?: string;
    sound: boolean
    voices: string;
}

const DollSchema: Schema = new Schema({
    ...toyBase,
    hairColor: { type: String, require: false },
    sound: { type: Boolean , require: false },
    voices: { type: String , require: false },
  });
  
  const Doll: Model<IDoll> = model('Doll', DollSchema);
  
  export { Doll, IDoll };