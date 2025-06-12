// let response  = fetch("https://api.github.com/search/users?q=location:nepal&per_page=100&page=1")
// let repos  = fetch("https://api.github.com/users/santoshxshrestha/repos")
// let contrib = fetch("GET https://api.github.com/repos/<username>/<repo>/contributors")

// const fetch = require('node-fetch');
// Make sure to set your GitHub token as an environment variable

async function fetchFromGitHub(url) {
    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'User-Agent': 'Nepal-Users-Script'
            }
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        return await res.json();
    } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        return null;
    }
}

async function getUsersFromNepal(page = 1) {
    const url = `https://api.github.com/search/users?q=location:nepal&per_page=30&page=${page}`;
    const data = await fetchFromGitHub(url);
    return data?.items || [];
}

async function getUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`;
    const repos = await fetchFromGitHub(url);
    return repos || [];
}

async function getUserCommits(username, repo) {
    try {
        const url = `https://api.github.com/repos/${username}/${repo}/contributors`;
        const contributors = await fetchFromGitHub(url);
        
        if (!contributors || !Array.isArray(contributors)) {
            return 0;
        }
        
        const user = contributors.find(c => c.login === username);
        return user ? user.contributions : 0;
    } catch (error) {
        console.error(`Error getting commits for ${username}/${repo}:`, error.message);
        return 0;
    }
}

// Add delay to respect rate limits
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    if (!GITHUB_TOKEN) {
        console.error('Please set GITHUB_TOKEN environment variable');
        process.exit(1);
    }
    
    console.log('Fetching users from Nepal...');
    const users = await getUsersFromNepal(1);
    
    if (!users.length) {
        console.log('No users found');
        return;
    }
    
    console.log(`Found ${users.length} users. Processing...`);
    
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        console.log(`Processing ${i + 1}/${users.length}: ${user.login}`);
        
        let totalCommits = 0;
        const repos = await getUserRepos(user.login);
        
        // Add delay to respect rate limits
        await delay(100);
        
        for (let repo of repos) {
            if (repo.fork) continue; // Skip forked repos
            
            const commits = await getUserCommits(user.login, repo.name);
            totalCommits += commits;
            
            // Add delay between API calls
            await delay(100);
        }
        
        console.log(`${user.login}: ${totalCommits} commits`);
    }
})();
