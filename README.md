# Zodiac

- Learning Objectives

    +Use className attribute to set styles versus style
    +Display images in a React app
    +Use attributes in parent components to pass data down to child components as props
    +Use {} as “portals” in the render method to do JavaScript inside our HTML
    +Use .map to iterate over an array and render new elements for each item in an array
    +Add a unique key to each element rendered from a .map in React
    +Use jsx to produce & render a React component
    +Use Netlify to deploy a React app

- Description

    +The app will load a list of Zodiac signs from a static file and then use a .map to loop through them and display a React component for each element on the list.

- Acceptance Criteria

    +App should contain a <Header> and <Footer> component with their own individual style sheets imported into the JSX file
    +App should have a <Main> component which imports the list of zodiac signs
    +<Main> component should map over the list of zodiac signs and pass the data as props to a child component <ZodiacCard>
    +<ZodiacCard> should display the Zodiac sign’s image, name and dates

- Rubric
    +0.5    Main branch deployed to Netlify
    +0.5    Open PR from dev branch with Netlify deploy preview
    +3      Header and Footer components
    +4      Main component which imports list of Zodiac signs
    +4      Uses a .map to pass props to a child component
    +2      Child component displays sign’s image, name and dates
    +2      Styled using individual style sheets imported into components
    +2      At least one component uses a background image using an import
    +2      Zodiac images are loaded dynamically from the public directory

- APPROACH
  +Sketch out your project
  +Label each Component explicitly and List
  +What STATE must be tracked? What EVENTS must be tracked? What FEATURES must be tracked?
  +Which Components need access to which State? What Events are changing which State?
  +Work on one feature at a time
  +If two components need to access the same state, use a callback function
  +Props pass state down the hierarchy

- Bootstrap: Create React App <https://github.com/facebook/create-react-app>


//     +2      Child component displays sign’s image, name and dates
//     +2      Styled using individual style sheets imported into components
//     +2      At least one component uses a background image using an import
//     +2      Zodiac images are loaded dynamically from the public directory
