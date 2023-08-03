import db from '$lib/db.js';
import Filter from 'bad-words';

const filter = new Filter({ placeHolder: 'x'});
const forums = db.collection("Forums");

export async function POST ({ request }) {
    console.log("connected")
    let json;
    try {
        json = await request.json()
    } catch (e) {
        return new Response("request body is not JSON", { status: 400 });
    }

    // Profanity Filter

    let {
        user,
        title,
        content
    } = json;
    user    = filter.clean(user);
    title   = filter.clean(title);
    content = filter.clean(content);

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
