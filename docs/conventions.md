# Codebase Conventions

This document defines the official rules for the Goyta Bus codebase.
All contributors must follow these conventions.

---

## General Rules

- Monorepo structure
- No code in repository root
- One application per folder inside `apps/`
- No direct commits to `main`

---

## Backend (PHP)

### Structure

- `public/` → HTTP entry point
- `src/` → Application code only

### Layers

- Controllers: HTTP handling only
- Services: business rules
- Repositories: data access
- No business logic in controllers

### Rules

- PSR-4 namespaces
- Strict types enabled
- No global state
- No direct database access outside repositories

---

## Frontend (React + TypeScript)

### Structure

- `app/` → application bootstrap
- `pages/` → route-level components
- `components/` → reusable UI
- `services/` → API communication
- `styles/` → global styles only

### Styling

- Global styles only in `styles/global.css`
- Component styles use CSS Modules
- No inline styles unless justified

---

## Git

### Branches

- `main` → production
- `feature/*` → new features
- `fix/*` → bug fixes

### Commits

- Conventional Commits required
- Examples:
  - `feat: add login page`
  - `fix: correct api error handling`
  - `chore: update configs`

---

## Code Review

- At least one approval required
- Lint must pass
- Build must pass
