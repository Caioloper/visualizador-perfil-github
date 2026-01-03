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

export function renderProfile(userData) {
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
    `;
}
