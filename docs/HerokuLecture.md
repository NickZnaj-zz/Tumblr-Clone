###React Router upgrades:

+ Route components

+ Deep components



### Heroku

[a/A readings] (https://github.com/appacademy/capstone-project-curriculum/blob/master/readings/heroku-deployment.md)

What do we normally do before we can run our app in development?
1.
2.
3.

## Summary
1. Install Heroku toolbelt
2. `heroku login`
3. `git remote add heroku heroku-git-url-here`
4. `gem 'rails_12factor'`
5. `heroku buildpacks:set heroku/ruby`
  `heroku buildpacks:add --index 1 heroku/nodejs`

  ```js
  // package.json
  "engines": {
   // Your versions of node and npm should go here
   // Check this by running the `node -v` and `npm -v` commands in the root of your project
   "node": "4.1.1",
   "npm": "2.1.x"
  },

  "scripts": {
   "postinstall": "./node_modules/.bin/webpack"
  },
  ```

6. `git push heroku master`
  - `heroku run bundle exec rake db:migrate`
