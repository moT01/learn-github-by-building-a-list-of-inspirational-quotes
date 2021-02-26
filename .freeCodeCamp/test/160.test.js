const assert = require('assert');
const { getLastCommand, getDirectoryContents  } = require('./utils');

describe('You', () => {
  it('copy the suggested file correctly', async () => {
    const repoDirectory = await getDirectoryContents('../');
    const lastCommand = await getLastCommand();

    assert(repoDirectory.includes('.env') && lastCommand[0] === 'cp');
  });
});
