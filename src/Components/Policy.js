import React from 'react';
import './Policy.css';
import Logo from "../Assets/Untitled design(6).png";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <header className="header">
      <div className="logo">
          <img src={Logo} alt="AppNation Logo" className="logo-image" />

        </div>
        <div className="logo">Solvy AI</div>
      </header>
      <main className="main-content">
        <section className="introduction">
          <h1>Introduction</h1>
          <p>
          
            This is the Privacy Policy and Terms of Service of Solvy AI (referred to as "us", "we", "our", or "the app") and is incoporated into and is subject to this privacy policy and terms of service.
            This document aims to describe the policies and procedures of Solvy AI 
            regarding the collection, use, and disclosure of personal information when you use our mobile application, as well as the terms of use/service to which is held a standard to the users.
            By using Solvy AI, you agree to the terms and conditions outlined in this document, and have an understanding of the data collected and used. 
          </p>
        </section>
        <section className="information">
          <h2>Information we collect</h2>
          <p>
           Solvy AI minimizes data collection and commits to robust security practices, including personally identifiable information. Therefore, data collection is limited to only 
           necessary measures. We may collect data such as name and email address, which are stored privately on a secure server and only used for authentication purposes.
           Keeping this in mind, this information is not publicly available and is, again, only used to authenticate a user into the app. 
            With the exception of this, information is stored securely, locally on device which may include subscription status, usage, and AI chat history. Overall, no data is made publicly available. 
            Information regarding subscriptions are to be handled by Apple. Apple's privacy policies are beyond the scope of this document, but can be referenced directly on Apple's end user license agreement and App Store policies.
          </p>
         

        </section>
        <section className="information">
          <h2>Security</h2>
          <p>
          We prioritize the security of your information and have implemented industry-standard
  security measures to protect against unauthorized access, alteration, disclosure, or
      destruction of any data within our App. The majority of information is stored locally, securely, on device, and any information required for user authentication is stored on a secure server.

          </p>
         
          
        </section>
        <section className="information">
          <h2>Academic Integrity</h2>
          <p>
          Our app is not intended for use for any reasons regarding academic dishonesty, which may be interpreted differently from school to school due to policies.
           Please regard your school’s academic policy/student handbook to ensure no infringement. 
           If a user is known to have taken academic dishonest actions, we will, in all of our efforts, disable the user’s account. 
           Solvy AI does not condone, promote, nor is responsible for misuse of the app. 
          </p>
         

        </section>
        <section className="information">
          <h2>Subscription</h2>
          <p>
          Solvy AI includes paid, auto-renewable subscriptions (Solvy Pro) which allows for unlimited use of the application's features. As of June 26, 2024, users without a subscription are limited to 5 uses a day. 
          The subscriptions and prices are outlined in the Solvy Pro part of the application. 
          All payments and subscriptions are handled by Apple. Cancellations are done through the iOS settings app or in the "account" page of Solvy AI. 
          Please consult Apple for refunds, cancellations, and any other mishap or concern, as we do not handle payments. 
          </p>
         

        </section>

       

        <section className="information">
          <h2> Changes to this Privacy Policy</h2>
          <p>
          We reserve the right to modify or update this Privacy Policy from time to time, and any
changes will be effective upon posting the revised version. We encourage you to review
this Privacy Policy periodically to stay informed about our data practices.

          </p>
         

        </section>

        <section className="information">
          <h2> Contact Us</h2>
          <p>
          If you have any questions or concerns about this Privacy Policy or our data practices,
please contact us at <span class="underline">solvyai.app@gmail.com</span>

. By continuing to use our App, you acknowledge that you have read and understood this
Privacy Policy and consent to the collection, use, and disclosure of your personal
information as described herein.




          </p>
         

        </section>

      </main>
    </div>
  );
};

export default PrivacyPolicy;
