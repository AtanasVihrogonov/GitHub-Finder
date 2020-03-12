class Github {
  constructor() {
    this.client_id = 'e15fff46bdc29888bebf';
    this.client_secret = 'cb2d25f62aea14773e8f9b9bb50af7ecbc2e79d0';
    this.repos_count = 6;
    this.repos_score = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}