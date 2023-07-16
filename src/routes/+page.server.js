export async function load ({ cookies }) {
	const session_cookie = cookies.get('session');

    console.log("session_cookie: ", session_cookie);

    const obj = { 
        session_cookie
    };
    console.log(obj);
    return obj;
}
