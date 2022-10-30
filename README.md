# GO BIRD GO
-----------------
Go Bird Go is a browser game inspired by the game flappy bird. It utilizes different mechanics to it to give it a unique feel. The objective of the game is to gather all the coins (of a given course/map) while simultaneously avoiding being hit by projectiles that are being launched.
Course completed successfully if player completes course with maximum coins collected while avoiding enough obstacles to maintain enough **lives**. Attempt is considered failed if the player fails to collect all the coins, or if the player runs out of lives by being hit by projectiles.
---------------------------------------------------------------------------
## The frontend was created with ReactJs.

As of 10/30/2022 it is only playable with a keyboard and uses the "spacebar" but there is plans to make it playable in mobile by just tapping the screen. There is a built in feature that allows the user to create a course/map as well as edit/delete the maps of ones choosing. More customization to come along with more difficulty levels in the near future.
----------------------------------------------------------------------------
## The Backend was created using express, Node.js, and PostrgeSQL.

### Link to backend repository: https://github.com/Gustavo0623/go-bird-go-backend
----------------------------------------------------------------------------
## Key features:
* Spacebar to make bird (player) fly (move upwards on screen).
* Lives tracker to keep track of how many lives the player has remaining.
* Coins tracker that keeps track of how many coins the player has collected andhow many remain to be collected.
* Navigation bar to allow for easy navigation through the app.
* Create a course/ map form to allow users to create their own course to be able to challenge themselves or frineds.
* Edit a course/ map form to allow users to make edits to their course.
* Delete a course feature that allows users to delete a course/ map of their choosing.
----------------------------------------------------------------------------
## Upcoming Features:
* Rating of difficulty of courses/ maps.
* Success Rate (individual and overall)
* User login/sign-up.
* Obstacle/projectile speed manipulation.
* Bird customization.
* Course/ map background customization.
* Score system to allow players who clear without collecting all coins to still pass but with a lower score.
* Multi obstacle/projectiles launched at the same time. 
* Variety of obstacles to choose from. 
----------------------------------------------------------------------------
## Tools and Languages Used

* HTML
* CSS/ Bootsrap
* Javascript
* React.Js
* Node.Js
* Express
* PostgreSQL