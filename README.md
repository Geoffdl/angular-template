# Simple Angular Template

A quick-start Angular template with modern development tools and best practices.

## 📚 Tech Stack

### Core Framework

- **Angular 19.2.14** (LTS) - Latest long-term support version
- **TypeScript 5.6** - Latest TypeScript features
- **RxJS 7.8** - Reactive programming

### State Management

- **NgRx 19.2.1** - Redux-inspired state management
    - @ngrx/store - Core store functionality
    - @ngrx/effects - Side effects management
    - @ngrx/store-devtools - Development tools
    - @ngrx/schematics - Code generation

### Styling & UI

- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **DaisyUI 5.0.43** - Component library for Tailwind
- **PostCSS 8.5** - CSS post-processing

### Development Tools

- **Prettier 3.3.3** - Code formatting
- **prettier-plugin-tailwindcss** - Tailwind class sorting
- **ESLint 9.29** - Code linting and quality
    - **Angular ESLint 20.1.1** - Angular-specific rules
    - **NgRx ESLint Plugin 19.2.1** - NgRx best practices
    - **ESLint Prettier Integration** - Seamless formatting

### Testing

- **Jasmine & Karma** - Unit testing
- **Cypress 13.17** - End-to-end testing

### Build & Development

- **Angular CLI 19.2.14** - Command line interface
- **Node.js ≥20.11.1** - Runtime environment
- **npm** - Package manager

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (LTS recommended)
- Angular CLI 19+ (LTS)

### Installation

```bash
npm install
```

### Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run e2e tests
npm run e2e

# Lint code
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## 🛠️ Development Scripts

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm start`            | Start development server on http://localhost:4200 |
| `npm run build`        | Build the app for production                      |
| `npm test`             | Run unit tests with Karma                         |
| `npm run e2e`          | Open Cypress for e2e testing                      |
| `npm run e2e:headless` | Run Cypress tests headlessly                      |
| `npm run lint`         | Lint code with ESLint                             |
| `npm run lint:fix`     | Auto-fix linting issues                           |

## 📋 Code Quality & Standards

### ESLint Configuration

The project includes comprehensive linting with:

- **Angular Rules**: Component/directive naming, best practices
- **NgRx Rules**: State management patterns and anti-patterns
- **TypeScript Rules**: Type safety and code quality
- **Prettier Integration**: Consistent formatting

Key ESLint rules enforced:

- Angular component selectors must use kebab-case with 'app' prefix
- Angular directive selectors must use camelCase with 'app' prefix
- NgRx best practices (avoid dispatching in effects, prefer selectors, etc.)
- Unused variables must be prefixed with underscore
- Constructor injection warning (prefer inject() function)

### Prettier Configuration

- Tailwind CSS class sorting
- Consistent code formatting
- Integration with ESLint to avoid conflicts

## 🎨 Styling

### Tailwind CSS + DaisyUI

- **Utility-first** CSS framework
- **Component library** with pre-built UI components
- **Multiple themes** available (light, dark, cupcake, etc.)
- **Responsive design** utilities

### Usage

```html
<!-- DaisyUI components -->
<button class="btn btn-primary">Primary Button</button>
<div class="card bg-base-100 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">Card Title</h2>
    </div>
</div>

<!-- Tailwind utilities -->
<div class="bg-primary text-primary-content flex items-center justify-center p-4">Content</div>
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/                 # Core services (auth, error handling)
│   ├── features/             # Feature modules
│   │   ├── dashboard/        # Dashboard feature
│   │   └── profile/          # Profile feature
│   ├── shared/               # Shared components, directives, pipes
│   │   ├── directives/       # Custom directives
│   │   ├── pipes/            # Custom pipes
│   │   ├── nav/              # Navigation component
│   │   └── footer/           # Footer component
│   ├── app.config.ts         # Application configuration
│   ├── app.routes.ts         # Application routing
│   └── app.ts                # Root component
├── assets/                   # Static assets
├── environments/             # Environment configurations
└── styles.css               # Global styles
```

## 🧪 Testing

### Unit Tests (Jasmine + Karma)

```bash
npm test
```

### E2E Tests (Cypress)

```bash
# Interactive mode
npm run e2e

# Headless mode
npm run e2e:headless
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Follow the existing code style enforced by ESLint and Prettier
2. Run `npm run lint:fix` before committing
3. Ensure all tests pass with `npm test`
4. Use conventional commit messages

## 📄 License

This project is licensed under the MIT License.
