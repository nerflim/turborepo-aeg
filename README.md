# Prefer to Use Yarn

In this project, Yarn is the preferred package manager for installing dependencies and running scripts. Yarn is a fast and reliable package manager with features such as caching, parallel installation, and deterministic installs, which make it a great choice for managing dependencies.

# Technologies Used

1. Turborepo: A tool that allows managing multiple related git repositories.
   Assuming that the web app is a template for CMS, it will be easier to manage apps and templates within a single reportError.
2. NextJS: A popular React framework for building server-side rendered (SSR) web applications.
   Assuming that the application requires SEO integration since it was mentioned that the app content comes from CMS.
3. Tailwind CSS: A utility-first CSS framework for building responsive and customizable user interfaces.
4. Headless UI: A set of completely unstyled, fully accessible UI components for React.
5. Tests: Jest and React Testing Library were used for unit and integration testing.

# Running the App

To run the application in development mode, run the following command in the terminal:

```
yarn dev
```

This command will start the development server and the app will be available at `http://localhost:3000`.

# Building the App

To build the application for production, run the following command in the terminal:

```
yarn build
```

This command will generate an optimized build of the app in the `./out` directory. The optimized build is ready for deployment and can be run by starting a server with the following command:

```
yarn start
```
