

Mapty App Project

LIVE LINK - https://pranaydwivedi444.github.io/GeoWorkout-app/
## Table of Contents

- [Title And Descriptio](#MAPTY)
- [Features](#features)
- [Installation](#Run Locally)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Acknowledgements](#Acknowledgements)


![image](https://user-images.githubusercontent.com/48515987/221229823-18aa21dd-2968-4122-820f-ff83661fc08f.png)

# MAPTY

Mapty is a web application that allows users to track their workouts on a map. The application uses the Google Maps API to display a map that the user can interact with to create, edit, and delete workouts. Each workout is stored locally on the user's device, allowing them to track their progress over time. Mapty was created by Jonas Schmedtmann as a project for his Udemy course, "The Complete JavaScript Course 2021: From Zero to Expert!".

## Features
Mapty has the following features:

- Map display: The application displays a Google Map that the user can interact with to create, edit, and delete workouts. The user can zoom in and out, and click and drag to move the map.

- Workout tracking: The user can create four types of workouts: running, cycling, swimming, and walking. For each workout, the user can specify the distance, duration, and location on the map.

- Workout editing: The user can edit or delete any workout by clicking on it on the map or in the sidebar. The user can also click and drag a workout to a new location on the map.

- Local storage: All workouts are stored locally on the user's device using the Web Storage API. This means that the user's workouts are persistent and will be retained even if they close the application or shut down their device.

- Geolocation: The user can click a button to automatically detect their current location and center the map on that location. This feature uses the Geolocation API provided by the browser.
- Workout recording: users can record workouts by selecting the workout type, adding a description, and placing a marker on the map. The application provides information about the workout, including the distance, duration, pace, and calories burned.
- Workout history: users can view their workout history, including the date, type, distance, duration, pace, and calories burned for each workout. They can also edit or delete their recorded workouts.
- Map display: the application displays a map using the Leaflet.js library, with markers indicating the user's current location and recorded workouts.


## Tech Stack

**Client:** 
HTML5
CSS3
JavaScript
Google Maps API
Web Storage API
Geolocation API




## Run Locally
- Prerequisites
To run Forkify locally, you'll need to have Node.js and NPM (Node Package Manager) installed on your computer. You can download the latest version of Node.js from the official website: https://nodejs.org/en/download/.
Clone the project

```bash
 git clone https://github.com/pranaydwivedi444/GeoWorkout-app
cd GeoWorkout
open index.html


```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Usage
To use the application, simply open the index.html file in a web browser. The application will load the Google Map and display any workouts that have been saved on the user's device. To create a new workout, click the "+" button in the sidebar and choose a workout type. Then, enter the workout details and click "Save". To edit or delete an existing workout, click on it on the map or in the sidebar and select the appropriate option. To detect your current location, click the "Locate Me" button in the sidebar.


## Acknowledgements

- Mapty was created by Jonas Schmedtmann as a project for his Udemy course, "The Complete JavaScript Course 2021: From Zero to Expert!". The code for Mapty is available on GitHub at https://github.com/jonasschmedtmann/complete-javascript-course/tree/master/12-Mapty/starter.

