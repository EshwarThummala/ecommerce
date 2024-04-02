# Ecommerce Website
This is a simulated e-commerce website. It showcases product data (fetched from dummy product api) and lets users browse and search for items. Users can add products to their shopping cart, modify the selections, and remove unwanted items. Live is running [here](https://eshwar-ecommerce.onrender.com)

# Cloning and Setting Up a React Project Locally

Follow these instructions to clone a React project created with Create React App from GitHub and set it up on your local machine.

## Prerequisites
- Node.js and npm installed on your machine. You can download and install them from [here](https://nodejs.org/).
- Make sure you install the latest stable version.
- verify your installation with the following commands.
    ```bash
    node -v
    npm -v
    ```

## Steps
- Open up a command line interface in your local path where you want to clone the repository

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/EshwarThummala/ecommerce.git
   ```

2. **Opening the Repository Folder**
   ```bash
   cd ecommerce
   ```

3. **Installing all the dependencies needed to run the project**
    ```bash
    npm install
    ```

4. **Running the application**
    ```bash
    npm start
    ```

5. **Opening the localhost:3000**
- The browser should automatically open after the above command, if not, copy and paste the following url in the broswer.
    ```bash
    http://localhost:3000
    ```

6. **Playing with the Application**
- After the application is opened, you will see a Home page, do your best to find nice products in there.

# Future features
- Make webpage adaptive to various viewports.
- Personalized Accounts: Create an account system for users to log in and enjoy a tailored shopping experience. This includes features like personalized search results and past order history.
- Live Product Data: Connect the website to a live API (currently using a live api, but it only provides dummy data and details cannot be updated) to access and display up-to-date product and user information directly from a database.
- Robust Error Handling: Implement informative error pages that provide clear feedback in case of any issues during interaction with the API.
- Enhanced User Engagement: Introduce interactive elements on the webpage to make the shopping experience more engaging and dynamic.
