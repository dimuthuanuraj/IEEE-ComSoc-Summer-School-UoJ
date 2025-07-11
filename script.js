const btnRegistration = document.getElementById("registration");
const btnImportantDates = document.getElementById("importantDates");
const btnVenue = document.getElementById("venue");
const btnDetailed = document.getElementById("detailProgramme");

const content = document.getElementById("content");


const registration = () => {
  content.innerHTML = `
    <h1>Registration</h1>

    <h3>Student Applications</h3>
    <p>
      Participation in this event is available for a limited number of ComSoc Student Members in the Sri Lanka region.
      Membership is not required in order to apply; however, if your application is accepted, you will need to become a
      ComSoc Student Member in order to register and attend the event.

      Meals and refreshments will be provided to students during the event. All other expenses will be the responsibility
      of student participants.
    </p>
    <br>
    <p>
      <strong>Applications are now being accepted through 1 November 2024.</strong>
      Students will be notified of application decisions by 22 November 2024 via email. If your application is accepted,
      you will be sent a link to register for the event. You will need to have active ComSoc Student Membership at that
      time in order to register./n
    </p>
    <br>
    <p>  <strong>Participation is available for a limited number of ComSoc Student Members from the Sri Lanka
          region.</strong> <span style="color:#d9534f;"><strong>Membership is <u>not required</u> in order to
            apply</strong></span>; however, if your application is accepted, you will need to become a ComSoc Student
        Member in order to register and attend the event.
    </p>
    </p>

    <div class="mt-4">
      <a
        href="https://forms.gle/zrWEpKohofvLyKEq7"
        class="btn-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apply Now for IEEE ComSoc School Series in Jaffna"
      >
        Apply Now
      </a>
    </div>

    <h3 class="mt-8">Guidance for Submitting Your Application</h3>
    <p>
      To help you prepare to submit your application, please have the following required information ready:
    </p>
    <ul class="list-disc ml-8">
      <li>Your full name and mailing address</li>
      <li>Nationality (Country of Citizenship)</li>
      <li>Name of Your University/College</li>
      <li>Program Currently Enrolled In At University</li>
      <li>Years Spent In Advanced Degree Program</li>
      <li>Short CV – Attached as a PDF</li>
      <li>
        Student Application Letter – attached as a PDF (This is a one-page letter about why you want to participate
        in this program)
      </li>
    </ul>
    <br>
    <p>You may also include this optional information:</p>
    <ul class="list-disc ml-8">
      <li>Recommender Name (This Is Usually A Professor Or IEEE ComSoc Member)</li>
      <li>Recommender Email</li>
      <li>Recommendation Letter – Attached as a PDF</li>
      <li>WhatsApp Contact Number (Including Country Code)</li>
    </ul>

    <div style="margin-top:2.4rem;" class="align-center">
      <a
        href="https://www.comsoc.org/education-training/ieee-comsoc-school-series/2025-ieee-comsoc-school-series-jaffna-sri-lanka-event"
        class="btn-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="More details about IEEE ComSoc School Series in Jaffna"
      >
        Learn More &amp; Apply
      </a>
    </div>
  `;
};

