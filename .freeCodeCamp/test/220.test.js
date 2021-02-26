const assert = require('assert');
const { getLastCommand, getCommandOutput, getGitHubUsername } = require('./utils');

describe('You', () => {
  it('should use "git checkout" to switch to the correct branch', async () => {
    const lastCommand = await getLastCommand();
    const githubUsername = await getGitHubUsername();
    const commandOutput = await getCommandOutput('git status');
    const re = new RegExp(`On branch feat/first-quote-from-${githubUsername}`);

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'checkout' && re.test(commandOutput));
  });
});
