import Head from 'next/head';
import Slider from "react-slick";

export default function CoachCertificationLP(){

    const EFgenericLP = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/22/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/eaglesflightindia/thank-you"
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
            "&slot=" + event.target.slot.value +                    
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value )
  
    }
    
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

    return(
        <>
          <Head>
            <title>Eagle’s Flight™ Generic LP</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
            
          <div className="icfbanner ptt-40 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className='clearfix'></div>
                        <div className='col-md-6'>
                            <div className='icfbannerbox2 text-center'>
                            <img className="icflogo220" src="/efassets/img/eagle.png" alt="ICFLOGO"/>
                            <h3 className="themecolor2 ptt-10 pbb-10">Let’s improve team building and decision-making with self-learning</h3>
                                <h4 className='font500'>Make Way for Corporate Transformation with Our Experiential Learning</h4>
                            </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='icfvideoborder'>
                          <iframe width="100%" height="370" src="https://www.youtube.com/embed/IgqNOgpmv64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="register" className='icfemibg ptt-40 pbb-40'>
                <div className='container'>
                    <div className='row y-middle'>                        
                        <div className='col-md-7'>
                            <h3 className='icfemih3'>Team building and time management are crucial components in a corporate environment. However, instilling the same in senior leaders is a daunting task.</h3>
                            <h4 className='icfemih4'>Eagle’s Flight offers various corporate team building games to boost productivity, behavioral change, and team work in a fun learning way.</h4>
                        </div>
                        <div className='col-md-5'>
                            <div className='ptt-10'>
                            <div className="bannerform">
                            <p>Fill in the form below and our subject matter expert will connect with you within 24 working hours.</p>
                            <form id="contact-form" className='clientcornner' onSubmit={EFgenericLP}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Name*" required />
                                        </div>                                        
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="E-mail*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="organization" placeholder="Company Name*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <select name="slot" required>
                                                <option value="">Pick up any Slot*</option>                                                
                                                {/* <option value="Eagle's Flight Executive Briefing: January 11th, 2023">Eagle's Flight Executive Briefing: January 11th, 2023</option> */}
                                                {/* <option value="Eagle's Flight Executive Briefing: March 8th, 2023">Eagle's Flight Executive Briefing: March 8th, 2023</option> */}
                                            </select>
                                        </div>
                                       
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="I’m Interested"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div className="ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-12">
                            <div className='text-center'>
                            <h4 className="themecolor2 pbb-30">Explore Experiential Learning with Our Programs</h4>
                            </div>
                            <Slider {...settings}>
                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/wind.png" alt="ICF ICONS"/>
                                    </div>
                                    <h4>Windjammer</h4>
                                    <p>
                                    Improve your business profitability with effective planning, goal setting, and execution with this team building activity.
                                    </p>
                                </div>
                                
                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/cms.png" alt="ICF ICONS"/>
                                    </div>
                                    <h4>Council Of The Marble Star</h4>
                                    <p>
                                    Master the art of productive relationships for higher productivity with this corporate team building game.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/rsc.png" alt="ICF ICONS"/>
                                    </div>
                                    <h4>Rattlesnake Canyon</h4>
                                    <p>
                                    Boost your team effectiveness and negotiation skills for optimum business results with this virtual fun activity.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/pp.png" alt="ICF ICONS"/>
                                    </div>
                                    <h4>Promises, Promises!</h4>
                                    <p>
                                    Unlock the impact of effective communication for maximum productivity with this virtual team building game.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/kk.png" alt="ICF ICONS"/>
                                    </div>
                                    <h4>King Kahufu</h4>
                                    <p>
                                    Build a cohesive and productive team with this immersive virtual experiential learning activity.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/gdk.png" alt="ICF ICONS"/>
                                    </div>
                                    <h4>Gold Of The Desert Kings</h4>
                                    <p>
                                    Learn to maintain a healthy balance between efforts versus productivity with this team building activity.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/eo.png" alt="ICF ICONS"/>
                                    </div>
                                    <h4>Expedition Outback</h4>
                                    <p>
                                    Learn to grab maximum business opportunities through better information management with this team activity.
                                    </p>
                                </div>

                                <div className='slbox text-center'>
                                    <div className='boximg'>
                                        <img src="/efassets/img/lpslider/mc.png" alt="ICF ICONS"/>
                                    </div>
                                    <h4>Museum Caper</h4>
                                    <p>
                                    Employ effective communication and timely feedback for team building with this immersive virtual activity.
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <section className='icflastrow ptt-40 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                        <h4 className="themecolor2 pbb-30">Know what our clients have to say</h4>
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/ZAQNmqKkkRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='ptt-20 pbb-20'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                    <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">Our Upcoming Programs</h4>
                        <div className="heading-border-line center-style"></div>
                    </div>
                    </div>
                    <div className='clearfix'></div>

                    

                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar January 11th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Eagle's Flight™ Executive Briefing</h3>
                                <h5>Complimentary Webinar</h5>
                                <a className="eventbtn" href='#register'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> */}

                    

                    {/* <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar March 8th, 2023</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Eagle's Flight™ Executive Briefing</h3>
                                <h5>Complimentary Webinar</h5>
                                <a className="eventbtn" href='#register'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div> */}

 
                </div>
            </div>
        </section>
        </>
    )
}


