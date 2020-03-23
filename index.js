const util = require('util')
const exec = util.promisify(require('child_process').exec)

class GitMetaSource {
  constructor(api, options) {
    api.loadSource(async store => {
      const { stdout: commitHash } = await exec('git rev-parse HEAD')

      store.addMetadata('gitInfo', {
        commitHash: commitHash.trim(),
      })
    })
  }
}

module.exports = GitMetaSource
