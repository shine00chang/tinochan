import { redirect } from '@sveltejs/kit';
import db from '$lib/db.js';


export async function load ({ cookies }) {
	const session_cookie = cookies.get('session');

    console.log("checking cookie before entering '/feed', found 'session': ", session_cookie);
    if (session_cookie == undefined) {
        throw redirect(303, "../");
    }

    const forums = await db.collection('Forums').find({}).toArray();
    for (const forum of forums) 
        forum._id = forum._id.toString();

    return {
        forums
    }
}
