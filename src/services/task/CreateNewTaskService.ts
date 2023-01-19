import prismaClient from "../../prisma"

interface TaskRequest {
    title: string,
    user_id: string
}

class CreateNewTaskService {
    async execute({title, user_id}: TaskRequest) {
        
        if(!title) {
            throw new Error("Informe o titulo da task")
        }

        const task = await prismaClient.task.create({
            data: {
                title: title,
                userId: user_id
            },
            select: {
                id: true,
                title: true,
                done: true
            }
        })

        return task;
    }
}

export { CreateNewTaskService }