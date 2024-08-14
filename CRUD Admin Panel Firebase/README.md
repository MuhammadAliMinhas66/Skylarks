# **React.js Firebase Authentication Challenge**

## **Overview**

Welcome to the React.js Firebase Authentication Challenge! This project demonstrates a full authentication flow using Firebase and React.js. The app includes user authentication, user management, and real-time data updates with Firestore.

## **Features**

- **User Authentication:**
  - Manual user setup in Firebase Authentication.
  - Login form with success and error toasts.
  - Navigation to home page upon successful login.

- **Home Page:**
  - **Logout Button:** Logs out the user and redirects to the login page.
  - **User List:** Displays users created by the authenticated user.
  - **Create User Form:** Allows the creation of new users (email & password).

- **User Management:**
  - **Edit Button:** Opens a page to update user details (email and password).
  - **Delete Button:** Removes the user from Firestore and updates the user list.

## **Setup**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MuhammadAliMinhas66/Skylarks.git
   cd Project path

2. **Install Dependencies**
   ```npm install
3. **Set Up Firebase**
   - Go to Firebase Console.
   - Create a new project and enable Firebase Authentication and Firestore.
   - Add your Firebase configuration to the project by creating a firebaseConfig.js file in the src directory with the following content:

  ```
  const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export default firebaseConfig;
```
4. **Run the Application**
   ``` npm run dev
   ```
## **Usage**

- **Login:**
  - Use the credentials of the manually added user to log in.

- **Home Page:**
  - Use the **Logout** button to log out.
  - Use the **Create User** form to add new users.
  - Manage users with **Edit** and **Delete** buttons in the user list.

## **Contributing**

Feel free to fork the repo and submit pull requests. For any issues or feature requests, please open an issue on the GitHub repository.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

