# TODO
---

These are some of the things to be completed for autodot (some of these require further discussion):

### Code
1. Add default scripts for `bootstrap` and `sync` commands as fallbacks for when the `autodot.json` file has no value for the corresponding commands
2. Add a flag to the `bootstrap` and `sync` commands to allow the invocation of default scripts (this assumes that 1 has been approved and completed)
3. Add an `uninstall` field to `autodot.json` which let's users uninstall dotfiles (discuss this).
4. **Important** Add tests for all the commands and mandate the writing of tests for new functionality.

### Misc
1. Integrate code coverage reports (assumes that tests have been added in accordance with point 4 of the [code](#code) section).
2. **Important** Decide upon the major goals, milestones and functionality for the release of autodot v1.0.0.