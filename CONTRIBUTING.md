# Contributing
___

It's awesome that you want to contribute to Autodot! Whether you're a first time contributor, or someone more experienced, you should read this document thoroughly before submitting a pull request. Make sure every contribution adheres to the [guidelines](#guidelines). There's also a [TODO.md](https://github.com/ajmalsiddiqui/autodot/blob/master/TODO.md) file in this repo in case you're looking for inspiration.

### Contents
1. [How Can You Contribute?](#how-can-you-contribute?)
2. [Guidelines](#guidelines)
3. [Submitting A Bug Report](#submitting-a-bug-report)
4. [Contributing Code](#contributing-code)

### How Can You Contribute?
Writing code isn't the only way to contribute to this project. You can also contribute to it by:
* Submitting bug reports using the GitHub Issue Tracker. Read the section on [submitting a bug report](#submitting-a-bug-report) for more details about this.
* Proposing a new feature: this should be done via opening an issue in the GitHub Issue Tracker.
* Contributing to the documentation of the project: If you feel that some aspect of the project could have better documentation, feel free to open an issue regarding the same and generate a PR if you can. Even if you don't want to work on the documentation, opening an issue to tell us about it gives other people a chance to work on the same.
* Contributing code: this can be a new feature or fixes for existing bugs. See the section on [contributing code](#contributing-code) for more details.

### Guidelines
 * A generic code of conduct applies to everyone interacting with this project and is binding upon everyone.
 * Easy issues can be marked with tags like _help wanted_ or _good first issue_ in the spirit of encouraging new open source contributors. These are generally reserved for first timers.
 * For features that have been approved or bugfixes, it is better to open a Work in Progress (WIP) PR early on so that we can track your progress and guide it. This will help avoid frustration later on.
 * If you want to work on an issue, drop a comment to let us know that you're taking it up. This prevents duplication.
 * No PRs will be merged unless the CI is green (unless there is a very strong reason to do so).
 * Before reporting bugs or contributing code, read the relevant guidelines for [submitting a bug report](#submitting-a-bug-report) or [contributing code](#contributing-code).

### Submitting A Bug Report
When submitting a bug report via the issue tracker, make sure your report adheres to the following guidelines:
* The report has basic details like the versions of the OS, npm (or npx, if you're using that) and of autodot.
* The report should detail the bug along with the expected behaviour.
* The report should, to whatever extent possible, give clear, concise steps to reproduce the bug.
* If you have any ideas for why the bug might be occurring, or solutions that you have tried, the report or further comments can include the same.

### Contributing Code:
When contributing code, ensure you adhere to the following guidelines:
* Your PR will not be merged unless the CI is green (unless there is a very strong reason to do so). If your PR causes the CI to go red, don't worry about it. Instead, add further commits to fix it or ask the maintainers for help.
* Make sure your code adheres to the styleguide of the project. Run `npm run lint` before you push any code.
* Breaking changes should be clearly stated in the PR.
* If your code introduces new functionality, make sure you write tests for the same.