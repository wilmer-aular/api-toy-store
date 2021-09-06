
import { model, Schema, Model } from 'mongoose';
import {IToy, toyBase} from "./toy.model"

interface IVehicle extends IToy{
    size: string;
    wheelQuantity?: number;
    lights: boolean;
    remoteControl: boolean;
}

const VehicleSchema: Schema = new Schema({
    ...toyBase,
    size: { type: String, require: true },
    wheelQuantity: { type: Number, require: false },
    lights:{ type: Boolean, require: false },
    remoteControl: { type: Boolean, require: false },

  });
  
  const Vehicle: Model<IVehicle> = model('Vehicle', VehicleSchema);
  
  export { Vehicle, IVehicle };