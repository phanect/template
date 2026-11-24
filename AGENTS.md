# AGENTS.md

This file provides guidance for AI agents (Claude, Vibe Code, etc.) working in this repository.

## Repository Overview

A **TypeScript/JavaScript template repository** for modern web applications and libraries.

- **Version Manager**: mise (required)
- **Language**: TypeScript (ESM modules)
- **Runtime**: Node.js v22.16.0+, v24.0.0, or v26.0.0+
- **Package Manager**: pnpm
- **Container Runtime**: Podman (preferred) or Docker

## Development Environment

### Prerequisites

Ensure these are installed before development:
- [mise](https://mise.jdx.dev) - for Node.js/pnpm version management
- [Podman](https://podman.io) or Docker - container runtime
- Git

### Setup

```bash
# Clone and enter repository
cd /path/to/repository

# Copy example environment file
cp .env.example .env

# Install dependencies via mise
mise install

# Start development server
mise dev
```

The application serves at http://localhost:3000.
RustFS dashboard (if used) is at http://localhost:9001.

## Common Commands

| Command | Description |
|---------|-------------|
| `mise install` | Install dependencies |
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run test` | Run tests |
| `pnpm run lint` | Run all linters (ESLint, TypeScript, stylelint) |
| `pnpm run fix` | Auto-fix lint issues |
| `pnpm run clean` | Clean build artifacts and containers |
| `pnpm run refresh` | Full refresh: clean, upgrade dependencies, reinstall |

## Code Quality

### Linting

This repository uses multiple linters:
- **ESLint** - JavaScript/TypeScript linting
- **TypeScript** - Type checking (`tsc --noEmit`)
- **stylelint** - CSS/SCSS linting

Run all linters:
```bash
pnpm run lint
```

Auto-fix issues:
```bash
pnpm run fix
```

## Git Conventions

### Branches
- `main` - Default branch (protected)

### Commits
- Use conventional commits (feat:, fix:, docs:, refactor:, etc.)
- Keep commits focused and atomic

### Pull Requests
- Reference closing issues with `Closes #123`

## Agent-Specific Guidelines

1. **Use pnpm for all package operations** - Never use npm or yarn directly

2. **Respect mise configuration** - Use `mise` commands for Node.js/pnpm management

3. **Run lint before committing** - Ensure `pnpm run lint` passes

## Verification

- Run tests with: `pnpm run test`
- Run lint with: `pnpm run lint`

## Container Management

This project uses Podman/Docker:

```bash
# Start Podman daemon before development
podman machine start

# Start Podman containers
podman compose up

# Clean containers (via mise)
mise run clean:containers
```

## Best Practices

1. **Small, focused changes** - Make minimal, correct changes
2. **Follow existing patterns** - Match repository style and architecture
3. **Type safety** - Add proper TypeScript types
4. **Test coverage** - Add tests for new functionality
5. **Documentation** - Update docs when adding features
6. **No comments** - Avoid code comments (per repo convention)
7. **No new dependencies** - Don't add dependencies unless necessary
8. **Verify changes** - Run relevant tests and lint before delivery

## Troubleshooting

### Common Issues

**"pnpm not found"** - Run `mise install` to ensure pnpm is installed via mise.

**"Node.js version mismatch"** - Check `engines.node` in package.json and use mise to install correct version.

**"Podman daemon not running"** - Start with `podman machine start`.

**"Lint errors"** - Run `pnpm run fix` to auto-fix, or manually fix remaining issues.

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [mise Documentation](https://mise.jdx.dev/)
- [pnpm Documentation](https://pnpm.io/)
- [Podman Documentation](https://docs.podman.io/)
