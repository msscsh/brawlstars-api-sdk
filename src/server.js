import { createServer } from 'http'
import { once } from 'events'
import { randomUUID } from 'crypto'
const Database = new Map()

function respondJSON(data, response) {
    return response.end(JSON.stringify(data))
}

function returnAll(response) {
    return respondJSON([...Database.values()], response)
}

async function insertOne(request, response) {
    const body = JSON.parse(await once(request, 'data'))
    const id = randomUUID()
    Database.set(id, body)
    console.log('Recebido: ', body)
    return respondJSON({ok: 1}, response)
}

async function handler(request, response) {
    const { method } = request

    if( method === 'POST') {
        insertOne(request, response);
    }
    else if ( method === 'GET') {
        returnAll(response);
    }
}


export default createServer(handler)