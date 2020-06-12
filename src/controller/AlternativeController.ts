import {getRepository} from "typeorm"
import {Request, Response} from "express"
import {Alternative} from "../entity/Alternative"

class AlternativeController {
    async all(request: Request, response: Response) {
        const alternatives = await getRepository(Alternative).find({ relations: ["poll"] })

        return response.json(alternatives)
    }

    async one(request: Request, response: Response) {
        const { id } = request.params
        const alternatives = await getRepository(Alternative)
            .createQueryBuilder('alternatives')
            .leftJoinAndSelect('alternatives.poll', 'poll')
            .where('alternatives.id = :id', {id})
            .getOne()
        return response.json(alternatives)
    }

    async save(request: Request, response: Response) {
        const alternatives = await getRepository(Alternative).save(request.body)
        return response.json(alternatives)
    }

    async update(request: Request, response: Response) {
        const alternatives = await getRepository(Alternative).update(request.body.id, request.body)

        if (alternatives.affected === 1) {
            const alternativesUpdated = await getRepository(Alternative).findOne(request.body.id)
            return response.json(alternativesUpdated) 
        }
        return response.status(404).json({menssage: 'User not found!'})
    }

    async remove(request: Request, response: Response) {
        let alternativesToRemove = await getRepository(Alternative).findOne(request.params.id)
        await getRepository(Alternative).remove(alternativesToRemove)
        return response.json({menssage: 'Sucess'})
    }
}

export default AlternativeController