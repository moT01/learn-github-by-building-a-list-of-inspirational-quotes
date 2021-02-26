/*const assert = require('assert');
const { getLastCommand, getDirectoryContents, getGitHubUsername, getCwd } = require('./utils');

describe('You', () => {
  it('should use the "touch" command to create the correct file', async () => {
    const cwd = await getCwd();
    const githubUsername = await getGitHubUsername();
    const userDirectoryContents = await getDirectoryContents(`../inspirational-quotes/${githubUsername}`);
    const lastCommand = await getLastCommand();
    const re = new RegExp(`${githubUsername}/my_quotes.sh`, 'g');

    assert(userDirectoryContents.includes('my_quotes.sh') && lastCommand[0] === 'touch' && re.test(lastCommand[1]) && cwd === '/home/strove/project/inspirational-quotes');
  });
});*/
