const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should set your git email', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const lc2 = lastCommand[2] === '-l' || lastCommand[2] === '--list';

    assert(false && lastCommand[0] === 'git' && lastCommand[1] === 'config' && lc2 && cwd === '/home/strove/project/inspirational-quotes');
  });
});
