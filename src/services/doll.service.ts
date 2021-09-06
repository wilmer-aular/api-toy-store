import { Doll, IDoll } from "../models/dolls.model";
import CrudService from './crud.service';

export class DollService extends CrudService<IDoll> {
  constructor() {
    super(Doll);
  }
}
