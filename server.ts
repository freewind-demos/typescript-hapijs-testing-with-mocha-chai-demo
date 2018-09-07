import * as Hapi from 'hapi'

// Create a server with a host and port
const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
})

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, h) {
        return 'hello world'
    }
})

// Start the server
async function start() {
    try {
        let started = await server.start()
        console.log('Server running at:', server.info.uri)
        return started
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()