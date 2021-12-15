const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwOTAyMSwiZXhwIjoxOTU1MDg1MDIxfQ.v4B-VNkc9Xc9bIM4ig0BrZcgdU2bqx3VGiJiMMYNcis';

const SUPABASE_URL = 'https://iddyxpegdpnmmnebvghi.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllMovies() {
    const response = await client
        .from('nicolas-cage-movies')
        .select();
    console.log(response.data);
    return response.data;
}

export async function getMovie(id) {
    const response = await client
        .from('nicolas-cage-movies')
        .select()
        .match({ id: id })
        .single();

    return response.data;
}