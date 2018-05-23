export const config = {
  // The list of configuration options that can be set
  options: ['no-default-scripts', 'auto-sync-on-new-file'],

  // the path relative to the cwd where the repo is cloned
  repoPath: `${process.cwd()}`,

  // path where autodot.json is created and where the commands look for autodot.json
  autodotPath: `${process.cwd()}`
}
