## About this project

This project was only created as a demo of SWAPI use, 


# Features Implemented

•	Display a list of Star Wars films in the start-up page

•	Clicking on the hyperlink of any film would display details for the film: metadata, characters, vehicles, planets, etc.

(*) Due to the time-limit, the film details page only displays a list of Star Wars API URL for characters, vehicles and plannets

# Future Enhancements
•	Implement one or more detail pages for characters, vehicles, planets, etc. The detail pages should be accessible from the film detail page

•	Implement client side search filter on the films list page to filter displayed films by title, or description

•	Improve the browsing user experiences and project structure by using REACT Routing feature

•	In order to reduce the times to directly retriving data from the Star Wars API, we can load certain data such as the names of characters, planets, vehicles, etc in advance (e.g. when the landing page is being loaded) and asynchronously. The retrieved data can be stored in the browser's local storage

•	Applying appropriate styles have been applied to ensure the application is cross-platform

# ReactJS Star Wars API

This is a ReactJS web App that provides REST info about Star Wars characters and planets.

This source use Webpack and requires **NodeJS** v8.13.0 and **NPM** to run.

To start develoment, after clone this repository run in the saved directory.

```
npm install
```

To start develoment watcher (included local server)

```
npm run start
```


## Screenshots

### Mobile 
![mobile view](./docs/mobile.png "Mobile view")

### Desktop 
![desktop view](./docs/desktop.png "Desktop view")


## References

Data Source : https://swapi.dev/ 

Image Source : https://starwars-visualguide.com/

React Hooks : https://reactjs.org/docs/hooks-intro.html


> Star Wars and all associated names and/or images are copyright Lucasfilm Ltd.
