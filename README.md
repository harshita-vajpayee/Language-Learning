# Language-Learning
This is an assesment for internship

## Problem Statement

The objective of this assignment is to create a language learning game that helps users improve their language proficiency through interactive exercises and activities. A user can sign in and learn alphabets, pronunciations, basic words and can attend quizzes. 



## Run Locally

Clone the project

```bash
  git clone https://github.com/harshita-vajpayee/Language-Learning.git
```

Go to the project directory

```bash
  cd Language-Learning-main
```

Install dependencies

```bash
  npm install
```

Start the server

If you face issues in connecting database mail me at harshitavajpayee04@gmail.com , I will help.

## Features
- **1. Backend**
I have used NodeJs and EJS files for backend.
- I have started with a signup page which is a part of the first page. This redirects to the user’s dashboard. You can switch to login page also. This makes a Database object with the registered user email id.
- Dashboard consists of Quizzes after completion of each quiz score is updated on the dashboard and sent to the database.
- Your user id is saved during all the processing’s and everything is updated simultaneously.
- Language choice for Translation of pages is available through API.
- All API calls are present in the app.js.
- All backend data are fetched through ejs files.
And for database I used NoSQL database MongoDB. Mongoose database model consists of the following attributes:
-	Username[string of min length 5]
-	User mail id [string]
-	Password [string]
-	English quiz1, quiz2[number]
-	Hindi quiz1, quiz2[number]
-	French quiz1, quiz2[number]
-	Spanish quiz1, quiz2[number]
-	Kannada quiz1, quiz2 [number]
 
- **2. Frontend**
I have used HTML, CSS and JavaScript.
- The frontend starts with signup page and login page.
- Different Language Dashboard. User can choose any language from the mentioned languages to learn. 
- Language Dashboard consist of:
(i)	Pronounciation and Basics of Language

(ii)	Placards interactive learning

(iii)	Quizes
-	Quiz instructions page
-	JavaScript based Quizes with score calculation.

## Screenshots

![Homepage](https://github.com/harshita-vajpayee/Language-Learning/assets/97746035/cd34efe4-1ec4-4200-ab3f-6c4f22403fbd)
![Signup](https://github.com/harshita-vajpayee/Language-Learning/assets/97746035/6e8de644-6b88-4902-b0a0-2c7609ed2f82)
![Database](https://github.com/harshita-vajpayee/Language-Learning/assets/97746035/fd9207e5-e7e6-414d-9111-73d3f5e43909)
![Dashboard](https://github.com/harshita-vajpayee/Language-Learning/assets/97746035/9eb964c9-8ad1-4485-9436-2181285161d2)
![Language chosen](https://github.com/harshita-vajpayee/Language-Learning/assets/97746035/b3f68153-2c52-48a2-b32f-01307787bd70)
![Placards learning](https://github.com/harshita-vajpayee/Language-Learning/assets/97746035/572c6d91-a004-484d-afb6-5168275b3b09)
![Quiz](https://github.com/harshita-vajpayee/Language-Learning/assets/97746035/93524574-913f-4c72-a3a5-d0a0f32e29d8)
![Quiz result](https://github.com/harshita-vajpayee/Language-Learning/assets/97746035/ece785d5-05e3-43d8-a006-a05d4209c27e)

Working video:
https://github.com/harshita-vajpayee/Language-Learning/assets/97746035/e513f12a-85a6-4d71-af4c-945fbbce002d



## Tech Stacks

- **HTML** 
- **CSS** 
- **Javascript**
- **NodeJs** 
- **MongoDB**  
