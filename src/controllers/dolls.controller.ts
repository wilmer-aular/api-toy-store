import { IDoll } from "../models/dolls.model"
import  CrudController  from './crud.controller';
import { DollService } from "../services/doll.service";

class DollController extends CrudController<
IDoll,
DollService
> {
  constructor() {

    super(new DollService(), 'doll');
  }
}

export { DollController };
