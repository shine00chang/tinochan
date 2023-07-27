import { error } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import db from '$lib/db.js';


const Forums  = db.collection("Forums");
const Replies = db.collection("Replies");


export async function load({ params }) {

    // Fetch forum by slug (id)
    let _id;
    try {
        _id = new ObjectId(params.slug)
    } catch (e) {
        throw error(400, { message: "failed to fetch" });
    }

    const forum = await Forums.findOne({_id});

    // If no forum found, slug is not an id
    if (forum == null || forum == undefined) {
        throw error(404, { message: "forum not found" });
    }

    // Fetch replies
    const queryr = {
        forumId: forum._id.toString()
    };
    const cursor = Replies.find(queryr);
    const replies = [];
    for await (const reply of cursor) {
        replies.push({
            _id: reply._id.toString(),
            referenceId: reply.referenceId,
            references: [],
            content: reply.content,
            user: reply.user,
        });
    }

    // Construct heirarchy
    {
        for (let i=0; i<replies.length; i++) {
            if (replies[i].referenceId == undefined) continue;
            let j = 0;
            while (j < replies.length && replies[j]._id != replies[i].referenceId) j++;
            if (j == replies.length) console.error("refernced reply not found");
            replies[j].references.push(replies[i]);
        }

        for (let i=0; i<replies.length; i++) {
            if (replies[i].referenceId != undefined) {
                replies.splice(i, 1);
                i--;
            }
        }
        console.log(replies);
    }

    // Cast id from ObjectId into string
    forum._id = forum._id.toString();

    return { forum, replies };
}
