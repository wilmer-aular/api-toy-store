import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { promiseHandler } from '../utils/promiseHandler';
import CrudService from '../services/crud.service';

class CrudController<M extends Document, S extends CrudService<M>> {
  constructor(readonly service: S, readonly serviceName: string) {}

  all(req: Request, res: Response): void {
    promiseHandler(this.service.all(), res, this.serviceName);
  }

  byId(req: Request, res: Response): void {
    const { id } = req.params;
    promiseHandler(this.service.byId(id), res, this.serviceName);
  }

  create(req: Request, res: Response): void {
    promiseHandler(this.service.create(req.body), res, this.serviceName);
  }

  remove(req: Request, res: Response): void {
    promiseHandler(this.service.remove(req.params.id), res, this.serviceName);
  }

  update(req: Request, res: Response): void {
    promiseHandler(
      this.service.update(req.params.id, req.body),
      res,
      this.serviceName,
    );
  }
}

export default CrudController;