const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should view the remotes your repository has with the correct flag', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const lc2 = lastCommand[2] === '-v' || lastCommand[2] === '--verbose';

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'remote' && lc2 && cwd === '/home/strove/project/inspirational-quotes');
  });
});
