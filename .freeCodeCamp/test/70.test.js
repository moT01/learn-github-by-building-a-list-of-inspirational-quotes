const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should view the branches in your repository', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'branch' && lastCommand[2] === undefined && cwd === '/home/strove/project/inspirational-quotes');
  });
});
