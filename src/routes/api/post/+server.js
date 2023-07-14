import { redirect } from '@sveltejs/kit';
import db from '$lib/db.js';

const forums = db.collection("Forums");

export async function PUT ({ request }) {
    console.log("connected")
    /*let json;
    try {
        json = await request.json()
    } catch (e) {
        return new Response("request body is not JSON", { status: 400 });
    }

    const {
        title,
        content
    } = json;*/

    if (!title || !content)  
        return new Response("request body missing 'title' or 'content'", { status: 400 });

    const feed = {
        title,
        content,
    };

    await forums.insertOne(feed);

    console.log("created post:", feed);

    return new Response("done", { status: 200 });
}