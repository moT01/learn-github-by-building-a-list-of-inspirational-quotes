const assert = require('assert');
const { getStagedFiles, getGitHubUsername } = require('./utils');

describe('You', () => {
  it('should add the correct file to staging', async () => {
    const stagedFiles = await getStagedFiles();
    const githubUsername = await getGitHubUsername();

    const stagedFileIndex = stagedFiles.findIndex(item => {
      return item.filename === `${githubUsername}/my_quotes.json` && item.status === 'Added';
    });

    assert(stagedFileIndex >= 0);
  });
});
