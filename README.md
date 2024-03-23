# TDesign site related code

### Dev

Initial development needs to initialize the submodule.
```bash
git submodule init 
git submodule update
```

tdesign-site: `npm run dev:site`

tdesign-site-components: `npm run dev:components`

## Publish

### publish tdesign-site-components

After modifying `components/package.json` the release version will be automatically triggered by the workflow.

feat: (new feature for the user, not a new feature for build script)
fix: (bug fix for the user, not a fix to a build script)
docs: (changes to the documentation)
style: (formatting, missing semi colons, etc; no production code change)
refactor: (refactoring production code, eg. renaming a variable)
test: (adding missing tests, refactoring tests; no production code change)
chore: (updating grunt tasks etc; no production code change)

