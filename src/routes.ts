import { Router, Request, Response } from 'express'
import UserController from "./controller/UserController"
import PollController from "./controller/PollController"

const routes = Router()
const userController = new UserController()
const pollController = new PollController()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ menssage: 'Server run port 3333...'})
})

routes.get('/users', userController.all)
routes.get('/users/:id', userController.one)
routes.post('/users', userController.save)
routes.put('/users', userController.update)
routes.delete('/users/:id', userController.remove)

routes.get('/polls', pollController.all)
routes.get('/polls/:id', pollController.one)
routes.post('/polls', pollController.save)
routes.put('/polls', pollController.update)
routes.delete('/polls/:id', pollController.remove)

export default routes