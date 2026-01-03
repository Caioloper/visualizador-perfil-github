const BASE_URL = 'https://api.github.com';

export async function fetchGithubUser(username) {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
        const error = new Error('Usuário não encontrado.');
        error.status = response.status;
        throw error;
    }
    return response.json();
}
