/*
    This project.js code will be loaded on almost every page of your website.
    Each page will have access to the skapi object.
*/

/*
    Below, is the initializing code for Skapi.
    Replace "project_id" and "owner_id" with your actual Project ID and Owner ID.
    You can retrieve the project ID and the owner ID from www.skapi.com.
    For more information, checkout the Getting Started: https://docs.skapi.com/introduction/getting-started.html
*/

const PROJECT_ID = "";

/*
    Below, the options object is passed to the Skapi constructor.
    The options object can have the following properties:
    - autoLogin: <boolean>, when set to true, the user will be automatically logged in.
    - eventListener: <object>, contains event listeners for the Skapi object.
        - onLogin: <function>, called when the user is logged in, or when updates the user's session, or the user's is logged out.
*/

let options = {
    autoLogin: true,
    eventListener: {
        onLogin: (user) => {
            if (!user) {
                // user is not logged in.
                // If url is welcome.html redirect to index.html
                if (window.location.pathname === "/welcome.html") {
                    window.location.href = "index.html";
                }
            }
        },
    },
};

const skapi = new Skapi(PROJECT_ID, options);
