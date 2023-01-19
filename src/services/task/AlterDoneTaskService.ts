import prismaClient from "../../prisma"

interface props {
    idTask: string
}

class AlterDoneTaskService {
    async execute({idTask}: props) {
        const task = await prismaClient.task.findUnique({
            where: {
                id: idTask
            },
            select: {
                done: true
            }
        })

        if (task.done === false) {
            const updateDone = await prismaClient.task.update({
                where: {
                  id: idTask,
                },
                data: {
                  done: true,
                },
                select: {
                    id: true,
                    title: true,
                    done: true
                }
            })

            return updateDone
        } else {
            const updateDone = await prismaClient.task.update({
                where: {
                  id: idTask,
                },
                data: {
                  done: false,
                },
                select: {
                    id: true,
                    title: true,
                    done: true
                }
            })

            return updateDone
        }
    }
}

export { AlterDoneTaskService }