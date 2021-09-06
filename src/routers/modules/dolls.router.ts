import { Router } from 'express';
import { crudRouter } from '../crud.router';
import { DollController } from '../../controllers/dolls.controller';

import { IDoll } from '../../models/dolls.model';
import { DollService } from '../../services/doll.service';

const router = Router();

crudRouter<IDoll, DollService, DollController>(
  router,
  new DollController(),
);

export default router;