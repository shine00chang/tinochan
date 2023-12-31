import db from '$lib/db.js';
import { ObjectId } from 'mongodb';
import Filter from 'bad-words';

const filter = new Filter({ placeHolder: 'x'});
const replies = db.collection("Replies");


export async function PUT ({ request }) {
    console.log("connected")
    let json;
    try {
        json = await request.json()
    } catch (e) {
        return new Response("request body is not JSON", { status: 400 });
    }

    let {
        user,
        content,
        referenceId
    } = json;
    user = filter.clean(user);
    content = filter.clean(content);

    const forumId = new ObjectId( json.forumId );

    if (!forumId || !content || !user)  
        return new Response("request body missing 'forumId' 'content' or 'user'", { status: 400 });

    // Check if post exists
    {
        if (await db.collection("Forums").findOne({_id: forumId}) == undefined) 
            return new Response("supplied 'forumId' does not correlate to existing post", { status: 400 });
    }

    const reply = {
        forumId: forumId.toString(),
        referenceId,
        content,
        user,
    };

    await replies.insertOne(reply);

    console.log("created reply: ", reply);

    return new Response("done", { status: 201 });
}
