This project requires `git` to download and keep the project up to date with latest developments.  
If not already installed, install `git` from [here](https://git-scm.com/downloads).

This project requires `NodeJs` to run.  
If not already installed, install `NodeJs` from [here](https://nodejs.org/en/download/).

<br>

Launch Terminal (Linux/Mac OS) or PowerShell (Windows) and paste the following code.

```
git clone https://github.com/iiitl-placement-portal/student-portal.git
```

<br>

This will create a folder named `student-portal`.  
Open the `student-portal` folder in Terminal or PowerShell and run following command to install all dependencies required for the project to run.

```
npm install
```

<br>

In `student-portal/src/CONSTANTS.js`, change `BASE_URL` to url where your server is hosted.  
By default it is `http://localhost:5000`.

<br>

To start the project, run following command from `student-portal` directory in Terminal.

```
npm start
```

<br>
<hr>
<br>

This project consists of two portals,

1. Student Portal
2. TPO Portal

Both portals have the same LogIn page and can be viewed by logging with respective credentials.

<br>

The portal has one stand-alone page to add requests for new jobs and can be visited at

> BASE_URL/add-job

where BASE_URL is the url where the project is hosted.  
By default BASE_URL is `http://localhost:3000`.
