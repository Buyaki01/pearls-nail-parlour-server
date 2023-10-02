# Pearls Nail Parlor Server

## Overview
This is the backend of a MERN application that is designed to streamline the workflow of nail artists and to reduce manual scheduling within a company. Offers role based access control to nail artists, admins and managers for task and note management.

## Functionality
The application currently has three employee statuses and one cannot access the app if they are not added by either the admin or the manager of the company.

### Admin:
- Can view, edit, delete any of the nail artist's notes
- Can add new notes and assign tasks to any nail artist
- Can view, edit, delete employee user settings
- Can add employees to the application
- Employees not added by the Admin cannot access the app

### Manager:
- Similar privileges to the Admin.
- Can view, edit, delete any of the nail artist's notes
- Can add new notes and assign tasks to any nail artist
- Can view, edit, delete employee user settings
- Can add employees to the application
- Employees not added by the Manager cannot access the app

### Employee:
- Can only view, create, and edit their own notes
- Cannot delete their own notes

## Technologies Used
The backend of the app was built using the following technologies:

- **MongoDB**: A document-oriented database used for storing data in the application
- **Express**: A web application framework used for building the app's backend
- **Node.js**: A JavaScript runtime environment used for running the app's backend
- **JWT(Json Web Tokens)**

### Getting Started
To get started with this app, follow these steps:

1. Clone this repository: 
    ```bash 
    git clone git@github.com:Buyaki01/pearls-nail-parlour-server.git
    ```

2. Open the repository: 
    ```bash 
    cd pearls-nail-parlour-server
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

Feel free to check the [issues page](https://github.com/Buyaki01/pearls-nail-parlour-server/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
- Inspiration: [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode)