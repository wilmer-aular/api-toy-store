import { Document } from 'mongoose';

interface IMaker{
    company: string;
    country: string;
    date?: string;
    mark: string;
}
const makerBase = {
    company: { type: String, require: true },
    country: { type: String, require: false },
    date: { type: String, require: false },
    mark: { type: Number, require: false },
    
  };

export interface IToy extends Document {
    name: string;
    type?: string
    price: number;
    stock: number;
    category?: string;
    markeplace: IMaker;
    color: string;
};
export const toyBase = {
    ...makerBase,
    name: { type: String, require: true },
    type: { type: String, require: false },
    price: { type: Number, require: true },
    stock: { type: Number, require: true },
    category: { type: String, require: false },
    color:  { type: String, require: false },
  };


