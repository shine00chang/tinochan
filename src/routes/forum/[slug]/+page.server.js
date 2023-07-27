import { error } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import db from '$lib/db.js';


const forums  = db.collection("Forums");
const replies = db.collection("Replies");


export async function load({ params }) {

    // Fetch forum by slug (id)
    let _id;
    try {
        _id = new ObjectId(params.slug)
    } catch (e) {
        throw error(400, { message: "failed to fetch" });
    }

    const forum = await forums.findOne({_id});

    // If no forum found, slug is not an id
    if (forum == null || forum == undefined) {
        throw error(404, { message: "forum not found" });
    }

    // Fetch replies
    const queryr = {
        forumId: forum._id.toString()
    };
    const cursor = replies.find(queryr);
    const forumReplies = [];
    for await (const reply of cursor) {
        forumReplies.push({
            content: reply.content,
            user: reply.user,
        });
    }

    // Cast id from ObjectId into string
    forum._id = forum._id.toString();

    return {
        forum,
        replies: forumReplies 
    };
}
