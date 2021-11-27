# Film festival survey

This is a demo project and playground. Nothing to be taken seriously.

---

## Technologies

- Node 16, NPM 8
- React 17, Webpack 4, TypeScript 4 (bootstraped with Create React App)
- styled-components for styling
- Jest for testing
- Storybook for UI development

## Getting started

1. `npm install` (or `npm ci` if you want to install dependencies from `package-lock.json`)
2. `npm prepare`
3. `npm start`

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run storybook`

Launches Storybook for UI development.

### `npm run build-storybook`

Builds Storybook documention for developed UI.

### `npm run lint`

Lints code for style errors.

### `npm run prepare`

Installs and sets up [Husky](https://github.com/typicode/husky).

The project currently uses a pre-commit hook to lint staged changes and throw an error if it's not up to configured standards.
