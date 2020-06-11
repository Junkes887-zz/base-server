import {getRepository} from "typeorm"
import {Request, Response} from "express"
import {User} from "../entity/User"

class UserController {
    async all(request: Request, response: Response) {
        const users = await getRepository(User).find()
        return response.json(users)
    }

    async one(request: Request, response: Response) {
        const user = await getRepository(User).findOne(request.params.id)
        return response.json(user)
    }

    async save(request: Request, response: Response) {
        const user = await getRepository(User).save(request.body)
        return response.json(user)
    }

    async update(request: Request, response: Response) {
        const user = await getRepository(User).update(request.body.id, request.body)

        if (user.affected === 1) {
            const userUpdated = await getRepository(User).findOne(request.body.id)
            return response.json(userUpdated) 
        }
        return response.status(404).json({menssage: 'User not found!'})
    }

    async remove(request: Request, response: Response) {
        let usersToRemove = await getRepository(User).findOne(request.params.id)
        await getRepository(User).remove(usersToRemove)
        return response.json({menssage: 'Sucess'})
    }
}

export default UserController