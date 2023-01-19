import prismaClient from "../../prisma"

interface props {
    idTask: string
}

class DeleteTaskService {
    async execute({idTask}: props) {

        const deleteUsers = await prismaClient.task.deleteMany({
            where: {
              id: idTask
            },
        })

        return 'Task deletada com sucesso!'
    }
}

export { DeleteTaskService }