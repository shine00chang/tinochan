import db from '$lib/db.js';

const users = db.collection("Users");


// Logs in user by setting "session_cookie" as username.
export async function POST ({ request, cookies }) {
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

    const user = await users.findOne({ username });
    console.log("found user:", user);

    if (user.password !== password) {

        console.log("password incorrect");
        return new Response("password does not match", { status: 403 });

    } else {

        console.log("authorized, setting cookie");

        cookies.set("session", user.username, { path: "/" });
        return new Response("done", { status: 200 });
    }
}

