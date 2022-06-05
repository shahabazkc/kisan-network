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

<h3> Points to remember </h3>
<hr/>
<ul>
    <li><b> .env file is not removed for easy access. I know it is not a good </b></li>
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
