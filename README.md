# Movie Management System

## Setup with Docker

1. Make sure you have Docker installed and running on your machine. Otherwise download it here: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

2. Pull and run docker image which is used for API requests:
   <br />
   Visit the link: https://hub.docker.com/r/webbylabhub/movies

    ```
    docker pull webbylabhub/movies
    ```
    ```
    docker run --name movies -p 8000:8000 webbylabhub/movies
    ```


3. Pull and run my docker image to run the frontend part with docker:
   <br />
   Visit the link: https://hub.docker.com/r/mikemakaryshyn/movies-image

    ```
    docker pull mikemakaryshyn/movies-image
    ```
    ```
    docker run --name movies_client -p 3000:3000 -e REACT_APP_API_URL=http://localhost:8000/api/v1 mikemakaryshyn/movies-image
    ```

> Note: You are able to configure REACT_APP_API_URL there. If your local docker server runs on another port you can write it directly in console and the client server will get this updated url. For instance, REACT_APP_API_URL=http://localhost:8001/api/v1


## Technologies Used

The application was built using the following technologies:

* React
* Redux
* RTK
* Axios
* React-modal
* Formik
* Yup
* Tailwind CSS
* Lodash

## Application Structure

The application's structure consists of the following directories:

* `Components`: Contains reusable JSX components that can be used in multiple places throughout the application.
* `Services`: Contains files that handle API requests, such as adding, deleting, and importing movies from a file.
* `Pages`: Contains all the application's pages, and routes are defined in the `App.js` file.
* `Redux`: Contains all the Redux logic, including the slices that define the application's state and reducers.
* `Utils`: Used to store validation schemas and other utility functions. This directory may also be used for other types of utility code in the future.


## Getting Started without Docker

To get started, clone the repository and install the dependencies:
* git clone [repository_link]
* npm install 
* npm start

