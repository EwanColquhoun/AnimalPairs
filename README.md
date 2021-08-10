# *Animal Pairs*
An interactive website to help improve the user's memory skills. It is a basic memory game involving matching up pairs of animal images. It is aimed at users who want a bit of fun and want to test their memory. Aimed at ages 3 and upwards.

Click [*HERE*](https://ewancolquhoun.github.io/AnimalPairs/) to test your memory with Animal Pairs! 

![Responsive design image](assets/readme-images/responsive-design.png)

# Contents
* [**User Experience UX**](<#user-experience-ux>)
    *  [User Stories](<#user-stories>)
    * [Wireframes](<#wireframes>)
    * [Site Structure](<#site-structure>)
    * [Design Choices](<#design-choices>)
        *  [Typography](<#typography>)
        *  [Colour Scheme](<#colour-scheme>)
* [**Features**](<#features>)
    * [**Existing Features**](<#existing-features>)
        * [Welcome pop-up](<#welcome-pop-up>)
        * [Rules and Difficulty buttons](<#rules-and-difficulty-buttons>)
        * [Score and Timer](<#score-and-timer>)
        * [Sound Controls](<#sound-controls>)
        * [Sound Menu](<#the-sound-menu>)
        * [The Game](<#the-game>)
        * [Congratulations pop-up](<#congratulations-pop-up>)
    * [**Future Features**](<#future-features>)
* [**Technologies Used**](<#technologies-used>)
* [**Testing**](<#testing>)
* [**Deployment**](<#deployment>)
* [**Credits**](<#credits>)
    * [**Content**](<#content>)
    * [**Media**](<#media>)
*  [**Acknowledgements**](<#acknowledgements>)

# User Experience (UX)
## User Stories
* As a user I want to know the rules.
* As a user I want to know my score.
* As a user I want to know how long it has taken me to complete the game.
* As a user I want to know when I have finished.
* As a user I want to reset the game if I want another attempt.
* As a user I want to make the game easier or harder to suit my skill level.

[Back to top](<#contents>)
## Wireframes

![Web Wireframe](assets/readme-images/webwf.png)

![Mobile Wireframes](assets/readme-images/mobilewf.png)
[Back to top](<#contents>)
## Site Structure
Animal Pairs is designed to be simple to use. It has one main page and within that page it has 3 pop-up windows (modals). <br>
On opening the site you are greeted with the Welcome pop-up that describes the rules of the game as well as offering the user a choice of game difficulty in the form of three buttons. Additionally, there is a button to link to the sound menu popup. The Welcome pop-up can be accessed at any time via the 'Rules' button.<br>

The sound menu pop-up can be accessed at any time via the volume icon, it has a volume slider and a mute toggle switch.<br>

The Congratulations pop-up is displayed when the user has completed the game. It shows the score, time taken and gives the user the option to start again at a difficulty of their choosing. 

There is a reset button at the bottom of the deck of cards.

[Back to top](<#contents>)
## Design Choices
* ### Typography
    * The main heading is 'Fredericka the Great' in the cursive style. This helps the user get an idea as to what the game is about. It is relaxed yet descriptive.
    * The font for the rest of the site is 'Exo' in the san-serif style. It appears informal yet easy to read at all sizes and weights.

* ### Colour Scheme
    * The colour schemes chosen for Animal Pairs were primarily chosen to capture the user's eye and imagination. They are bright and vibrant colours to enhance the experience without detracting from the game itself.

Here are some examples of the colour palattes:
* Main background
![Background-Color](assets/readme-images/background-color.png)
* Welcome pop-up
![Welcome pop-up colour](assets/readme-images/welcome-color.png)
* Congratulations pop-up
![Congratulations pop-up colour](assets/readme-images/congrats-color.png)

[Back to top](<#contents>)
# Features
## Existing Features
* ### Welcome pop-up
    * Designed to give the user an introduction to the site and to explain the rules of the game.
    * It has 3 difficulty selector buttons and one sound control button to open the sound controls pop-up.
    * To close the Welcome pop-up the user can click anywhere on the screen.

![Welcome modal](assets/readme-images/welcome-modal.png)

[Back to top](<#contents>)
* ### Rules and Difficulty buttons
    * The Rules and Difficulty buttons are located above the game on the main page.
    * The Rules button allows access to the Welcome pop-up and thus the rules of the game at any stage. 
    * The Difficulty drop down buttons allow the user the vary the level of difficulty. When the desired difficulty is selected the game resets.

![Rules and Difficulty buttons](assets/readme-images/rules-difficulty.png)

[Back to top](<#contents>)
* ### Score and timer
    * The score panel is located below the rules button and above the game on the main page. It displays to the user the amount of pairs they have matched against the maximum possible.
    * The timer is located to the right of the score panel. It shows the time elapsed since the first card in that game was clicked. After set periods of time it changes its display to reflect the length of time taken, i.e after 2 minutes it turns red!

![Score and Timer](assets/readme-images/score-timer.png)
![Orange timer](assets/readme-images/timer-orange.png)
![Red timer](assets/readme-images/timer-red.png)

[Back to top](<#contents>)
* ### Sound Controls
    * The game has a variety of sounds to enhance the UX. There are card shuffling sounds, card clicking sounds, card not matching sounds, and when a card is matched the sound that is played matches the animal on the matched cards. 
    * The sound menu controls the volume of the site and gives the user the option to mute the sounds all together. 
    * The user can access the sound menu from the sounds button on either the Welcome pop-up (In the top right corner) or the main game page (next to the timer).

![The sound buttons](assets/readme-images/soundbutton.png)
![The sound buttons](assets/readme-images/soundbutton2.png)

[Back to top](<#contents>)
* ### The Sound menu
    * Accessed by the sound controls buttons it allows the user to change the game sound effects volume at any stage. 
    * It also has a mute function.
    * To exit the sound controls the user needs to click off the sound controls panel.

![Sound pop-up](assets/readme-images/sound-controls.png)

[Back to top](<#contents>)
* ### The Game
    * The game itself is made up of cards that the user has to turn over. The aim is to match two cards together until the whole 'deck' is matched.
    * The amount of cards on the deck depends on the level of difficulty selected. 
    * There are some basic animations and sounds that interact with the user to enhance the in-game user experience and to encourage further use. 
    * The below picture depicts the game board with two cards turned over. They are unmatched so will turn back over with a slight delay. 
![The Game](assets/readme-images/easy-unmatched.png)
    * The below picture depicts the game with most of the cards matched.
![Matched Game](assets/readme-images/game-matched.png)

[Back to top](<#contents>)
* ### Congratulations pop-up
    * The Congratulations pop-up is shown when the game is complete. 
    * It displays the time-taken to complete the game. It also shows the score and an interpretation of the score vs moves result.
    * It gives the user the option to recommence the game at a difficulty of their choosing.
    * To exit the Congratulations pop-up the user needs to click anywhere on the screen.

![Congratulations Pop-up](assets/readme-images/congrats-modal.png)

[Back to top](<#contents>)
## Future Features
* An item for further versions could be a score board for the various users once a player name has been inputted.

[Back to top](<#contents>)
# Technologies Used
* [HTML5](https://html.spec.whatwg.org/) - provides the content and structure for the website.
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - provides the styling.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - provides the interactivity.
* [Balsamiq](https://balsamiq.com/wireframes/) - used to create the wireframes.
* [Gitpod](https://www.gitpod.io/#get-started) - used to deploy the website.
* [Github](https://github.com/) - used to host and edit the website.
* [AnimateCss](https://animate.style/) - Library used to help with the animations on all devices.
* [CloudConvert](https://cloudconvert.com/wav-to-mp3) - Used to convert WAV files to mp3.

[Back to top](<#contents>)
# Testing

Please refer to [**_here_**](TESTING.md) for more information on testing Animal Pairs.

[Back to top](<#contents>)

# Deployment
### **To deploy the project**
The site was deployed to GitHub pages. The steps to deploy a site are as follows:
  1. In the GitHub repository, navigate to the **Settings** tab.
  2. Once in Settings, navigate to the **Pages** tab on the left hand side.
  3. Under **Source**, select the branch to **master** or **main**, then click **save**.
  4. Once the master branch has been selected, the page will be automatically refreshed with a green ribbon display to indicate the successful deployment.

![GitHub pages deployed image](assets/readme-images/deploy2.png)

  The live link to the Github repository can be found here - https://github.com/EwanColquhoun/AnimalPairs

### **To fork the repository on GitHub**
A copy of the GitHub Repository can be made by forking the GitHub account. This copy can be viewed and changes can be made to the copy without affecting the original repository. Take the following steps to fork the repository;
1. Log in to **GitHub** and locate the [repository](https://github.com/EwanColquhoun/AnimalPairs).
2. On the right hand side of the page inline with the repository name is a button called **'Fork'**, click on the button to create a copy of the original repository in your GitHub Account.
![GitHub forking process image](assets/readme-images/fork2.png)

### **To create a local clone of this project**
The method from cloning a project from GitHub is below:

1. Under the repository’s name, click on the **code** tab.
2. In the **Clone with HTTPS** section, click on the clipboard icon to copy the given URL.
![Cloning image](assets/readme-images/clone2.png)
3. In your IDE of choice, open **Git Bash**.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type **git clone**, and then paste the URL copied from GitHub.
6. Press **enter** and the local clone will be created.

[Back to top](<#contents>)
# Credits
* ## Content
    * The font came from [Google Fonts](https://fonts.google.com/).
    * The colour palate was compiled by [Colormind](http://colormind.io/).
    * The colour gradients were compiled from [ColourSpace](https://mycolor.space/).
    * The icons came from [Font Awesome](https://fontawesome.com/).
    * [Balsamiq](https://balsamiq.com/wireframes/) was used to create the wireframes.
    * The framework for the timer came from [Daniel Hug](https://jsfiddle.net/Daniel_Hug/pvk6p/).
    * The code for the dropdown buttons was inspired by [W3Schools](https://www.w3schools.com/css/css_dropdowns.asp).
    * The code for the sound toggle was inspired by [Marcus Connor](https://codepen.io/marcusconnor/pen/QJNvMa ).

* ## Media
    * The animal sound effects were from [Free Sound Effects](https://www.freesoundeffects.com).
    * The majority of the card sounds were found here [Mix Kit](https://mixkit.co/free-sound-effects).
    * The animal images were from [Unsplash](https://unsplash.com/).
    * The favicon came from [FreeFavIcon](https://www.freefavicon.com/freefavicons/animal/index.php).

[Back to top](<#contents>)
# Acknowledgements
Animal Pairs was completed as a Portfolio 2 Project piece for the Full Stack Software Developer (e-Commerce) Diploma at the [Code Institute](https://codeinstitute.net/). As such I would like to thank my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/), the Slack community, and all at the Code Institute for their help and support.

Ewan Colquhoun 2021.

[Back to top](<#contents>)