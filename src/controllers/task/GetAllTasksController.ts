import { Request, Response } from "express";
import { GetAllTasksService } from "../../services/task/GetAllTasksService";

class GetAllTasksController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const getAllTasksService = new GetAllTasksService();

        const tasks = await getAllTasksService.execute({
            user_id
        });

        return res.json(tasks)
    }
}

export { GetAllTasksController }