/*const registration = () => {
  content.innerHTML = `
  <h1>Registration</h1>
          
            <h3>Fees</h3>
            <table>
              <tbody>
                <tr style="background-color: #2C74B3;color: #fff;">
                  <td>IEEE Student/Graduate/Member	</td>
                  <td>LKR 3,000</td>
                </tr>
                <tr>
                  <td>Others</td>
                  <td>LKR 6,000</td>
                </tr>
               
              </tbody>
            </table>   

           

            <p class="my-4">Deadline For Applications: 14 June 2023              </p>
            <p class="my-4">Deadline For Registration: 20 June 2023              </p>
            <hr class="my-8" style="width:100%;">
            <p style="margin-top:1rem;font-weight:bold;">
            This Summer School is restricted to limited applicants.
            Applicants will be informed whether they are selected for the event on or before 17/06/2023.
          </p>
            <p style="margin-top:1rem;">
              Make your payment on or before <b>20/06/2023</b> to the following bank account by mentioning <b>Aignite'23</b>. Send us a scanned copy of the payment slip to <b>ieeecis@univ.jfn.ac.lk</b> as soon as you make the payment.
            </p>
          
            <div class="mt-1">
            <table>
             <tr>
               <td></td>
               <td></td>
             </tr>
            </table>
         </div>
            <div class="my-8">
              <div class="mt-1">
              <h3 class="py-4 font-bold"> Bank Details</h3>
                 <table>
                  <tr>
                    <td>Account Name</td>
                    <td>IEEE-SB-UoJ</td>
                  </tr>
                  <tr>
                  <td>Bank & Branch</td>
                  <td>Bank of Ceylon, University of Jaffna </td>
                </tr>
                <tr>
                <td>Swift #</td>
                <td>BCEYLKLX002</td>
              </tr>
              <tr>
               <td>Bank account #</td>
               <td>86074141</td>
             </tr>
                 </table>
              </div>
             
            </div>

            <hr class="my-8">

            <div class="pack">
              <h3 class="">Registration includes following:</h3>
              <ul class="list-disc ml-8">
                  <li>Access to all lectures and hands-on training sessions.</li>
                  <li>Lunch, tea breaks, and a banquet dinner.</li>
                  <li>Nametag, T-shirt, notepad and a pen.</li>
                  <li>A certificate for participation in the “IEEE CIS-SBC-UoJ Summer School”.</li>
                </ul>
            </div>

            <div style="margin-top:2.4rem;" class="align-center">
              <a href="#" target="_blank" >
              <button  class="register-btn" style="width:15rem;height:3rem;color:#fff;background-color:#144272;border-radius:.2rem">
                Application is Closed
              </button>
              </a>
            </div>
  
  `;
};*/

const important = () => {
  content.innerHTML = `
    <h1>Important Dates</h1>
    <table class="important-dates mt-8">
      <tr>
        <td>
          Call For Student Applications
          <div style="margin:5px 0; padding-left:1.8em;">
            <a
              href="https://www.comsoc.org/education-training/ieee-comsoc-school-series/2025-ieee-comsoc-school-series-jaffna-sri-lanka-event"
              class="btn-link"
            >
              Learn More &amp; Register
            </a>
          </div>
        </td>
        <td>07 July 2025</td>
      </tr>
      <tr>
        <td>
          Call For Industry Workshop Applications
          <div style="margin:5px 0; padding-left:1.8em;">
            <a
              href="https://forms.gle/AEuttojA21mG7nKL7"
              class="btn-link"
              style="background-color:#861F41; color:#fff; padding:0.25em 0.5em; font-size:0.875rem; border-radius:0.25rem; display:inline-block;"
            >
              Learn More &amp; Register
            </a>
          </div>
        </td>
        <td>14 July 2025</td>
      </tr>
      <tr>
        <td>
          Call For Academic Workshop Applications
          <div style="margin:5px 0; padding-left:1.8em;">
            <a
              href="https://forms.gle/8yLif88aL31ZWER46"
              class="btn-link"
              style="background-color:#861F41; color:#fff; padding:0.25em 0.5em; font-size:0.875rem; border-radius:0.25rem; display:inline-block;"
            >
              Learn More &amp; Register
            </a>
          </div>
        </td>
        <td>14 July 2025</td>
      </tr>
      <tr>
        <td>Deadline For Applications</td>
        <td>14 July 2025</td>
      </tr>
      <tr>
        <td>Deadline For Registration</td>
        <td>20 July 2025</td>
      </tr>
      <tr>
        <td>Summer School Dates</td>
        <td>11–15 August 2025</td>
      </tr>
    </table>
  `;
};




