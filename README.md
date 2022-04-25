# React Web app to lists Rick and Morty's characters.

## Specification
### System Specification
- Node: 17.14.0
- npm: 8.3.1
- yarn: 1.22.18

### Library Version
- React: 18.0.0
- React-Router-Dom: 6.3.0

### .env Variables

`REACT_APP_RM_API` : Rick and Morty api gateway url (https://rickandmortyapi.com/graphql)

### Setup Steps

Use Node Version Manager(NVM) to use the specified (latest) node version. [Installation setup here](https://heynode.com/tutorial/install-nodejs-locally-nvm/)

`nvm install v17.14.0`

`nvm use v17.14.0`

- Install package with yarn - `yarn install`

- Copy example environment `cp .env.example .env`

### Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.

### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Structure
├────── assets : images & styles resources

├────── components : pure components

├────── containers : complex components with store access

├────── graphql : grapqhl client configurations & queries

├────── layout : layout components & template

├────── pages: app pages

├────── types : typescript type definition

## Live Preview
Heroku Deployed Live Preview: [CLICK HERE](https://rick-and-monty-hashir.herokuapp.com/): 
