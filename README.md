# Zodiac

## Objectives
    + Use className attribute to set styles versus style
    + Display images in a React app
    + Use attributes in parent components to pass data down to child components as props
    + Use {} as “portals” in the render method to do JavaScript inside our HTML
    + Use .map to iterate over an array and render new elements for each item in an array
    + Add a unique key to each element rendered from a .map in React
    + Use jsx to produce & render a React component
    + Use Netlify to deploy a React app

## Description
The app loads a list of Zodiac signs from a static file and uses .map to loop through the signs and display a component for each element in the list.

## Acceptance Criteria
    + App contains a <Header> and <Footer> component with their own individual style sheets imported into the JSX file
    + App has a <Main> component which imports the list of zodiac signs
    + <Main> component maps over the list of zodiac signs and passes the data as props to child component <ZodiacCard>
    + <ZodiacCard> displays the Zodiac sign’s image, name and dates

## APPROACH
  + Sketch out the project.
  + Label components explicitly and list them.
  + Identify the state, events & features to track.
  + What components will need access to state? Which events will change the state?
  + Work on one feature at a time
  + If two components need to access the same state, use a callback function
  + Props pass state down the hierarchy

- This project was bootstrapped with [Create React App](<https://github.com/facebook/create-react-app>)
