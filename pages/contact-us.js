import Head from 'next/head'

export default function ContactUs(){
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/11/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                        window.location.href = "/thank-you"
                     }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&tel=" + event.target.phone.value +
            "&location=" + event.target.Location.value +
            "&Company=" + event.target.organization.value +
            "&Designation=" + event.target.designation.value +
            "&Product=" + event.target.product.value +
            "&referredby=" + event.target.referredby.value +
            "&textarea=" + event.target.leadsquared_Notes.value )

    }
    return(
        <>
        <Head>
            <title>Contact Us - BYLD Group</title>
            <meta name="description" content="Contact US Have a question? Call us now 1800-102-1345 +91-124-2666030 Need support? Drop us an email info@byldgroup.com Reach out to us! Unit No. 629-634, 6th Floor, Vipul Trade Centre, Sohna Road, Sector -48, Gurgaon – 122018, Haryana (India). GET IN TOUCH FILL THE FORM BELOW"/>
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(5000).fadeIn();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
            }}
          />
        </Head>
        <div class="contactusbg">
        <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='pagetitle text-left'>
                    <h1>Contact Us</h1>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div class="rs-services style1 reverse">
                <div class="container">
                    <div class="row service-wrap mr-0 ml-0">
                        <div class="col-lg-4 padding-0">
                            <div class="service-grid">
                                <div class="service-icon mb-23">
                                    <img src="/assets/img/icon/call.png" alt=""/>
                                </div>
                                <h4 class="title mb-18 font20 contacticonh">Have a question? Call us now</h4>
                                <div class="desc mb-12">
                                    <a href="tel:1800-102-1345">1800-102-1345</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 padding-0">
                            <div class="service-grid">
                                <div class="service-icon mb-23">
                                <img src="/assets/img/icon/email.png" alt=""/>
                                </div>
                                <h4 class="title mb-18 font20 contacticonh">Need support? Drop us an email</h4>
                                <div class="desc mb-12">
                                    <a href="mailto:info@byldgroup.com">info@byldgroup.com</a>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 padding-0">
                            <div class="service-grid br-none bdru">
                                <div class="service-icon mb-23">
                                <img src="/assets/img/icon/map.png" alt=""/>
                                </div>
                                <h4 class="title mb-18 font20 contacticonh">Reach out to us!</h4>
                                <div class="desc mb-12">
                                BYLD Group: 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-testimonial style4 bg16 ptt-30 pbb-70">
                <div className="container">                   
                    <div className="row">                    
                         <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center">
                                <span className="colorw font20">GET IN TOUCH</span>
                                <h4 className="countertoph2 text-center colorw font30">FILL THE FORM BELOW</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                         </div>
                         <div className="clearfix"></div>
                         {/* <div className="col-sm-1"></div> */}
                         <div className="col-sm-7">
                         <div className="bannerform">
                            <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Enter Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location" />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <select name="product" required>
                                                <option value="">Product / Services</option>
                                                <option value="Sales and Services">Sales and Services</option>
                                                <option value="Coaching">Coaching</option>
                                                <option value="Assessments">Assessments</option>
                                                <option value="Leadership and Performance">Leadership and Performance</option>
                                                <option value="Experiential Learning">Experiential Learning</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Website">Website</option>
                                                <option value="Reference">Reference</option>
                                                <option value="Sales Representative">Sales Representative</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                         </div>
                         <div className="col-sm-5">
                         <div className="cmap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14037.642076595946!2d77.0416708!3d28.4068673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x784abf10032f4ea1!2sBYLD%20Group%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1650816695732!5m2!1sen!2sin" width="100%" height="415" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                         </div>
                    </div>
                </div>
            </div>

            <div class='popup wow fadeInUp delay-0-10s animated animateUP'>
                <div class='cnt223 pa00'>
                <a href='' class='close popupclose'>X</a>
                <div className='popupinner'>
                <a target="_blank" href="https://www.linkedin.com/company/byld-group/"><img src="/assets/img/linkedpopup.jpg"/></a>
                </div>
                </div>
            </div>
        </>
    )
}