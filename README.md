# Movie Management System

## Setup

1. Make sure you have Docker installed and running on your machine. Otherwise download it here: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

2. Pull and run docker image which is used for API requests:
    ```
    docker pull webbylabhub/movies
    docker run --name movies -p 8000:8000 webbylabhub/movies
    ```

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