const venue = () => {
  content.innerHTML = `
    <h1>Venue</h1>
    <p class="mt-8 color-black">
      Below are the two main venues where lectures will be conducted:
    </p>

    <div class="venue-block mt-6">
      <h3>Auditorium, Faculty of Agriculture, University of Jaffna</h3>
      <a
        href="https://maps.app.goo.gl/qLPib7jAXtDGV9KH8"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google Maps
      </a>
      <div class="map-holder mt-2">
        <iframe
          class="map"
          src="https://www.google.com/maps?q=Faculty%20of%20Agriculture%20University%20of%20Jaffna&output=embed"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <div class="venue-block mt-8">
      <h3>Jaffna Thiruvalluvar Cultural Center</h3>
      <a
        href="https://maps.app.goo.gl/73t8REDacPuWbCBs6"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google Maps
      </a>
      <div class="map-holder mt-2">
        <iframe
          class="map"
          src="https://www.google.com/maps?q=Jaffna%20Thiruvalluvar%20Cultural%20Center&output=embed"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  `;
};


const detailed = () => {
  content.innerHTML = `
  <!--
    <h1>Detailed Programme <p style="font-size:1rem"></p></h1>
        <table class="mt-8" style="width: 100%">
        <tr>
        <td style="font-size:2rem;text-align:left;" colspan="2"><b>Day 1 : July 12</b></td>

        </tr>
          <tr class="stripped">
            <td>08:00 – 08:30</td>
            <td>Registration</td>
          </tr>
          <tr >
            <td>08:30 – 09:00</td>
            <td>
            Inauguration </td>
          </tr>
          <tr class="stripped">
            <td>09:00 – 10:00</td>
            <td>
              <b>Fairness in AI: AI for Disadvantaged Communities </b> <br />
              Prof. Saman Halgamuge, Dr. Rajith Vidanaarachchi <br> & Dr. Maneesha Perera
              - <i>University of Melbourne</i>
            </td>
          </tr>
          <tr >
            <td>10:00 - 10:30</td>
            <td>
              Tea Break
            </td>
          </tr>
          <tr class="stripped">
            <td>10:30 - 11:30</td>
            <td>
              <b>Introduction to Machine Learning & Deep Learning
              </b>
              <br />
              Prof. M. Siyamalan - <i>University of Jaffna</i>
            </td>
          </tr>
          <tr >
          <td>11:30 - 13:00</td>
          <td>
          <b>Hands on Training : Developing ML/DL Models          </b> <br>
            Prof. M. Siyamalan - <i>University of Jaffna</i>
          </td>
        </tr>
        <tr class="stripped">
        <td>13:00 - 14:00</td>
        <td>
          Lunch
       
         </td>
      </tr>
      <tr >
      <td>14:00 - 15:00</td>
      <td>
       <b>Hands on Training : Developing ML/DL Models</b> <br>
       Prof. M. Siyamalan - <i>University of Jaffna</i>

      </td>
    </tr>
    <tr class="stripped">
            <td>15:00 - 16:00</td>
            <td>
              <b>Practicing Artificial Intelligence in Finance

              </b>
              <br />
              Dr. Subha Fernando - <i>University of Moratuwa</i>
            </td>
          </tr>
    <tr>
    <td>16:00 - 16:30</td>
    <td>
      Tea Break
    </td>

  </tr>
  <tr >
  <td>16:30 - 18:00</td>
  <td>
    <b> Hands-on Training: Developing ML/DL model</b>
    <br>
    Mr. Samudra Kanankearachchi - <i>99x</i>
  </td>
  </tr>
  </table>
  <hr style="width:40%;height:.5rem;margin:2rem auto;margin-top:4rem"/>
<table class="mt-8" style="width: 100%">
  
<tr>
  <td style="font-size:2rem;text-align:left;" colspan="2"><b>Day 2 : July 13</b></td>

</tr> 

  <tr class="stripped">
  <td>8:00 - 9:00</td>
  <td>
    <b> Building Computational Resources for Sri Lankan National Languages</b>
    <br />
    Prof. Gihan Dias - <i>University of Moratuwa</i>
  </td>
  </tr>
  <tr>
  <td>9:00 - 10:00</td>

  <td>
    <b>An overview of Natural Language Processing    </b>
    <br />
    Dr. K. Sarveswaran - <i>University of Jaffna</i>

   
  </td>
</tr>
<tr class="stripped">
  <td>10:00 - 10:30</td>
  <td>
    Tea Break
  </td>
</tr>
<tr>
  <td>10:30 - 13:00</td>
  <td>
    <b>Hands-on Training :  Developing Language Tools & Models</b>
    <br>
    Dr. E.Y.A Charles & Dr. K. Sarveswaran - <i>University of Jaffna</i>
    <br />
   
  </td>
</tr>
<tr class="stripped">
  <td>13:00 - 14:00</td>
  <td>
   Lunch & Group Photo
  </td>
</tr>
<tr>
  <td>14:00 - 16:00</td>
  <td>
  <b>Hands-on Training :  Developing Language Tools & Models</b>
  <br><br>
  
    <b>Democratizing LLMs with h2oGPT and H2O LLM Studio</b>
    <br>
    Mr. Sanjeepan Sivapiran & Mr. Praveen Sivakumar  - <i>H20.ai</i>
    <br>
    <br>
    <b>Dive into Automatic Machine Learning with H2O AutoML</b>
    <br>
    Mr. Mathanraj Sharma - <i>H20.ai</i>
  </td>
</tr>
<tr class="stripped">
  <td>16:00 - 16:30</td>
  <td>
   Tea Break
   
  </td>
</tr>
<tr>
  <td>16:30 - 17:30</td>
  <td>
    <b>Open Issues in Audio AI Privacy and Security    </b>
    <br />
    Prof. Jennifer Williams - <i>University of Southampton</i>

   
  </td>
</tr>
<tr class="stripped">
  <td>18:00 - 20:00</td>
  <td>
   Banquette Dinner
   
  </td>
</tr>
</table>
<hr style="width:40%;height:.5rem;margin:2rem auto;margin-top:4rem"/>

<table class="mt-8" style="width: 100%">
<tr >
<td style="font-size:2rem;text-align:left;" colspan="2"><b>Day 3 : July 14</b></td>
</tr>
<tr class="stripped">
  <td>8:00 - 9:00</td>
  <td>
   <b>Emerging Trends in IoT   </b>
   <br />
  Prof. Roshan Ragel - <i>University of Peradeniya</i>
   
  </td>
</tr>
<tr>
  <td>9:00 - 10:00</td>
  <td>
    <b>Hands-on Training : IoT</b>  
    <br />
    Dr. A. Kaneswaran, Mr. R. Valluvan & Mr. S. Suthakar - <i>University of Jaffna</i>
  </td>
</tr>
<tr class="stripped">
  <td>10:00 - 10:30</td>
  <td>
  Tea Break
   
  </td>
</tr>
<tr>
  <td>10:30 - 13:30</td>
  <td>
    <b>Hands-on Training : IoT</b>
    
    <br>
    Dr. A. Kaneswaran, Mr. R. Valluvan & Mr. S. Suthakar - <i>University of Jaffna</i>

    <br />
  </td>
</tr>
<tr class="stripped">
  <td>13:30 - 14:30</td>
  <td>
   Lunch
  </td>
</tr>     
<tr>
  <td>14:30 - 16:00</td>
  <td>
    <b>Industrial Norm on IoT and its Advancement in Healthcare, Agriculture and Manufacturing Ecosystems    </b>
    <br />
    Mr. R. Miller & Mr. B. Arunn - <i>SenzAgro Solution, Sri Lanka    </i>
  </td>
</tr>     
<tr class="stripped">
  <td>16:00 - 17:00</td>
  <td>
   <b>Introduction to Robotics   </b>
   <br/>
   Prof. Thrishantha Nanayakkara - <i>Imperial College London</i>
  </td>
</tr>     
<tr>
  <td>17:00 - 17:30</td>
  <td>
    Closing Ceremony
  </td>
</tr>          
 </table>
<hr style="width:40%;height:.5rem;margin:2rem auto;margin-top:4rem"/>
-->
    `;
};
function initial(loadContent) {
  switch (loadContent) {
    case "registration":
      registration();
      break;
    case "importantDates":
      important();
      break;
    case "venue":
      venue();
      break;
    case "detailedProgramme":
      detailed();
      break;
    default:
      registration();
  }

}
btnRegistration.addEventListener("click", registration);
btnImportantDates.addEventListener("click", important);
btnDetailed.addEventListener("click", detailed);
btnVenue.addEventListener("click", venue);
initial(window.location.search.split("?p=")[1])