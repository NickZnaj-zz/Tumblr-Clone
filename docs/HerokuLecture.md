###React Router upgrades:
[upgrade guides]
(https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#programmatic-navigation)



### Heroku

[a/A readings] (https://github.com/appacademy/capstone-project-curriculum/blob/master/readings/heroku-deployment.md)


What do we normally do before we can run our app in development?

1. bundle install
2. npm install
3. webpack
4. rake db:migrate, rake db:seed









## Summary
1. Install Heroku toolbelt
2. `heroku login`
3. `git remote add heroku heroku-git-url-here`
4. `gem 'rails_12factor'` (in group :production)
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
