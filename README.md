![https://i.imgur.com/fjlYsDH.jpg](https://i.imgur.com/fjlYsDH.jpg)

# Ruby on Rails API with Vue.js

#### Used in this build

  Gem `pg 1.2.3`
- Gem `bcrypt 3.1.7`
- Gem `rack-cors`
- Gem [`jwt-sessions`](https://github.com/tuwukee/jwt_sessions)



### What are we building exactly?

This app at its core is simple. It will be an archive of vinyl records for sale and categorized by artist. We won't be implementing a ton of foreign logic but rather just getting the foundations of an API-based application in order. We'll touch on authentication (not using Devise &#x1f609;) and basic CRUD.

There will be two apps.

- A Ruby on Rails backend - This will handle our data, sessions, and authentication.
- A Vue.js frontend - This will be the view layer but also the one responsible for sending and receiving data to our rails-based backend. The front-end will run on a different instance using the [Vue-CLI](https://cli.vuejs.org/) to help us set up an app.



