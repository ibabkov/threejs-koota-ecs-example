# Three.js Architecture: ECS

This repository illustrates the result of the [Entity Component System (ECS)](https://en.wikipedia.org/wiki/Entity_component_system) architecture changes described in the article, implemented in a Three.js application using the [Koota](https://github.com/pmndrs/koota) library.

The project demonstrates how to decouple application state from the Three.js scene graph, favoring composition over inheritance for better maintainability and scalability.

### Article Series

- **Three.js Architecture: ECS** — [Read the article on the web]()
- **All Articles** — [Read the articles on the web]()

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm start
   ```
3. Build for production:
   ```bash
   npm run build
   ```

### Benchmarks

To run performance benchmarks:

1. Setup benchmark dependencies (Playwright):
   ```bash
   npm run benchmark:setup
   ```
2. Run the benchmark:
   ```bash
   npm run benchmark
   ```

This command will start the development server and execute the performance tests automatically.

### License

MIT
