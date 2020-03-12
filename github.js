class Github {
  constructor() {
    this.client_id = 'e15fff46bdc29888bebf';
    this.client_secret = 'cb2d25f62aea14773e8f9b9bb50af7ecbc2e79d0';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}