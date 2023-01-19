import { Request, Response } from "express";
import { CreateNewTaskService } from "../../services/task/CreateNewTaskService";

class CreateNewTaskController {
    async handle(req: Request, res: Response) {
        const { title } = req.body;
        const user_id = req.user_id;

        const createTaskService = new CreateNewTaskService();

        const task = await createTaskService.execute({
            title,
            user_id
        });

        return res.json(task)
    }
}

export { CreateNewTaskController }