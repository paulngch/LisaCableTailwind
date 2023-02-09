<a name="readme-top"></a>

# Lisa Works (Showcase web app)

<div id="header" align="center">
  <a href="https://good-jade-snail-gear.cyclic.app/">
    <img src="https://i.imgur.com/SfamRbc.jpg"/>
  </a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-overview">Project Overview</a>
      <ul>
      <li><a href="#timeframe">Timeframe</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#development-approach">Development Approach</a>
      <ul>
        <li><a href="#user-story">User Story</a></li>
        <li><a href="#wireframe">Wireframe</a></li>
        <li><a href="#development-steps">Development Steps</a></li>
      </ul>
    </li>
  <li><a href="#deployment">Deployment</a></li>
  <li><a href="#future-development">Future Development</a></li>
    <li><a href="#additional-information">Additional Information</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<br>

<!-- PROJECT OVERVIEW -->

## Project Overview

The project aimed to fulfill the real-life requirement of GA for a classroom display app. Similar to working in team projects in the industry, the group got to meet up with the stakeholders involved and discussions/briefs/updates were communicated throughout the project's duration. The team worked closely with stakeholders to ensure the app met their needs.

The project scope evolved throughout the process; initially from a "simple" read-and-display app with CRUD functions, to a more funtional room booking app that also does the display for classrooms use/users.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Timeframe

1 week

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

#### Technologies & Tools Used

- MongoDB & AWS S3
- Express.js & Node.js
- ReactJs & TailwindCSS
- JSONWebToken
- Twilio
- Formik & Yup
- Lightbox

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br>

<!-- Development Approach -->

## Development Approach

### User Story

- As someone who is looking for a custom cable, but at the same time, not knowing what designs/themes i would want the final commission to look like, I would like to be able to have some measure of LisaWork's workmanship as well as to get some inspiration or gauge of how my final commission should be.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Wireframe

Link: [Lisa Works](https://miro.com/app/board/uXjVPHdJjuw=/?share_link_id=978527728016)

<div align="center">
   <img src="https://imgur.com/a/DFUYCMH" width="400"/>
   <img src="https://imgur.com/xCYULSx" width="400"/>
   <img src="https://imgur.com/9UvqiTb" width="400"/>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Development Steps

- [x] **Step 1:** Plan Page Layout -> What do I want to showcase? What are the functions/purpose of the webapp? ->Come up with first iteration of wireframe
- [x] **Step 2:** Plan database schema / data structure & translate it into "forms" in wireframes
- [x] **Step 3:** Determine what user-inputs are necessary
- [x] **Step 4:** Explore what other functions are needed (major CRUD functions)
- [x] **Step 5:** Determine necessaity and structure of "Admin Dashboard"
- [x] **Step 6:** Explore functions needed for Admin Dashboard (CRUD functions)
- [x] **Step 7:** (Stretch Goals): Make the website/webapp mobile responsive
- [x] **Step 8:** (Stretch Goals): Add Twilio API for SMS & Email integration

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Deployment

The app is deployed on Cyclic (Backend) & Netlify (Frontend), and you can view the app here: https://lisaworks.co/

<div align="center">
  <a href="https://lisaworks.co/">
    <img src="https://imgur.com/bt80DQs" width="400"/>
    <img src="https://imgur.com/WyWYuC1" width="400"/>
  </a>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Future Development

- CSS of the webapp is not a 100% satisfactory due to time constraints, future improvements would include better mobile responsiveness.

- Loading of the album takes some time, so there are considerations to implement a lazyloading feature

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Additional Information

- The app was developed to meet a real need for myself. With relatively more domain knowledge, putting myself in the shoes of a potential "user", allowed me to determine what features/functions are needed and what are unnecessary. Also, with myself being the "maker/creator" of the cables, it was much easier to identify what I needed in order to maintain the website (i.e admin dashboard)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

### Team:

Paul Ng:
<a href = "https://github.com/paulngch"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href = "https://www.linkedin.com/in/paulngch/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href = "mailto:NgPaul@pm.me"><img src="https://img.shields.io/badge/M-ProtonMail-blue" /></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgements

- Special thanks to Simon Lau, our General Assembly instructor for his advice.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




















# LisaWorks

A showcase website for custom cables for keyboard enthusiast community.

## The project

I chose to do something that is relatively more practical (personal utility) for my final captstone project at General Assembly Software Engineering Immersive. Since I was taking requests for custom cables at the side every now and then with 100% of the proceeds going to a charity of the "buyer's" choice, I thought that it would be a good opportunity for me to do a fullstack showcase website for that purpose.

## Stack/Technologies used

- Mongo/Express/React/Node
- Other Libraries: Formik, Yup, Axios, TailwindCSS, JWT, AWS S3 Bucket

## Deployed-on

- Frontend : Netlify w/ own domain
- Backend : Cyclic

## User Stories

**Guest**

- can send feedback or make a custom cable request to the admin
  - will have failure or success messages upon submission
- able to also make a custom cable request through submission of a form
  - willhave failure or success messages upon submission
- can view a sample of previous commissions

**Admin**

- able to login
- able to upload new "commissioned-cable" images to s3 bucket
  - can view the whole list of images that were uploaded
    - able to delete the uploaded images with a confirmation message and also a notification upon successful/failed deletion
- able to view all the requests / feedbacks / forms that were submitted through the website
  - can view the individual user-submitted posts with the details (original submission details will be blocked out)
  - can make Admin comments that will be saved
  - can remove the active status of the submission through un-checking of a checkbox
