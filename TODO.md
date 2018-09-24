# TODO
---

These are some of the things to be completed for autodot (some of these require further discussion):

## Features
1. **[Discuss]** Add an `uninstall` field to `autodot.json` which let's users uninstall dotfiles.
2. **[Discuss]** Consider a global `autodot.json` file that allows one to access things like commands from the `scripts` section from anywhere.
3. **[Discuss]** Consider making it possible to use autodot commands (or only autodot scripts) from anywhere, and not just the dotfiles directory that uses autodot. User might have to specify the directory containing `autodot.json`, since multiple such directories can exist.
4. Assuming 3 is completed, allow users to give names to directories containing `autodot.json` files (like an alias), so that it is easy to invoke commands from various directories without having to remember their paths.
5. A backup feature (implemented using an optional `backup` field in `autodot.json` with a default fallback) that allows one to backup their dotfiles, perhaps before installing new dotfiles.
6. Assuming 5 is completed, add a flag to the `autodot install` command that automatically backs up existing dotfiles before installing new ones, using the `backup` command from 5.
7. Assuming 5 is completed, a complementary `restore` command may also be added to restore the backed up dotfiles.

## Code
1. Add default scripts for `bootstrap` and `sync` commands as fallbacks for when the `autodot.json` file has no value for the corresponding commands
2. Add a flag to the `bootstrap` and `sync` commands to allow the invocation of default scripts (this assumes that 1 has been approved and completed)
3. **[Important]** Add tests for all the commands and mandate the writing of tests for new functionality.
4. Consider adding multiple defaults (see point 1) for each command, each default having a different (standard) approach to achieving it's purpose.

## Misc
1. Integrate code coverage reports (assumes that tests have been added in accordance with point 4 of the [code](#code) section).
2. **[Important]** Decide upon the major goals, milestones and functionality for the release of autodot v1.0.0.