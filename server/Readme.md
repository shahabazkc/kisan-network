<h1> Backend </h1>

<p>How to run the application ?</p>
<p><b>npm start</b></p>

<h4>Api Routes</h4>
<hr/>
<p> http://localhost:8000/get-contacts(GET) </p>

<p>http://localhost:8000/get-messages(GET)</p>
<p>http://localhost:8000/send-message(POST) <b>Body
    {message,firstName,lastName,number}
 </b>
</p> ---


<h3> Project structure </h3>
<hr/>
<p>The project files are in the src directory where app.ts is the base file and index.ts starting the server (This method is done because of unit testing integration in mind).</p>
<p>Controller folder contains the routes controller. It is used for a single route because of not enough time</p>
<p>Models folder contain the contacts.json file that has contact dummy data and message.ts is the database model schema of messages </p>
<p>Routes folder is used to create the routes of the Api</p>
<p>services folder is used to integrate the services here I used twilio for sms service</p>

<h3> Points to remember </h3>
<hr/>
<ul>
    <li><b>This project is developed focused on more readability and efficient code</b></li>
    <li><b> .env file is not removed for easy access. I know it is not safe and best method </b></li>
    <li><b> Database connection is set to the local. If you need to change you can edit from the .env file </b></li>
    <li><b> You can also change the Twilio api credentials from .env file </b></li>
    <li><b> Port is set to 8000 </b> </li>
  </ul>

<h3> Used Technologies </h3>
<ul>
  <li>Node js</li>
  <li>Express</li>
  <li>Typescript</li>
  <li>MongoDb</li>
  <li>Express-validator</li>
  <li>Nodemon</li>
  <li>Twilio</li>
 </ul>
