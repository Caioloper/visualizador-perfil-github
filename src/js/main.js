import { btnSearch, getInputValue, setLoading, clearResults, showAlert, renderProfile } from './ui.js';
import { fetchGithubUser, fetchGithubUserRepos } from './api.js';

btnSearch.addEventListener('click', async () => {
    const username = getInputValue();
    if (!username) {
        showAlert('Por favor, insira um nome de usuário do GitHub.');
        return;
    }

    setLoading();

    try {
        const userData = await fetchGithubUser(username);
        const userRepos = await fetchGithubUserRepos(username);

        renderProfile(userData, userRepos);
    } catch (error) {
        console.error('Erro ao buscar o perfil do GitHub:', error);
        if (error.status === 404) {
            showAlert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        } else {
            showAlert('Ocorreu um erro ao buscar o perfil. Por favor, tente novamente mais tarde.');
        }
        clearResults();
    }
});
