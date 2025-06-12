// let response  = fetch("https://api.github.com/search/users?q=location:nepal&per_page=100&page=1")
// let repos  = fetch("https://api.github.com/users/santoshxshrestha/repos")
// let contrib = fetch("GET https://api.github.com/repos/<username>/<repo>/contributors")

const fetch = require('node-fetch');
const GITHUB_TOKEN = "your_github_token_here"; // Optional but recommended

async function fetchFromGitHub(url) {
    const res = await fetch(url, {
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`
        }
    });
    return await res.json();
}

async function getUsersFromNepal(page = 1) {
    const url = `https://api.github.com/search/users?q=location:nepal&per_page=30&page=${page}`;
    const data = await fetchFromGitHub(url);
    return data.items || [];
}

async function getUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    return await fetchFromGitHub(url);
}

async function getUserCommits(username, repo) {
    const url = `https://api.github.com/repos/${username}/${repo}/contributors`;
    const contributors = await fetchFromGitHub(url);
    const user = contributors.find(c => c.login === username);
    return user ? user.contributions : 0;
}

(async () => {
    const users = await getUsersFromNepal(1); // just page 1 for example
    for (let user of users) {
        let totalCommits = 0;
        const repos = await getUserRepos(user.login);
        for (let repo of repos) {
            const commits = await getUserCommits(user.login, repo.name);
            totalCommits += commits;
        }
        console.log(`${user.login}: ${totalCommits} commits`);
    }
})();
