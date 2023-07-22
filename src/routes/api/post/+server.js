import { json } from '@sveltejs/kit';
import db from '$lib/db.js';

const forums = db.collection("Forums");

export async function PUT ({ request }) {
    console.log("connected")
    let json;
    try {
        json = await request.json()
    } catch (e) {
        return new Response("request body is not JSON", { status: 400 });
    }

    const {
        title,
        content,
        user
    } = json;

    if (!title || !content || !user)  
        return new Response("request body missing 'title' 'content' or 'user'", { status: 400 });

    const feed = {
        title,
        content,
        user,
    };

    await forums.insertOne(feed);

    console.log("created post:", feed);

    return new Response("done", { status: 201 });
}

export async function GET() {

    const posts = await forums 
        .find()
        .toArray();

	return json(posts);
}
