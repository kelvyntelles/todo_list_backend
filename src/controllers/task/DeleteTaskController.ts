import { Request, Response } from "express";
import { DeleteTaskService } from "../../services/task/DeleteTaskService";

class DeleteTaskController {
    async handle(req: Request, res: Response) {

        const idTask = req.params.idTask 

        const deleteTaskService = new DeleteTaskService();

        const task = await deleteTaskService.execute({
            idTask
        });

        return res.json(task)
    }
}

export { DeleteTaskController }