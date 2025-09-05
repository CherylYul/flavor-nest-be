# Flavor Nest Backend (flavor-nest-be)

This is the backend for the Flavor Nest application, built with Node.js, Express, and TypeScript.

## Features
- Express server with TypeScript
- PostgreSQL integration (using `pg`)
- Environment variable support with `.env`
- Module aliasing for cleaner imports
- Rate limiting, CORS, and session management

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- PostgreSQL database

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd flavor-nest-be
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your environment variables.

### Development
Start the development server with hot-reloading:
```sh
pnpm dev
```

### Scripts
- `pnpm dev` — Start server with hot-reload (ts-node-dev)
- `pnpm typecheck` — Run TypeScript type checking
- `pnpm format` — Format code with Prettier

### Project Structure
```
src/
  configs/      # Configuration files (CORS, DB, env, etc.)
  index.ts      # Main entry point
```

### Environment Variables
Set your environment variables in the `.env` file. Example:
```
BE_PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/dbname
```

### Database
- Uses PostgreSQL via the `pg` package.
- Configure your connection string in `.env` as `DATABASE_URL`.

### Module Aliases
- Aliases like `@configs`, `@controllers`, etc. are set up for cleaner imports.
- See `tsconfig.json` and `package.json` for alias configuration.

### Formatting
- Run `pnpm format` to auto-format code using Prettier.

## License
ISC
