import { redirect } from '@sveltejs/kit';


export async function load ({ cookies }) {
	const session_cookie = cookies.get('session');

    console.log("checking cookie before entering '/feed', found 'session': ", session_cookie);
    if (session_cookie == undefined) {
        throw redirect(303, "../");
    }
}
