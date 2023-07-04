import { MongoClient } from "mongodb"
import { CONNECTION_STRING } from '$env/static/private';

const client = new MongoClient(CONNECTION_STRING)
await client.connect()

export default client.db('Tinochan') // select database
