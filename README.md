# Tech-Summit-Blog-Post

# Description

My task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I have to build this site completely from scratch and deploy it to Heroku. My app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contributors](#contributors)
* [Report Bugs](#bugreport)

## Installation
Clone the repository in your terminal machine or git bash
Clone Via SSH: $ git clone git@github.com:miklos-petronia/Tech-Summit-Blog-Post.git

Input your MySQL username and password in the server.js file.
cd/ into the cloned directory and install dependencies. 
Install dependencies and activate schema.sql. Then run npm run seed and then npm run start

## Usage

 1. install dependencies
 2. Make sure to run .sql file in mySQL workbench before running server.js so that tables are able to render correctly
 3. npm run seed
 4. npm run start


### Application Screenshot:
![image](https://user-images.githubusercontent.com/113649566/220916515-5ca45114-a0f9-470a-92c5-4e6aa5e310be.png)
![image](https://user-images.githubusercontent.com/113649566/220916745-886537a8-1603-4389-acec-7cbb7e96b662.png)
![image](https://user-images.githubusercontent.com/113649566/220917083-1084e0c1-f597-44c1-bbe7-946994f0d618.png)


## License 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 

[Read more about MIT License here.](https://opensource.org/licenses/MIT)

## Credits
Columbia classes videos, documentations & some videos online

## Contributors
N/A

## BugReport

- [Github](https://github.com/miklos-petronia)
- [email](mailto:miklos.petronia@hotmail.com)

