# Eco Soap Bank

Saving, Sanitizing, and Supplying Recycled Soap for the Developing World

## Front-end built using:
* React
* Ant Design UI library - styling
* Okta - authorization
* Redux - state management
* yup - form validation

## Credits
|  [William Sedlacek](https://github.com/wSedlacek/) |  [Isaac Stott](https://github.com/Istott/) |  [Kolade Junaid](https://github.com/Shamskol/) | [Francisco Barrios](https://github.com/shighetari)  |  [Alexander Heraimenka](https://github.com/hera/) |
|---|---|---|---|---|
| [<img src="https://avatars3.githubusercontent.com/u/8206108?s=400&u=07702a7ff0ff7b2f253178b801e26faa2af6ded8&v=4" width = "200" />](https://github.com/wSedlacek)   |  [<img src="https://avatars0.githubusercontent.com/u/59525203?s=400&u=76f4098f918d0a26a022315c092a7a01efe497e6&v=4" width = "200" />](https://github.com/Istott) | [<img src="https://avatars3.githubusercontent.com/u/50210745?s=400&u=5237aae954875353d9ea2b43118c3aa36fe46df7&v=4" width = "200" />](https://github.com/Shamskol)  | [<img src="https://avatars2.githubusercontent.com/u/47320015?s=400&u=6998c6b0dfe2b2aea8298d321789421df3d8d55f&v=4" width = "200" />](https://github.com/shighetari)  | [<img src="https://avatars1.githubusercontent.com/u/21314337?s=400&u=42a99b5f3a8f562fff6ef514ba4ee0248c2529d4&v=4" width = "200" />](https://github.com/hera)  |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/wSedlacek)  |  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Istott) |  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Shamskol) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/shighetari)  |  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/hera) |
| [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/wsedlacek/)  | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/istott/)  |  [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kolade-junaid/) |  [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/developerbarrios/) |  [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/aheraimenka/) |


## StoryBook

- The reusable components for this repository can be [found here using a Storybook](https://lambda-school-labs.github.io/labs-spa-starter/?path=/story/form-button--basic-usage).
- For more information on contributing to our Storybook for this application [you can see here](./src/stories/README.md).

## Requirements

- [Labs Engineering Standard requirements found here](https://labs.lambdaschool.com/topics/node-js/)

## Getting Started

### Environment variables

- `REACT_APP_CLIENT_ID` Okta client id
- `REACT_APP_OKTA_ISSUER_URI` Okta api authorization server issuer uri (eg. `https://name-438r8hr.okta.com/oauth2/default`)

- Fork and clone the repo to install it as your own remote.
  - **note** please [be sure to set your remote](https://help.github.jp/enterprise/2.11/user/articles/changing-a-remote-s-url/) for this repo to your to point to your Labs Team Front End Repository.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

## Deploying Your App

- We recommend you deploy this project using [AWS amplify](https://aws.amazon.com/amplify/). You can find a step-by-step deployment guide [here](./DEPLOYMENT_GUIDE.md).

## Components

- We feel that you shouldn't have to spend time as a developer worrying about where your files should go and your architectural decisions that you'd have to make if you started from scratch.
- Following the patterns we've laid out for your and the definitions of 'components' will help you focus on getting work done, rather than spending time deliberating on 'how' your work will get done.
- Please see [the following documentation](./src/components/README.md) on how to work with and structure your components in this app.

## Styling Your App

- In order to provide an experience for you to dive right into a code base and have everything you need to successfully style and craft your UI Components we'd like for you to gain some practice using the [`ANT Design Library`](https://ant.design/).

- Instructions on how to use components.

## Data Visualization - Working with Hybrid Teams

- We have provided and example of a simple Plot Charting component that can be built, configured, and delivered for your use by the Data Science Team.
- We strongly urge you to work in constant collaboration with the data scientists in order to pull in their work into your application, ensure that their work matches the theme and style of your team's application, and that the data you pull in represents what problem that team was trying to solve. **This will be a process that requires work and dedication and give-and-take.**
- **Example Components**: [Please see here for an example](./src/components/pages/ExampleDataViz/README.md) of how to work w/ `Plotly.js` and `React-Plotly.js`.

## Testing your App

- In accordance with our [Labs Engineering Standards](https://labs.lambdaschool.com/) this app uses common practices for Unit/Integration Testing using:
  [React Testing Library](https://github.com/testing-library/react-testing-library)
  [Jest](https://jestjs.io/)
- For examples on how to test your application and more information please see [the following documentation](./src/__tests__/README.md).

## Contributing

- As this repository is a Work In Progress (WIP) we'd love to hear more about what is working for you and what could be improved. [Please use the `Issues` tab in Github](https://github.com/Lambda-School-Labs/labs-spa-starter/issues) to submit and file any issues that come up during your development cycle. Issues should be related to things like, documentation, bugs that come up with the existing flow, architectural discussion, suggestions for improvements, and anything that you find cumbersome about getting started and working through a product cycle using these tools.
- **Please use `Labels` when filing issues** try and include screenshots of bugs and steps to reproduce.
