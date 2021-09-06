import { Request, Response, Router } from 'express';
import   CrudService  from '../services/crud.service';
import  CrudController  from '../controllers/crud.controller';
import { Document } from 'mongoose';

export const crudRouter = <
  M extends Document,
  S extends CrudService<M>,
  T extends CrudController<M, S>
>(
  router: Router,
  controller: T,
): void => {
  router.get('/', (req: Request, res: Response) => {
    controller.all(req, res);
  });
  router.get('/:id', (req: Request, res: Response) => {
    controller.byId(req, res);
  });
  router.post('/', (req: Request, res: Response) => {
    controller.create(req, res);
  });
  router.put('/:id', (req: Request, res: Response) => {
    controller.update(req, res);
  });
  router.delete('/:id', (req: Request, res: Response) => {
    controller.remove(req, res);
  });
};