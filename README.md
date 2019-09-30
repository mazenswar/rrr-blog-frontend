# Part 2: Setting up the React project

In this part, I will be setting up a React project from scratch using `npx create-react-app` and will use React hooks and Redux for state managment.

What we will use for this part:

1. react
2. redux
3. react-redux
4. redux-thunk
5. react-router-dom

Workflow:

1. Creating the React project and installing packages/libraries we need for the app.
2. Creating blank components we will use for this app.
3. Setting up react-router to navigate between pages.
4. Setting up redux.
5. Adding code to our components
6. Testing our app.

## Creating the React project and installing packages/libraries we need for the app

run `npx create-react-app rr-auth-frontend`

run `cd rr-auth-frontend` to navigate to the project folder

run `npm install` to install all the packages and dependencies for the React project

To install the rest of the packages/libraries mentioned above we will run `npm install redux react-redux redux-thunk react-router-dom`

## Creating blank components we will use for this app.

In this app, we are only concerened with loggin in the user and persisting their session. So we will create three components(pages): `<Login />` `<Signup />` `<Home />`

in our `src` folder lets create a folder called "Pages" and create FOUR files in it:

1. `Login.js`
2. `Signup.js`
3. `Home.js`
4. `index.js`

If you use react-snippets (https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) you can type `rafc` and generate an empty component in each of the files we created except `index.js`

We will use `index.js` as our focal point for components so we will import all our components there and `export default` a single object with values that point to those components.

Your `index.js` file should look like this:

https://gist.github.com/mazenswar/ae4a26c23bf30a6b8eb0ef7ebc29815c

## Setting up react-router

1. To start, in `/src` I will create a file name `Routes.js` which will handle all our routing. In the file, I will use the `rafc` shorthand to get an empty template of a React functional component.
2. We need to import a couple of components from `react-router-dom` at the top of our file under the react import statment. So we will add the following line: `import {Switch, Route} from 'react-router-dom`
3. Next, we will import our components which we can do in a single line. Since we used an `index.js` in our "Pages" folder we can import the object that was exported as default from the that file with the following code `import Pages from './Pages'`

- Note: since the object was exported using `export default`, we can name it anything while importing it.

4. Next, we will add the `<Switch></Switch>` component which will wrap our routes.
   NOTE: The `<Switch>` is not required for grouping `<Route>`s, but it can be quite useful. A `<Switch>` will iterate over all of its children `<Route>` elements and only render the first one that matches the current location. (https://reacttraining.com/react-router/web/guides/basic-components)
5. After that we will add three `<Route />` components that point to our pages giving them two props `path` and `component`.
6. Your `Routes.js` should look like this:

https://gist.github.com/mazenswar/c4e3cf9d92a91a8ef2f6c0342a4fadd5

7. We will create a `Nav` component that will serve as our navbar and that will help us navigate between pages without having to type out the url. Let's make a new folder `Components` and add a `Nav.js` file to it. We can use `rafc` shortcut for now to get an empty skeleton of the component.

8. Open `src/App.js` and let's first import our `<Routes />` and `<Nav />` components by adding `import Routes from './Routes` and `import Nav from './Components/Nav'`.
9. Next, we will delete the boilerplate code and replace it with the `<Routes />` and `<Nav />` components.
10. Finally, we will import `BrowserRouter as Router` from `react-router-dom` and wrap our exisitng components with it. Your `App.js` should look like this:

https://gist.github.com/mazenswar/916b895d25dbdb24b7e1a3f4ba75c972

## Setting up Redux

Let's start by creating a redux folder `src/redux`. Within the folder lets create two new files `src/redux/actions.js` and `src/redux/rootReducer.js`

### Reducer

in `rootReducer.js` let's add our code for the reducer

https://gist.github.com/mazenswar/ef812768fbe10d67d62dcd80dbebb653

Navigate to `src/index.js` and in that file:

1. We need to import a couple of things before we start coding lets start by adding the following lines to the top of the file under the React imports:
   `import thunk from 'redux-thunk' import { Provider } from 'react-redux' import { createStore, applyMiddleware} from 'redux' import rootReducer from './redux/rootReducer.js'`
2. We need to initialize our store using the two functions we imported from `redux`. We will add the following:
   `const store = createStore(rootReducer, applyMiddleware(thunk))`
   for more information about what the thunk middleware does, check out this link(https://github.com/reduxjs/redux-thunk)
3. To make the store accessible across our app, we will wrap our `<App />` compoenent with `<Provider />` which we imported from `react-redux`. We will then give `<Provider />` a `store` props that points to our `store` variable.

https://gist.github.com/mazenswar/06756eb41d14a60a26b078bd98b29ee0

### Actions

1. In `actions.js`, let's define our functions that will handle sending requests to the API and dispatching actions to our redux store.
2. We will define five functions:
   1. newUserToDB() => `POST to http://localhost:3000/users`
   2. deleteUserFromDB() => `DELETE to http://localhost:3000/users/:id`
   3. loginUserToDB() => `POST to http://localhost:3000/login`
   4. persistUser() => `GET to http://localhost:3000/auth`
   5. logoutUser() => `We will clear our token from the browser and reset the user object in our redux store`

Your `actions.js` should look like this:

https://gist.github.com/mazenswar/c2bb55b7627e44084fb8befabde4b281

## Adding code to our components

### `src/Pages/Login.js`

https://gist.github.com/mazenswar/1cad37316e5d5ba0694ec1a70f79c678

### `src/Pages/Signup.js`

https://gist.github.com/mazenswar/2698e3c0b5d683f6eab996d951887dc2

### `src/Pages/Home.js`

https://gist.github.com/mazenswar/7f4bf40540b9d7641d7a124306a17909

### `src/Components/Nav.js`

https://gist.github.com/mazenswar/b50cb9422de19f28e2d6832aab2536f1
