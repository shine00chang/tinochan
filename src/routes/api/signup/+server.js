import { redirect } from '@sveltejs/kit';
import db from '$lib/db.js';

const users = db.collection("Users");


export async function PUT ({ request }) {
    let json;
    try {
        json = await request.json()
    } catch (e) {
        return new Response("request body is not JSON", { status: 400 });
    }

    const {
        username,
        password
    } = json;

    if (!username || !password)  
        return new Response("request body missing 'username' or 'password' fields", { status: 400 });

    const user = {
        username,
        password,
    };

    await users.insertOne(user);

    console.log("created user:", user);

    return new Response("done", { status: 200 });
}

