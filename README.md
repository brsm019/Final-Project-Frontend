# Facts! Game

![1](https://user-images.githubusercontent.com/70659641/105608107-e3504480-5d99-11eb-93e9-df4292ccdf81.png)

# Gaming Platform

![2](https://user-images.githubusercontent.com/70659641/105608189-65406d80-5d9a-11eb-8499-47169b53acf8.png)

## Details

Link to Demo Day - [Team Paragon Demo Day](https://www.youtube.com/watch?v=JrKkZhfethw&t=623s&ab_channel=SchoolofCode)

This project is the result of working in an agile tech team of five individuals over a period of one month. Our clients, the School of Code, gave us the brief:

>'Improve remote team building at the School of Code'

We solved this problem by creating a *gaming platform* and bespoke *'Facts!'* game to ultimately break down communication barriers and build rapport. The gaming platform contains a number of activities for team building while the Facts! game allows you to guess the facts of your team mates, whose fact it is and which fact is true, finishing with a leaderboard of the overall winner.

The **gaming platform** contains:
- A login screen allowing only access to authorised users.
- A Home page with a brief description about the platform and the game as well as a link to the Facts! game.
- A Team Building page containing a number of different activities to create a bond between team members.
- A profile page to see all the users of the platform, this section also contains a brief bio of the user.

The **Facts! Game** contain:
- A homepage to either join an existing game or create a new one, you will be able to add your fact and lie on these pages.
- A game lobby for waiting for the user.
- First page of game, where you choose who's fact you think is displayed on the screen.
- Second page, a countdown followed by a reveal page.
- A page where you choose which fact is true.
- A leaderboard for the overall winner.

This file contains the front-end section of the project.

## Built With

- React
- JSX
- JavaScript
- CSS
- Storybook
- Jest
- css.module
- React router dom
- Websockets
- Material UI
- Chakra ui
- React icons

The front-end was built with React Library, utilising the development environment, Storybook, and a number of UI libraries such as Material UI and Chakra, and both the platform and Facts! game are tested extensively using Jest.

Inside the file you will find two separate react-apps, the first being the Facts! game and the second being the platform. We created it in such a way to make the platform scalable, creating a separation of concerns, so that each service is carrying out one task.

## Usage

Both services were deployed using netlify. You can view them by following the links and signing up below:

[Facts! Game](https://facts-game.netlify.app/](https://facts-game.netlify.app/ )

[Gaming Platform](https://paragon-team-building.netlify.app/](https://paragon-team-building.netlify.app/ )
