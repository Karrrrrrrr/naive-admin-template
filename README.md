# Naive Admin Template

> A dashboard scaffolding based on Vue.js 3.x & TypeScript created by Vite.

## Todo

- [ ] SWR composable
- [ ] Global store
- [ ] CRUD demos
- [ ] Data virtualization
- [ ] More demos

## Features

- Modern Vue.js Ecosystem
  - vue 3.x
  - pinia 4.x
  - vue-router 4.x
- Fully strongly typed
  - typescript 4.x
- Next generation frontend tooling
  - vite 4.x
- HTTP request based on Fetch API
  - ky 0.x (not axios)
- Customizable UI Library
  - naive-ui 2.x
- Complete engineering workflow
  - eslint 7.x
  - lint-staged 11.x
  - commitlint 13.x
- Locally mocked API server
  - express 4.x
- Authorization
  - Access token
  - Refresh token
  - Auth refresh token
  - Role based authorization
- Modern application deployment
  - GitHub Actions
  - Vercel (with Serverless functions)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (>= 12.10, 14.17 preferred)
- [npm](https://www.npmjs.com) (>= 6.x) or [yarn](https://yarnpkg.com) (>= 1.22)
- [Git](https://git-scm.com) (>= 2.20)

### Scaffolding tools

Create an application by [zce/caz](https://github.com/zce/caz)

```shell
# create apps through this
$ npx caz vue#next my-app
# enter generated directory
$ cd my-app
```

### Clone & Install

```shell
# clone repo
$ git clone https://github.com/Karrrrrrrr/naive-admin-template.git
$ cd naive-admin-template

# install dependencies
$ npm install # or yarn
```

### Available Scripts

```shell
# dev with hot reload at http://localhost:3000
$ pnpm run dev # or yarn dev

# build for production with minification
$ pnpm run build # or yarn build
```

### Mock API Server

The built-in mock server starts as a vite plugin. that means you don't need to start it alone.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [zce](https://zce.me)

