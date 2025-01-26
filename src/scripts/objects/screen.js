const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
                <img src="${user.avatarUrl}" alt="Foto do poerfil do usuário"/>
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado🥲'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 🥲'}</p>
                        <div class="followers">
                            <h2>👥 Seguindo: ${user.following.length} 👥 Seguidores: ${user.followers.length}</h2">
                        </div>
                        
                </div>
        </div>`

        let respositoriesItens = ''
        user.repositories.forEach(repo => respositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                <ul class="repo-info">
                    <li>🍴 ${repo.forks_count}</li>
                    <li>⭐ ${repo.stargazers_count}</li>
                    <li>👀 ${repo.watchers_count}</li>
                    <li>📖 ${repo.language}</li>
                </ul></a>
            </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories">
            <h2>Repositórios</h2>
            <ul>${respositoriesItens}</ul>
        </div>`

        }


        let filtredEvents = user.events.filter(event => event.type === "PushEvent" || event.type === "CreateEvent")

        let eventsItens = ''
        filtredEvents.forEach(event => {
            if (event.type === "PushEvent" && event.payload && event.payload.commits && event.payload.commits.length > 0) {
                event.payload.commits.forEach(commit => {
                    eventsItens += `<li><span>${event.repo.name}</span> - ${commit.message}</li>`;
                });
            } else {
                eventsItens += `<li><span>${event.repo.name}</span> - Sem mensagem de
 commit</li>`;
            }
        });

        if (filtredEvents.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
            <h2>Eventos</h2>
            <ul>${eventsItens}</ul>
        </div>`
        }

    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }