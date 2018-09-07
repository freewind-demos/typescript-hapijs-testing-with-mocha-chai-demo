import {expect} from 'chai'
import server from './server'
import {ServerInjectOptions} from 'hapi'

describe('server', () => {
    it('/hello POST correct payload', () => {
        const request: ServerInjectOptions = {
            method: 'POST',
            url: '/hello',
            payload: {
                name: 'hapijs'
            }
        }
        return server.inject(request)
            .then(response => {
                expect(response.statusCode).eq(200)
                expect(response.result).eq('Hello, hapijs!')
            })
    })

    it('/hello POST wrong payload | name too short', () => {
        const request: ServerInjectOptions = {
            method: 'POST',
            url: '/hello',
            payload: {
                name: 'a'
            }
        }
        return server.inject(request)
            .then(response => {
                expect(response.statusCode).eq(400)
            })
    })
})