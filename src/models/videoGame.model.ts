import { model, Schema, Model } from 'mongoose';
import {IToy, toyBase} from "./toy.model"

interface IVideoGame extends IToy{
    numberOfControls: number;
    wireless: boolean;
    memory: string;
}

const VideoGameSchema: Schema = new Schema({
    ...toyBase,
    memory: { type: String, require: true },
    numberOfControls: { type: Number, require: false },
    wireless: { type: Boolean, require: true },
   
  });
  
  const VideoGame: Model<IVideoGame> = model('VideoGame', VideoGameSchema);
  
  export { VideoGame, IVideoGame };