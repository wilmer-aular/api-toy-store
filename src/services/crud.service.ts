import { Model, Document } from 'mongoose';

 class CrudService <T extends Document>{
    constructor( readonly model: Model<T>){ }

    async all(): Promise<T[]>{
        return await this.model.find({});
    }

    async byId(id: String): Promise<T>{
        const data=  await this.model.findById(id);
        return withId(data)
    }
    async create(body: any): Promise<T>{
        const modelInstance = await new this.model(body);
    return modelInstance.save();
    }
    async remove(id: string): Promise<any>{
         await this.model.findByIdAndDelete(id);
        return {success: true};
    }
    async update(id: string, body: any):Promise<any>{
     return await this.model.findByIdAndUpdate(id, body, {
            new: true,
          });
    }
}
 const withId = (model: any) => {
    if (model) {
      const newModel = { ...model['_doc'] };
      newModel.id = newModel['_id'];
      return newModel;
    }
    return model;
  };
  export default CrudService;