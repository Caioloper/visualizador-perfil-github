const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

export { btnSearch };

export function getInputValue() {
    return inputSearch.value.trim();
}

export function setLoading() {
    profileResults.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearResults() {
    profileResults.innerHTML = '';
}

export function showAlert(message) {
    alert(message);
}

export function renderProfile(userData, userRepos) {

    const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
        <a href="${repo.html_url}" target="_blank">
            <div class="repository-card">
                <h3>${repo.name}</h3>
                <div class="repository-stats">
                    <span>⭐Stars: ${repo.stargazers_count}</span>
                    <span>🍴Forks: ${repo.forks_count}</span>
                    <span>👀Watchers: ${repo.watchers_count}</span>
                    <span>💻language: ${repo.language || 'Não informado'}</span>
                </div>
            </div>
        </a>
    `).join('') : '<p>Este usuário não possui repositórios públicos.</p>';

    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.login}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😢'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
    `;
}
