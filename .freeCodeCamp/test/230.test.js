const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents, getGitHubUsername } = require('./utils');

describe('You', () => {
  it('should use the "mkdir" command to create the correct folder', async () => {
    const repoDirectory = await getDirectoryContents('../inspirational-quotes');
    const lastCommand = await getLastCommand();
    const githubUsername = await getGitHubUsername();
    const re = new RegExp(`${githubUsername}`);

    assert(repoDirectory.includes(githubUsername) && lastCommand[0] === 'mkdir' && re.test(lastCommand[1]) && cwd === '/home/strove/project');
  });
});
