# Contributing to Foundation X

<table style="border:none">
  <tbody>
  <tr>
    <td style="border:none;min-width:205px;text-align:center">
      <img src="assets/steampunk.png" alt="Foundation-X Rulebook" style="min-width:200px;min-height:200px" width="200" height="200">
    </td>
    <td style="border:none">
      <h3>Project Standards</h3>
      <p>
        At its core development is a creative process, but as a team sport adhering to some battle tested
        patterns and practices helps us to achieve a consistent level of quality and increases our
        likelihood of overall success.
      </p>
    </td>
  </tr>
  </tbody>
</table>

## Workstation Setup

As long as you have [git](https://git-scm.com/) installed this project does not require a crazy amount of setup.

- Node.js (LTS) - Long Term Support version promises the best stability
  - **NOTE:** I highly recommend [Volta](https://volta.sh) to manage Node.js versions on your local machine. It works the same on Windows, Linux, and MacOS.
- IDE - [Visual Studio Code](https://code.visualstudio.com/) or [Jetbrains Webstorm](https://www.jetbrains.com/webstorm/) are popular choices

## Project Structure

**TBD**

## Development Workflow

- Create a local working branch, we suggest using the naming pattern **task/ticket#\_kebab-case-short-description**

  ```shell
  # make sure you have the latest development branch
  git checkout integration
  git pull

  # cut your working branch
  git checkout -B feat/987432_add-ghost-buttons
  ```

- keep on hustlin' boyo

## Submitting a Pull Request

Please follow the following guidelines:

- Make sure unit tests pass (`npm run test`)
- Keep things tidy (`npm run format`)
- Update your commit message to follow the guidelines below (use `npm run commit` to automate compliance)
  - `npm run check:commit` will check to make sure your commit messages are formatted correctly
- [Rebase your branch](https://www.youtube.com/watch?v=f1wnYdLEpgI) on the current development work to ensure cleaner PR merges

  ```shell
  # after creating your commit, get the latest version of the development branch
  git checkout integration
  git pull

  # switch back to your working branch and push your commits to the top of the tree
  git checkout feat/987432_add-ghost-buttons
  git rebase integration
  ```

  **NOTE:** Only use rebase on working branches, never core branches like **main**, or **integration**.

### Commit Message Guidelines

The commit message should follow the following format:

```plain
type(scope): subject
< BLANK LINE >
body
< BLANK LINE >
issue ticket number(s)
```

#### Type

The type must be one of the following:

- **feat** - New or improved behavior being introduced (e.g. adding new Button behaviors)
- **fix** - Fixes the current unexpected behavior to match expected behavior
- **docs** - Changes to the documentation (e.g. Adding more details into the getting started guide)
- **style** - Changes that do not affect the meaning of the code
- **refactor** - Change that neither adds a feature or fixes a bug
- **perf** - Improving performance
- **test** - Adding new or enhancing existing tests
- **build** - Changes affecting the build system
- **ci** - Changes to CI configuration files and/or scripts
- **chore** - Changes that have absolutely no effect on users (e.g. Updating a package versions)
- **revert** - Revert previous commit

#### Scope (optional)

The scope can be one or more of the following:

- **components** - adding or enhancing components
- **storybook** - add or update Storybook documentation
- **style** - global or component specific styling
- **repo** - work on the repository, branching, etc.
- **misc** - anything that didn't fall under the previous scopes (e.g. add a new utility function)
- **"custom"** - enter a free-form, meaningful, string
  - **NOTE**: please limit this use of this feature, you can always ask your Tech Lead to add a new scope

#### Subject and Body

The subject must contain a description of the change, and the body of the message contains any additional details to provide more context about the change.

Including the ticket number that the PR relates to as an ISSUE also helps with tracking.

### Example

```plain
feat(components): add ghost buttons

added ghost variants for the primary, secondary, success, danger, and warning buttons to ButtonStyles.ts

TICKET 987432
```

### Commitizen

To simplify and automate the process of committing with this format, **Foundation X is a [Commitizen](https://github.com/commitizen/cz-cli) friendly repository**, 
just do `git add` and execute `npm run commit`. Leveraging these standards turns our git logs into a richer source of historical project events and
makes them easier to search.

## Creating a Release

1. Combine changesets into changelog entries and update to the most appropriate semver
   ```shell
   # ensure you have the latest changes
   git checkout integration
   git pull
   
   # create changelog and/or bump version
   npx changeset version
   ```
2. Verify any semver changes in **package.json** and verify/edit the **CHANGELOG.md** file.
3. Create a release branch to minimize development downtime (ie. "dev freeze")
   ```shell
   # keeping track of the "when" this deployment happened
   git checkout -B sprint-22
   ```
4. Seriously #2 - this is your last chance before **they become law**.
5. Now we can ... wait, did you complete **Step 2**?
6. Send it to the cloud `git push origin sprint-22`
7. Magic `npx changeset publish` **NOTE:** This step to be automated when merging `sprint-##` to `main`.


## Thank You for Your Time

<table style="border:none">
  <tbody>
  <tr>
    <td style="border:none;min-width:205px;text-align:center">
      <img src="assets/science.png" alt="Scientist with gadget" style="min-width:200px;min-height:200px" width="200" height="200">
    </td>
    <td style="border:none">
      <h3>The Future is in Your Hands</h3>
    </td>
  </tr>
  </tbody>
</table>
