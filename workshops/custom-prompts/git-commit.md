# Git Commit Guide

## Commit Types

**feat**: Add a new feature
```
feat: add dark mode toggle
```

**fix**: Fix a bug
```
fix: resolve filter not updating issue
```

**docs**: Documentation changes only
```
docs: update API usage guide
```

**style**: Code style changes (whitespace, formatting; no logic changes)
```
style: fix indentation in component
```

**refactor**: Refactor code without adding features or fixing bugs
```
refactor: optimize database query
```

**perf**: Improve performance
```
perf: reduce API response time
```

**test**: Add or correct tests
```
test: add unit tests for enrollment
```

**build**: Changes that affect build system or dependencies
```
build: update vite to v7.1.7
```

**ci**: Changes to CI configuration or scripts
```
ci: update GitHub Actions workflow
```

**chore**: Routine tasks (config updates, cleanup)
```
chore: update ESLint rules
```

**revert**: Revert a previous commit
```
revert: revert "feat: add dark mode"
```

## Best Practices

- Use imperative mood: "add feature" not "added feature"
- Keep first line short (50-72 characters)
- Add details in body if needed
- No period at the end of subject line

## Agent Prompt Template

```
Review my changes and create a commit. Don't push.

Steps:
1. Run git diff --staged to see changes
2. Create appropriate commit message based on changes
3. Commit with proper type (feat/fix/etc)
```

## Manual Workflow

```bash
git add .
git diff --staged
git commit -m "feat: add todo completion checkbox"
```
