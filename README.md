
# SANTOS READ ME

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Santos** Santos is a Porfolio Managent tool for the Averagnge Investor. With Santos, you will be able manage and track proformance of your entire porfolio and individual securities. Santos is an Equity Portfolio Management tool with the ability to manage your porfolio on a holistic approach. Data is the most important tool to the average investor, centralize it with Santos._

<br>

## MVP

\_The **Santos** MVP would include a workign loging process for each individual user. Additionally it will have the seperate sections for users to create an account. Benchmarks, will house all your benchmark securities. Your watchlist and what securities you are looking to purchase, and your Porfolio would be what you are currently holding.
<br>

### Goals

- _Get User sign up and Auth working_
- _Get a user to enter createseveral portfolios_
- _Have user enter, edit a current secuties list for each porfolio._
- _Full Crud_
- _Sexy Design_
- _Working Routes_

<br>

### Libraries

|     Library      | Description                       |
| :--------------: | :-------------------------------- |
|      React       | _Front End Library_               |
| React Router Dom | _Front End Router and switches_   |
|       Rubi       | _Ruby for my backend languuage_   |
|      Rails       | _Rails for my back end structure_ |
|      Axios       | _Api Call Manager_                |

<br>

### Client (Front End)

#### Wireframes

[Wireframes] https://www.figma.com/file/rtFqR67HcUqxaRu48y1YAd/Santos?node-id=0%3A1

#### Component Tree

> [Component Tree] https://app.lucidchart.com/invitations/accept/9148812c-32f1-4955-b6f7-adb96a64d82f

#### Component Hierarchy

```structure

src
|__ assets/
      |__ fonts
      |__ Logo
      |__ images
      |__ mockups
|__ components/
      |__ Nav
          |__Nav.jsx
          |__Nav.css
       |__Main
          |__ Main.jsx
          |__ Main.css
       |__Benchmark
          |__Benchmark.jsx
          |__Benchmark.css
        |__Portfolio
          |__Portfolio.jsx
          |__Portfolio.css
        |__Watchlist
          |__Watchlist.jsx
          |__Watchlist.css
        |__SingIn
          |__SingIn.jsx
          |__SingIn.css
        |__SingOut
          |__SingOut.jsx
          |__SingOut.css
        |__EditBenchmark
          |__EditBenchmark.jsx
          |__EditBenchmark.css
        |__EditPortfolio
          |__EditPortfolio.jsx
          |__EditPortfolio.css
        |__EditWatchlist
          |__EditWatchlist.jsx
          |__EditWatchlist.css
|__ services/
      |__ API Helper
      |__ Auth


```

#### Component Breakdown

|   Component    |    Type    | state | props | Description                                                     |
| :------------: | :--------: | :---: | :---: | :-------------------------------------------------------------- |
|      App       |   class    |   y   |   y   | _Main App will house everything and pass props down_            |
|   Navigation   | functional |   n   |   n   | _The navigation will provide a link to each of the pages._      |
|      Main      |   class    |   n   |   n   | _This will display everything and pass to App_                  |
|   Benchmark    |   class    |   y   |   y   | _The Component will display the Benchmarks entered by the user_ |
|   Watch List   |   class    |   y   |   y   | _The cards will render the post info via props._                |
|   Portfolio    |   class    |   y   |   y   | _Portfolio will house the users porfolio_                       |
|    Sign In     | functional |   n   |   n   | _SignIn_                                                        |
|    Sign Out    | functional |   n   |   n   | _SignIn_                                                        |
| Benchmark Edit | functional |   n   |   n   | _Used to Edit Benchmark, will not have state_                   |
| Portfolio Edit | functional |   n   |   n   | _Used to Edit Portfolio, will not have state_                   |
| Watchlist Edit | functional |   n   |   n   | _Used to Edit Watchlist, will not have state_                   |

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create CRUD Actions |    H     |     8 hrs      |     0 hrs     |     TBD     |
| ERD, Flow, UX/UI    |    H     |     6 hrs      |     6 hrs     |     TBD     |
| Components          |    H     |     10 hrs     |     0 hrs     |     TBD     |
| Components Css      |    H     |     12 hrs     |     0 hrs     |     TBD     |
| Media Queries Css   |    H     |     6 hrs      |     0 hrs     |     TBD     |
| Debuggin            |    H     |     6 hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |     48 hrs     |     0 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> [ERD MODEL] https://app.lucidchart.com/invitations/accept/9148812c-32f1-4955-b6f7-adb96a64d82f > <br>

---

## Post-MVP

> Add and API to Automatically feed end of day data
> Add the ability to delete multiple securities at once
> Add the ability to Add multiple securities at once
> Add a News Feed that targets those securities
> Add rebalancing dates so that you can rebalance your Portfolio
> Have charting functionality on last price
> add additional fields that can be measured
> Create a relationship between the Port and the Benchmark
> Create benchmark track
> Create watchlist track 
---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
