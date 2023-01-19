import prismaClient from "../../prisma"

interface props {
    user_id: string
}

class GetAllTasksService {
    async execute({user_id}: props) {
        
        const tasks = await prismaClient.task.findMany({
            where: {
                userId: user_id
            },
            select: {
                id: true,
                title: true,
                done: true
            }
        })

        return tasks;
    }
}

export { GetAllTasksService }