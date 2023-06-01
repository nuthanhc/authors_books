# Author Book Explorer

Author Book Explorer is a web application that allows users to discover authors and explore their books. The application utilizes the Google Books API to fetch author and book data.

## Features

- **Author Search:** Users can search for authors by name using the search bar on the landing page. The application retrieves author data from the Google Books API based on the search query.

- **Author List:** The landing page displays a list of authors retrieved from the API. Each author is represented by their name. Users can click on an author to view more details.

- **Author Detail:** When an author is selected, the application navigates to the author detail page. This page provides information about the author, such as their name and a brief description. It also lists their books, including the book title and a short description.

## Installation

1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Run the application locally using `npm start`.
4. Access the application in your web browser at `http://localhost:3000`.

## Technologies Used

- React.js: Front-end JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- React Router: Library for handling navigation and routing in React applications.
- Bootstrap: CSS framework for responsive and mobile-first web development.

## Known Issues

- Missing Author Images: The Google Books API lacks author images, so author images are not displayed in the application.

## Acknowledgments

- The [Google Books API](https://developers.google.com/books) for providing the data used in this application.

Feel free to customize and update the README file to suit your needs.
