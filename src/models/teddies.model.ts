import { model, Schema, Model } from 'mongoose';
import {IToy, toyBase} from "./toy.model"

interface ITeddie extends IToy{
    size: string;
    weight: string;
    material: string;
}

const TeddieSchema: Schema = new Schema({
    ...toyBase,
    size: { type: String, require: true },
    weight: { type: String, require: false },
   
  });
  
  const Teddie: Model<ITeddie> = model('Teddie', TeddieSchema);
  
  export { Teddie, ITeddie };