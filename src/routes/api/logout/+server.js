export async function POST ({ cookies }) {
    cookies.delete("session", { path: "/" });
    console.log("deleted 'session' cookie");
    return new Response("done", { status: 200 });
}

