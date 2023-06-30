# tech-notes-server

## Overview
This is the backend of a MERN application that provides a streamlined process for technicians to manage computer repair tickets requested by customers. Instead of relying on sticky notes, technicians can create, view, edit, and delete tickets through the application. The backend utilizes JWT tokens for authentication and authorization, allowing users to perform CRUD operations based on their roles within the company.

## Technologies Used
The backend of the app was built using the following technologies:

- **MongoDB**: A document-oriented database used for storing data in the application
- **Express**: A web application framework used for building the app's backend
- **Node.js**: A JavaScript runtime environment used for running the app's backend

### Getting Started
To get started with this app, follow these steps:

1. Clone this repository: 
    ```bash 
    git clone git@github.com:Buyaki01/tech-notes-server.git
    ```

2. Open the repository: 
    ```bash 
    cd tech-notes-server
    ```

3. Create a .env file: 

   * Add DATABASE_URI from your mongoDB
   * Add your ACCESS_TOKEN_SECRET and your REFRESH_TOKEN_SECRET

4. Install dependencies using: 
    ```bash 
    npm install
    ```

5. Start the app using: 
    ```bash 
    node server
    ``` 

  Open your browser and navigate to http://localhost:your-PORT to view the app

## Author
👤 **Ritta Sweta**

- Linkedin: [@ritta-sweta](https://www.linkedin.com/in/ritta-sweta/)
- Github: [@Buyaki01](https://github.com/Buyaki01)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Buyaki01/tech-notes-server/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
- Inspiration: [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode)