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
