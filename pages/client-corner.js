import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function ClientCorner(){

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/6/feedback');
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
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-mx_States=" + event.target.Location.value +
            "&leadsquared-Company=" + event.target.Organization.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value )

    }

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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

      var testmonials = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <>
          <Head>
            <title>Client Corner - BYLD Group</title>
            <meta name="description" content="Continuously adding value to our customer’s businesses! Continuously adding value to our customer’s businesses! Let us help you find the best resource for your company. Highly effective, employee screening process for hiring of blue-collared and entry-level staff. Highly effective, employee screening process for hiring of blue-collared and entry-level staff. Business Enquiry Submit Your Query Our… Continue reading Client Corner"/> 
          </Head>
            

          <div className="client-cornerbg ptt-50 pbb-50">
                <div className="container custom">
                    <div className="row y-middle">
                        <div className="col-md-7 col-sm-12">
                            <div className="content-wrap">                                
                                <h2 className="colorw">Continuously adding value to our customers' business!</h2>
                                <h3 className="colorw">Let us help you find the best resource for your company.</h3>
                                <h3 className="colorw">Highly effective, employee screening process for hiring of blue-collared and entry-level staff.</h3>
                                <div className="btn-part">
                                    <a className="clientcornnerbtnleft" href="/contact-us">Business Enquiry</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="bannerform">
                            <h2 className="formtitle">Submit Your Query</h2>                                
                            <form id="contact-form" className='clientcornner' onSubmit={registerUser}>                                         
                                    <div className="row">
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>   
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input type="text" name="Organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-lg-12 mb-12 d-none">
                                            <input type="text" name="leadsquared_mx_Business_Entity" placeholder="BYLD Group" value="BYLD Group" required />
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
                    </div>
                </div>
            </div>

            <div className="rs-about style2 clientcornnerlogo ptt-20">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                           <div className="pb-50">
                               <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center font30">Our Clientele</h4>
                                    <div className="heading-border-line center-style"></div>
                               </div>
                            <Slider {...settings}>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/l1.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/l2.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/l3.jpg"/>
                                    </div>
                                
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/l4.jpg"/>
                                    </div>
                               
                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/l5.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/l6.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/l7.jpg"/>
                                    </div>

                                    <div className='logoslider'>                                
                                        <img src="/assets/img/logos/l8.jpg"/>
                                    </div>
                                
                            </Slider>
                            </div>
                        </div>                  
                    </div>
                </div>                
            </div>

            <div className="rs-testimonial style4 bg16 ptt-30 pbb-70">
                <div className="container">
                    <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center colorw font30">Clients Speak</h4>
                        <div className="heading-border-line center-style"></div>
                    </div>
                    <div className="row">
                    <Slider {...testmonials}>
                        <div className="col-sm-4">
                            <div className="clientcornnertest">
                                <div className="testi-information">
                                    <div className="testi-name">Namita Shah</div>
                                    <span className="testi-title">(HSBC India)</span>
                                    <span className="testi-title">(Crucial Life Changing Skills Participant Testimonial)</span>
                                </div>
                                <div className="item-contents">
                                    <p>The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective</p>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="clientcornnertest">
                                <div className="testi-information">
                                    <div className="testi-name">Rangkynsai Nongbet</div>
                                    <span className="testi-title">(Ortho Clinical Diagnostics)</span>
                                    <span className="testi-title">(Blanchard® India Client Testimonial)</span>
                                </div>
                                <div className="item-contents">
                                    <p>We engaged their services for facilitating a session on SLII® for our 26 employees, who were members of the regional and local country leadership team spread across APAC, in Nov 2019. The objective of the learning program being enabling the leaders to drive change in the organization and have constructive & difficult conversations with their teams, ensuring the organizational goals are at the focal point of discussions.</p>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="clientcornnertest">
                                <div className="testi-information">
                                    <div className="testi-name">Nandini Upadhyay</div>
                                    <span className="testi-title">(Colgate)</span>
                                    <span className="testi-title">(YOMA)</span>
                                </div>
                                <div className="item-contents">
                                    <p>“I have partnered with YOMA for more than 2 years now and it has been a very pleasant experience. As a service provider, they keep customers at the focal point which truly makes them an invested stakeholder. I personally truly appreciate the agility of response and quest of problem-solving which helps YOMA continually raise the standards for themselves and improve. I look forward to many more years of this partnership and hope that it continually evolves and improves”.</p>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="clientcornnertest">
                                <div className="testi-information">
                                    <div className="testi-name">Rajinikanth.U</div>
                                    <span className="testi-title">(Agri Business)</span>
                                    <span className="testi-title">(Wiley)</span>
                                </div>
                                <div className="item-contents">
                                    <p>“The session on Five Behaviours by Mr. Amar was very informative session and an eye-opener for our executives.
Amar has brought the concept of Patrick Lencioni, in a wonderful way. And more over the importance of Team work was
Insisted and given pointers to improve 5 behaviours. Thank you very much for the session and sharing your expertise.”</p>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="clientcornnertest">
                                <div className="testi-information">
                                    <div className="testi-name">Prerna S</div>
                                    <span className="testi-title">(Birla Fertility and IVF)</span>
                                    <span className="testi-title">(Crucial Life Changing Skills  Participant Testimonial)</span>
                                </div>
                                <div className="item-contents">
                                    <p>Thankful to the team at Crucial Life Changing Skills for conducting a power packed session on the topic of “Influencer” for our leaders at CK Birla Group. The simple (and powerful) 6 sources of influence model will guide us to to drive change in our personal and professional space!</p>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="clientcornnertest">
                                <div className="testi-information">
                                    <div className="testi-name">Amit Kumar</div>
                                    <span className="testi-title">(BPCL)</span>
                                    <span className="testi-title">(YOMA)</span>
                                </div>
                                <div className="item-contents">
                                    <p>It has been a great experience with YOMA who have provided their services over the past few years. Very happy with their efficiency and professional work. Hats off to their customer support.</p>
                                </div>                                
                            </div>
                        </div>
                    </Slider>    
                         
                    </div>
                </div>
            </div>

            <div className="rs-about style2 clientcornnerlogo ptt-20">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                           <div className="">
                               <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center font30">Client Testimonials</h4>
                                    <div className="heading-border-line center-style"></div>
                               </div>                             
                            </div>
                        </div>
                        
                        <div className="col-sm-4">
                           <div className="innervideoshd">
                           <iframe width="100%" height="" src="https://www.youtube.com/embed/h9QXumwwniA"></iframe>
                                 <h3>Shalabh Srivatava Testimonial</h3>                           
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd">
                           <iframe width="100%" height="" src="https://www.youtube.com/embed/4OVE2D_mec4"></iframe>
                                 <h3>Crucial Conversations Testimonial</h3>                           
                            </div>
                        </div>

                        <div className="col-sm-4">
                           <div className="innervideoshd">
                           <iframe width="100%" height="" src="https://www.youtube.com/embed/Yon0KjySlMk"></iframe>
                                 <h3>Livpure’s Testimonial</h3>                           
                            </div>
                        </div>

                    </div>
                </div>                
            </div>

            
        </>
    )
}