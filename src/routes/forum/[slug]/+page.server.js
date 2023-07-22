import { error } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import db from '$lib/db.js';


const forums = db.collection("Forums");


export async function load({ params }) {

    // Fetch forum by slug (id)
    const query = {
        _id: new ObjectId(params.slug)
    };
    const forum = await forums.findOne(query);

    // If no forum found, slug is not an id
    if (forum == null || forum == undefined) {
        throw error(404, { message: "forum not found" });
    }

    // Cast id from ObjectId into string
    forum._id = forum._id.toString();

    return {
        forum,
        replies: []
    };
}
