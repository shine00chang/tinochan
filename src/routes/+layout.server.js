export function load ({ cookies }) {
	const session_cookie = cookies.get('session');

    return { session_cookie };
}
