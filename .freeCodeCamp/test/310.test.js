const assert = require('assert');
const { getLastCommand, getCwd, getGitHubUsername } = require('./utils');

describe('You', () => {
  it('should push your code to github', async () => {
    const githubUsername = await getGitHubUsername();
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(false);
  });
});
