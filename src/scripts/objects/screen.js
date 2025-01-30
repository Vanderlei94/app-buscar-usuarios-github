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
        user.repositories.forEach(repo => respositoriesItens +=
            `<li>
                <a href="${repo.html_url}" target="_blank">${repo.name}
                    <ul class="repo-info">
                        <li>🍴 ${repo.forks_count ?? 'Sem forks'}</li>
                        <li>⭐ ${repo.stargazers_count ?? 'Sem estrelas'}</li>
                        <li>👀 ${repo.watchers_count ?? 'Sem watchers'}</li>
                        <li>📖 ${repo.language ?? 'Linguagem indefinida'}</li>
                    </ul>
                </a>
            </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=
            `<div class="repositories">
                <h2>Repositórios</h2>
                    <ul>${respositoriesItens}</ul>
            </div>`

        }

        let eventsItens = ''
        
        if (!user.events || user.events.length === 0) {
            console.log("Nenhum evento encontrado para este usuário.");
            return;
        }

        user.events.forEach(element => {
            if (element.type === "PushEvent" ) {
                eventsItens += `<li>
                    <p><span>${element.repo.name}</span> -- ${element.payload.commits[0]?.message || 'Sem mensagem'} commits</p>
                </li>`
            }else{
                eventsItens += `<li>
                    <p><span>${element.repo.name}</span> -- Criado um ${element.payload.ref_type || 'Item desconhecido'}</p>
                </li>`
            }
        });

        if (eventsItens.length > 0) {
            this.userProfile.innerHTML +=
            `<div class="events">
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