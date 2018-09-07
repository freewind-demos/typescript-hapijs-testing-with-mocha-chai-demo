import * as Hapi from 'hapi'
import * as Joi from 'Joi'
import {Request, ResponseToolkit} from 'hapi'

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
})

server.route({
    method: 'POST',
    path: '/hello',
    handler: function (request: Request, h: ResponseToolkit) {
        const payload = request.payload as { name: string }
        return `Hello, ${payload.name}!`
    },
    options: {
        validate: {
            payload: {
                name: Joi.string().required().min(3)
            }
        }
    }
})


async function startServer() {
    await server.start()
    console.log('Server running at:', server.info.uri)
}

if (!module.parent) {
    startServer()
}

export default server
