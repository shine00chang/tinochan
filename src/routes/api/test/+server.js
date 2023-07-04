import { json } from '@sveltejs/kit';
import db from '$lib/db.js';

export async function GET() {

    const forums = await db
        .collection("Forums")
        .find()
        .toArray();

    console.log(forums);
	return json(forums);
}
