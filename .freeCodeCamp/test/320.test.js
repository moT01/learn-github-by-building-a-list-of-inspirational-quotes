const assert = require('assert');
const { getLastCommand, getCwd, getGitHubUsername } = require('./utils');

describe('You', () => {
  it('should correctly create a PR to the parent repo', async () => {
    const githubUsername = await getGitHubUsername();
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(false);
  });
});
