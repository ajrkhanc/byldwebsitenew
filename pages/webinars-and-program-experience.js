import Head from 'next/head'

export default function WebinarsAndProgramExperience(){

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/15/feedback');
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
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.Designation.value +
            "&leadsquared-mx_States=" + event.target.Location.value +
            "&leadsquared-mx_Showed_Interest_in=" + event.target.leadsquared_mx_Showed_Interest_in.value +
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.QuestionsComments.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value )

    }

    return(
        <>
        <Head>
            <title>Webinars and Program Experience - BYLD Group</title>
            <meta name="description" content="Batches till 20th April 2022 Crucial Life Changing Skills Batches till 20th April 2022 Reserve Your Seat Batches till 29th April 2022 Blanchard India Webinars Batches till 29th April 2022 Reserve Your Seat May 4th, 2022Trapologist at WorkTM Webinar 4th May 2022 Reserve Your Seat Webinar May 6th, 2022Five Behaviours Team Development Webinar 6th May… Continue reading Webinars and Program Experience"/>
        </Head>

        <section className='ptt-20 pbb-20'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                    <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">Register For Your Complimentary Virtual Events</h4>
                        <div className="heading-border-line center-style"></div>
                    </div>
                    </div>
                    <div className='clearfix'></div>







                    <div className='col-sm-4 d-none'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar December 16th, 2022</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Everything DiSC Productive Conflict Webinar</h3>
                                <a className="eventbtn" target="_blank" href='/everythingdisc/everything-disc-productive-conflict-webinar'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div>



                    


                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar January 20th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>Lumina Spark</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar February 3rd, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>The Five Behaviors<sup>®️</sup> Personal Development</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar February 15th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 4.00 PM to 5.00 PM</h4>
                                <h3>Crucial Life Changing Skills Webinar</h3>
                                <a className="eventbtn" href='/cruciallifechangingskills/webinars/'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar February 17th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>The Five Behaviors<sup>®️</sup> Team Development</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar March 17th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>Agile EQ Virtual Course Preview</h3>
                                <a className="eventbtn" target="_blank" href='/everythingdisc/everything-disc-agile-eq-webinar'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 5th April, 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Everything DISC- Overview - Virtual Course Preview</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar - Friday, April 14th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 11:00 AM -12:00 PM</h4>
                                <h3>Virtual Training Apollo3</h3>
                                <a className="eventbtn" href='/jenson-8'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar Friday, April 14th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 11:00 AM -12:00 PM</h4>
                                <h3>Harnessing Creative Intelligence</h3>
                                <a className="eventbtn" href='/tirian-lp'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar Wednesday, 26th April 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 11 am - 12 pm</h4>
                                <h3>Five Behaviour - Overview, Virtual Course Preview</h3>
                                <a className="eventbtn" href='#Register'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div>

                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar March 8th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                            <h4 className="eventtitlec">Time: 03:00 PM - 04:00 PM</h4>
                                <h3>Eagle’s Flight Executive Briefing</h3>
                                <a className="eventbtn" href='/eaglesflightindia/ef-generic-lp'>Reserve Your Seat</a>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </section>

        <div id="Register" className="rs-testimonial style4 tirianformbg ptt-50 pbb-70">
                <div className="container">
                    <div className="row">
                         <div className="clearfix"></div>

                         <div className='col-sm-2'></div>
                         <div className="col-sm-8">
                         <div className="bannerform tirianformshd">
                            <form id="contact-form" className='clientcornner ptt-5 pbb-20' onSubmit={registerUser}>
                                    <div className="row">
                                      <div className='col-sm-12'>
                                      <div className="sec-title3 mbb-35 text-center">
                                        <h4 className="countertoph2 text-center font30">Register Now</h4>
                                        <div className="heading-border-line center-style"></div>
                                    </div>

                                      </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Enter Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <select name="leadsquared_mx_Showed_Interest_in" required>
                                                <option value="">Pick up any Slot*</option>
                                                {/* <option value="6th January 2023 - Everything DiSC Work of Leaders Webinar">6th January 2023 - Everything DiSC Work of Leaders Webinar</option> */}

                                                {/* <option value="Lumina Spark – January 20th, 2023">Lumina Spark – January 20th, 2023</option> */}
                                                {/* <option value="The Five Behaviors®️ Personal Development – February 3rd, 2023">The Five Behaviors®️ Personal Development – February 3rd, 2023</option> */}
                                                {/* <option value="The Power of Habit – February 15th, 2023">The Power of Habit – February 15th, 2023</option>
                                               <option value="The Five Behaviors®️ Team Development – February 17th, 2023">The Five Behaviors®️ Team Development – February 17th, 2023</option> */}
                                                
                                                <option value="Everything DISC - Overview – April 5th, 2023">Everything DISC - Overview – April 5th, 2023</option>
                                                <option value="Virtual Training Apollo3 – Friday, April 14th, 2023">Virtual Training Apollo3 – Friday, April 14th, 2023</option>
                                                <option value="Harnessing Creative Intelligence – Friday, April 14th, 2023">Harnessing Creative Intelligence – Friday, April 14th, 2023</option>
                                                <option value="Five Behaviour - Overview, Virtual Course Preview, 26th April 2023">Five Behaviour - Overview, Virtual Course Preview, 26th April 2023</option>
                                                {/* <option value="8th March 2023 - Eagle’s Flight Executive Briefing">8th March 2023 - Eagle’s Flight Executive Briefing</option> */}
                                            </select>
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By*</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Reference">Reference</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6 mb-12 d-none">
                                            <select name="leadsquared_mx_Business_Entity" required>
                                                <option value="BYLD Group">BYLD Group</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="QuestionsComments" placeholder="Questions/Comments:"></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Get in Touch"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                            </form>
                            </div>
                         </div>

                         <div className='col-sm-2'></div>

                    </div>
                </div>
            </div>
        </>
    )
}