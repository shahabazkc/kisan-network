This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
npm start
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes]

<h1> Project Description </h1>
<b> Project menu navigations are controlled with redux <b>
  <p><b>pages/index.tsx is the file where the menu navigations and left sidebar component is writter</b></p>
  <p><b>pages/_app.tsx is the base file where the redux is wrapped</b></p>

## Home Page Includes
Two menus
  - Contacts
  - Messages

<p>Contacts Menu contains the all the contact list you can view the user details by clicking the user that is fetched from the backend side also can send message button is there when clicking the button it goes to the compose component<p>
<p>Compose component generate a 6 digit otp and by clicking submit the message will sent to the user number with body and custom message</p>
<p>Messages Menu contains all the messages that have sented and you can read the message by clicking the message</p>


# Used Packages
<ul>
  <li>Next js</li>
  <li>Typescript</li>
  <li>Redux</li>
  <li>Toastify</li>
  <li>bootstrap</li>
  
 </ul>
