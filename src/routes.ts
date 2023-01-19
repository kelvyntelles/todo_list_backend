import {Router} from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'

import { isAuthenticated } from './middlewares/isAuthenticated';

import { CreateNewTaskController } from './controllers/task/CreateNewTaskController';
import { GetAllTasksController } from './controllers/task/GetAllTasksController';
import { AlterDoneTaskController } from './controllers/task/AlterDoneTaskController';
import { DeleteTaskController } from './controllers/task/DeleteTaskController';

const router = Router();

// ROTAS USER
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// ROTAS TASK
router.post('/task', isAuthenticated, new CreateNewTaskController().handle)
router.get('/tasks', isAuthenticated, new GetAllTasksController().handle)
router.put('/task/:idTask', isAuthenticated, new AlterDoneTaskController().handle)
router.delete('/task/:idTask', isAuthenticated, new DeleteTaskController().handle)

export { router };

