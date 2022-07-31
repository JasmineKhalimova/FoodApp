## Useful courses

- https://www.w3schools.com/REACT/default.asp

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Technical Terms

- JSX sand for JavaScript XML allows us to write HTML in React and makes it easier to write and add HTML in React. 

- toISOString() outputs date in a string format

- New react project do not require you to import react from 'react';

- old way returning JSX  
    
![old way using JSX](https://user-images.githubusercontent.com/34685374/180603050-f2df27d9-f916-4c4a-a957-df5231e508e2.png)

- State update exiting state 
    - useState: The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application. useState accepts an initial state and returns two values:
    The current state.
    A function that updates the state.

- react only runs entire function and data only once you need to use State functions to tell it to change a state of function. 

- React scheduals state updates it doesn't preform it instantly.

- Parent to child compopnent, child to child components not possible.

- Controlled Components are those in which form's data is handled by the component's state. It takes its current value through props and makes changes through callbacks like onClick,onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

- An uncontrolled component is a component that renders form elements, where the form element's data is handled by the DOM (default DOM behavior)

- Stateless and stateful architecture defines the user experience in specific ways.
    - Stateful services keep track of sessions or transactions and react differently to the same inputs based on that history. e.g. compoenet with functionality
    - Stateless services rely on clients to maintain sessions and center around operations that manipulate resources, rather than the state. e.g. component without functionality.
