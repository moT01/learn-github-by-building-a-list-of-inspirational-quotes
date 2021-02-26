const assert = require('assert');
const { getFileContents, getGitHubUsername } = require('./utils');

describe('Your ".env" file', () => {
  it('should have your username added', async () => {
    const dotenvFile = await getFileContents('../inspirational-quotes/.env');
    const githubUsername = await getGitHubUsername();
    const re = new RegExp(`USERNAME=${githubUsername}`, 'g');

    assert(re.test(dotenvFile));
  });
});
