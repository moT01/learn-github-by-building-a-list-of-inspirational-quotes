const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('You', () => {
  it('should add an "upstream" remote to your repo with the correct URL', async () => {
    const commandOutput = await getCommandOutput('git remote -v');
    const re1 = new RegExp(`upstream        https://github.com/moT03/inspirational-quotes.git`, 'g');
    const re2 = new RegExp(`upstream        https://github.com/freeCodeCamp/inspirational-quotes.git`, 'g');

    assert(commandOutput.test(re1) || commandOutput.test(re2));
  });
});
