import { Request, Response } from "express";
import { AlterDoneTaskService } from "../../services/task/AlterDoneTaskService";

class AlterDoneTaskController {
    async handle(req: Request, res: Response) {

        const idTask = req.params.idTask 

        const alterDoneTaskService = new AlterDoneTaskService();

        const task = await alterDoneTaskService.execute({
            idTask
        });

        return res.json(task)
    }
}

export { AlterDoneTaskController }