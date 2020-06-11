import {getRepository} from "typeorm"
import {Request, Response} from "express"
import {Poll} from "../entity/Poll"

class PollController {
    async all(request: Request, response: Response) {
        const polls = await getRepository(Poll).find({ relations: ["user"] })

        return response.json(polls)
    }

    async one(request: Request, response: Response) {
        const { id } = request.params
        const poll = await getRepository(Poll)
            .createQueryBuilder('poll')
            .leftJoinAndSelect('poll.user', 'user')
            .where('poll.id = :id', {id})
            .getOne()
        return response.json(poll)
    }

    async save(request: Request, response: Response) {
        const poll = await getRepository(Poll).save(request.body)
        return response.json(poll)
    }

    async update(request: Request, response: Response) {
        const poll = await getRepository(Poll).update(request.body.id, request.body)

        if (poll.affected === 1) {
            const pollUpdated = await getRepository(Poll).findOne(request.body.id)
            return response.json(pollUpdated) 
        }
        return response.status(404).json({menssage: 'User not found!'})
    }

    async remove(request: Request, response: Response) {
        let pollsToRemove = await getRepository(Poll).findOne(request.params.id)
        await getRepository(Poll).remove(pollsToRemove)
        return response.json({menssage: 'Sucess'})
    }
}

export default PollController