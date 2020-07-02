# Nutshell: The Information Dashboard

## Setup: Follow these steps exactly


>Authors: Sisi Freeley, David Larsen, Brett Stout, Tasha Lane


>Nutshell Cohort 41
Group project at Nashville Software School. As a team we received tickets to create a single-page application using vanilla Javascript which allows the user to store friends,messages, tasks, events, and articles to a database which is dynamically displayed on the DOM. Users can also chat with each other via a message/chat box and add each other as friends and save to a friends list. 




>Team Asking For Roses
Sisi Freeley, David Larsen, Brett Stout, Tasha Lane

>Installation
Steps to get started:

1.git clone git@github.com:nss-day-cohort-41/nutshell-asking-for-roses.git
2.cd into the directory it creates.
3.mkdir api
4.touch api/database.json
5.json-server-p 8088 w- database.json
6.Open localhost:8088 in browser.
7.Open new terminal window.
8.cd in directory created.
9.serve
10.Open localhost:5000 in browser.
11.Overview
This app is an easy to use social media application allowing our user to create messages,add tasks,schedule events and keep up with current articles,  When the user accesses the site they will begin at "Asking for Roses" registration page. Then they will login with secure email default user name and their own unique password. Users then can get send and receive messages. Chat with friends in a popup box. Create tasks to be complete and reminders. The application displays current interest articles downloaded from customized url. The friends list saves and retrieves friends. The friends list will also allow you to delete and edit. Once on the page you are able to keep up with no only friends but keep a list of scheduled events. The user is given options, and can select an "edit" button. If a edit button is chosen, the user is able to update and save.

Technologies Used
This project utilizes the following:

HTML
CSS
JavaScript
APIS and Databases Utilized
This project was made possible from data made available by:

Articles
News
Friends
Messages
Events
External Libraries

Skills Utilized
We utilized all skills and concepts learned up to this point in our time here at NSS, including:

Google Docs/Slides Processing Book
Sketchboard
Modular Code
Semantic HTML
JavaScript: functions, objects, arrays
Persistent data storage with JSON Server
DBDatabase Diagram
Scrum workflow
CSS Styling
API calls with: POST, GET, FETCH
CRUD
Awesome Teamwork

















































# Nutshell: The Information Dashboard

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. Make a `database.json` file in the `api` directory
1. Delete the `.ignore` file in the `api` directory

> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

## Instructions

Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Databases
1. Github
1. Objects
1. CSS/Flexbox
1. Array methods
1. Components
1. Handling user events
1. Implementing CRUD operations
1. Relational data
1. ERDs

To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "username": "Steve", "email": "me@me.com", "password": "xxxxxxxxxxxxxxxxxxxxx" }
```

### Messages

```json
{ "id": 1, "userId": 1, "message": "What's up?" }
```

### News

```json
{
    "id": 1,
    "userId": 2,
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes"
}
```

### Friends

```json
{ "id": 1, "userId": 1, "following": 3 }
```

### Tasks

```json
{ "id": 1, "userId": 3, "task": "Take out garbage", "complete": false }
```

## Professional Requirements

1. Each module should have a comment at the top with the following info: author(s) and purpose of module
1. The README for your project should include instructions on how another person can download and run the application

## How to Handle Authentication

Be very clear that what you will be implemeting is not real authentication. It is a simulation of it using very simplistic tools.

You will be using session storage to keep track of which user has logged into Nutshell. When the user fills out the registration form, you will POST their email, username and password to the `users` collection in your API. You will then immediately take the `id` of the object in the response and save it to [session storage](https://javascript.info/localstorage#sessionstorage).

```js
sessionStorage.setItem("activeUser", user.id)
```

If you want to add a Logout feature, all you need to do it remove the session storage item.

```js
sessionStorage.removeItem("activeUser")
```
