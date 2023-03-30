import Head from 'next/head'

export default function Workshops(){

    const WorkshopsForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/14/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                        window.location.href = "/cruciallifechangingskills/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&leadsquared-mx_States=" + event.target.location.value +            
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-mx_Showed_Interest_in=" + event.target.slot.value +
            "&Notes=" + event.target.nots.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )

    }

    return(
        <>
        <Head>
            <title>Workshops - Crucial Life-Changing Skills</title>
            <meta name="description" content="DO YOU THINK VIRTUAL INSTRUCTOR-LED TRAINING IS NOT ENGAGING? Then, probably you haven’t attended a real one. Join our upcoming online, on-demand, and virtual courses, and gain new insights to... Read more"/> 
        </Head>
        <section class="about-section workshop-hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 contact-title"> 
                        <h1>DO YOU THINK VIRTUAL INSTRUCTOR-LED TRAINING IS NOT ENGAGING?</h1>
                        <p>Then, probably you haven’t attended a real one. Join our upcoming online, on-demand, and virtual courses, and gain new insights to develop crucial skills for better behavior, and results. Our trainings focus on the fundamentals of human behavior and its impact on productivity at Individual, team and organizational level.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        
   
     <section class="workshops">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 contact-title"> 
                        <h1>WORKSHOPS</h1>
                    </div>
                    
                    

                    {/* <div class="col-md-4 workshop-col d-none"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Mastering Dialogue</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> January 19th - 20th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>

                    <div class="col-md-4 workshop-col d-none"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content green-col"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>INFLUENCER</h4>
                            <p></p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date green-col"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> January 24th - 25th</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>

                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content phothemecolor"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4 className='pbb-20'>THE POWER OF HABIT</h4>                            
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> February 17th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                            <a href='#registered'><button class="register phothemecolor">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>

                    

                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Accountability</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> February 23rd - 24th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>

                    

                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>CRUCIAL CONVERSATIONS</h4>
                            <p>for Mastering Dialogue</p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> March 23rd - 24th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div>

                    <div class="col-md-4 workshop-col"> 
                       <div class="row workshop-row"> 
                            <div class="col-md-12 workshop-content green-col"> 
                            <img class="left-image img100px mbb-30" src="/classets/img/logo-influencer.svg" alt="" />
                            <h4>INFLUENCER</h4>
                            <p></p>
                            </div>
                            <h5 className='eventt'>Workshop</h5>
                             <div class="col-md-12 workshop-date green-col"> 
                            <h6><i class="fa fa-calendar" aria-hidden="true"></i> March 29th - 30th, 2023</h6>
                            <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                            <a href='#registered'><button class="register">REGISTER NOW</button></a>
                            </div>
                       </div>
                    </div> */}

                    
                    
                    <div id='registered' class="col-md-12 form-area workshop-form">
                                <form id="contactForm" class="row" onSubmit={WorkshopsForm}>
                                    <div class="col-lg-12 contact-title"> 
                        <h1>REGISTER NOW</h1>
                        <h6>OUR SUBJECT MATTER EXPERTS WILL CONNECT YOU WITHIN 24 WORKING HOURS TO SHARE PROGRAM DETAILS AND PRICING
                        </h6>
                     </div>
                                    <div class="col-md-6 col-6">
                                        <input type="text" name='name' placeholder="Your Name*"/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="email" name='email' placeholder="Your Email*"/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                    <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="text" name='organization' placeholder="Organization*"/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="text" name='designation' placeholder="Designation"/> 
                                    </div>
                                    <div class="col-md-6 col-6">                                    
                                        <select name='location' required>
                                        <option value="">Location</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Srilanka">Srilanka</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-6">                                        
                                        <select name='slot' required>
                                            <option value="">Pick any Slot*</option>                                            
                                            {/* <option value="The Power of Habit - February 17th, 2023">The Power of Habit - February 17th, 20233</option>
                                            <option value="Crucial Conversations for Accountability - February 23rd - 24th, 2023">Crucial Conversations for Accountability - February 23rd - 24th, 2023</option>
                                            <option value="Crucial Conversations for Mastering Dialogue - March 23rd - 24th, 2023">Crucial Conversations for Mastering Dialogue - March 23rd - 24th, 2023</option>
                                            <option value="Influencer - March 29th - 30th, 2023">Influencer - March 29th - 30th, 2023</option> */}
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-6">                                        
                                        <select name='referredby' required>
                                            <option value="">Referred by*</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Google Search">Google Search</option>
                                            <option value="Reference">Reference</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">                                         
                                       <textarea name='nots' placeholder="Your Message" rows="5"></textarea> 
                                    </div>
                                    <div class="d-none">
                                        <input type="text" name='Business_Entity' value="Crucial Life-Changing Skills"/> 
                                    </div>
                                    <div class="col-md-12">
                                    <input id='submitbuttonform' class="formbtn" type="submit" value="Submit"/>
                                    </div>
                                    <p id="showlabel" style={{ display: "none" }}></p>
                                </form>
                            </div>
                </div>
            </div>
        </section>
        </>
    )
}