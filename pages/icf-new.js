import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function Home() {

    const [modalOpen1, setModalOpen1] = React.useState(false);
    const whitp1 = async event => {
        const coursename = 'White Paper';
        event.preventDefault()
        document.getElementById("submitbuttonform1").value = "Submitting...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/115/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/assets/pdf/challenges-and-recommendations-for-auto-industry.pdf"
                    });

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("name=" + event.target.name.value +
            "&youremail=" + event.target.email.value +
            "&coursename=" + coursename)
    }



    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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

    return (
        <>
            <Head>
                <title>Eagle’s Flight | Experiential Learning | BYLD Group</title>
                <meta name="description" content="Eagle’s Flight offers corporate team building games in a virtual immersive learning environment for effective self-learning. To know more, check out the page." />
                <link rel="stylesheet" type="text/css" href="/efassets/css/new.css" />
            </Head>

            <Modal className='toppc mwc500' toggle={() => setModalOpen1(!modalOpen1)} isOpen={modalOpen1} backdrop="static" keyboard={false}>
                <button aria-label="Close" className="close popcl" type="button" onClick={() => setModalOpen1(!modalOpen1)}>
                    <span aria-hidden={true}>×</span>
                </button>

                <ModalBody>
                    <form id='contactForm' class="row popupfc ccl" onSubmit={whitp1}>
                        <h4>Any title</h4>
                        {/* <h5>Please Register to download </h5> */}
                        <div class="col-md-12">
                            <input type="text" name="name" class="form-control" placeholder="Enter Name*" required />
                        </div>
                        <div class="col-md-12">
                            <input type="email" name="email" class="form-control" placeholder="Enter Email*" required />
                        </div>
                        <div className="col-sm-6 mb-12">
                            <input type="text" name="phone" class="form-control" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                        </div>
                        <div className="col-sm-6 mb-12">
                            <input type="text" name="organization" class="form-control" placeholder="Organization*" required />
                        </div>
                        <div className="col-lg-12 mb-12">
                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                        </div>
                        <div class="col-md-12 text-center">
                            <input id='submitbuttonform1' class="formbtn" type="submit" value="Submit" />
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </ModalBody>
            </Modal>

            <section className='videosection'>
                <div class="videowrapper">
                    <video src="/efassets/img/video/video.mp4" autoPlay muted loop type="video/mp4"></video>
                </div>

                <div className='container ggt'>
                    <div className='row'>
                        <div className='col-sm-8'></div>
                        <div className='col-sm-4'>
                            <div>
                                <h1>ARE YOU ASPIRING TO BE A CERTIFIED COACH?</h1>
                                <a className='efnebtn' href='/coaching/become-a-professional-coach-marketing'>Take Assessment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div class="rs-about style4 bg21 mtt-60">
                <div class="container">
                    <div class="row y-middle">
                        <div class="col-lg-7">
                            <div class="sec-title3 mbb-35 text-left onlyshd">
                                <h4 class="countertoph2 text-left font36">ABOUT OUR FIRM</h4>
                                <div class="heading-border-line left-style"></div>
                                <p class="mtt-40 font-20">
                                    Largest Training & Consulting company that helps certify leaders as Coaches based on <b>ICF approved</b> Curriculum licensed by Aster Coaching LLC (USA).
                                </p>
                                <div className='rs-estimate'>
                                    <ul className="estimate-info mtt-5 font-20 listhight">
                                        <li>Competitively priced program with the highest return on investment.</li>
                                        <li>Helped <b>600+</b> professionals from various industries</li>
                                    </ul>
                                </div>
                                <a className='dbro' href='#'>Download Brochure</a>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="about-img"><img src="/efassets/img/business-team-building.svg" alt="images" /></div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="rs-project style2 efhbg mtt-40 ptt-30 pbb-60">
                <div class="container">
                    <div class="row">
                        <div className='col-sm-12'>
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font30">Reasons To Choose BYLD</h4>
                                <div className="heading-border-line center-style mbb-50"></div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="rcbyldbox rcby1">
                                <h3><span>100%</span> Online (ViLT)</h3>
                            </div>
                            <div class="rcbyldbox  rcby2">
                                <h3>Guaranteed Peer coaching assistance</h3>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="rcbyldbox  rcby3">
                                <h3>Coaches Trained</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby4">
                                <h3><span>9+</span> Years of Experience</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="rcbyldbox  rcby5">
                                <h3><span>10 hours</span> of mentor Coaching included</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby6">
                                <h3><span>100%</span> Pass Results for CKA</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="rcbyldbox  rcby7">
                                <h3>ICF Accredited Coaches</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby8">
                                <h3>Unlimited access Online Mock assessments</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="shape-bg ptt-50 pbb-40 solutionsboxarea">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font30">About BYLD Group</h4>
                                <div className="heading-border-line center-style mbb-30"></div>
                            </div>

                            <div className='testmm'>
                                <Slider {...settings}>
                                    <div class="innertest">
                                        <div class="item-content">
                                            <div className='testmicon1'>
                                                <img src="/efassets/img/t1.png" alt="Testimonial" />
                                            </div>
                                            <div className='testmh'>
                                                <h3>Why ICF certification is imperative?</h3>
                                            </div>
                                            <div className='testmp'>
                                                <p>
                                                    The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                                                </p>
                                            </div>
                                            <div className='testmicon2'>
                                                <img src="/efassets/img/t2.png" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="innertest">
                                        <div class="item-content">
                                            <div className='testmicon1'>
                                                <img src="/efassets/img/t1.png" alt="Testimonial" />
                                            </div>
                                            <div className='testmh'>
                                                <h3>Who can consider the ICF accredited certification program?</h3>
                                            </div>
                                            {/* <div className='testmp'>
                                                <p>
                                                    The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                                                </p>
                                            </div> */}
                                            <div className='rs-estimate'>
                                                <ul className="estimate-info mtt-5 font-20 listhight">
                                                    <li>HR heads, HR managers, Training managers, Trainers, and Consultants</li>
                                                    <li>Business Heads, Directors, General Managers, Managers, and Entrepreneurs</li>
                                                    <li>CEOs, Senior leaders, Line Managers, Team Leaders, Supervisors, and all other C-suit executives.</li>
                                                </ul>
                                            </div>
                                            <div className='testmicon2'>
                                                <img src="/efassets/img/t2.png" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </div>

                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-testimonial style4 homebgcontactus">
                <div className="container-fluid pa0">
                    <div className="row">
                        <div className="clearfix"></div>
                        <div className="col-sm-6 brodbg">
                            <h2>Passionate About Coaching?</h2>
                            <h3>Enroll for our upcoming 39th Batch!</h3>
                            <h4>STARTING  22ND APRIL <br></br>10:00 AM TO 4:00 PM</h4>
                        </div>
                        <div className="col-sm-6 brod2bg">
                            <div className="bannerform">
                                <form id="contact-form" className='clientcornner ptt-40 pbb-20'>
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
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Reference">Reference</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Registered" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="ptt-60 pbb-50">
                <div className="container">
                    <div className="row ">
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4 text-center'>
                            <img src="/efassets/img/teststar.png" alt="Testimonial" />
                        </div>
                    </div>

                    <div className="row ptt-40">
                        <div className='col-sm-4 nntestb'>
                            <div className='newtest'>
                                <h3>Rajat Sharma</h3>
                                <p>It’s been a true inspiration for me to attend the coach certification program. It has been a very exhilarating journey.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 nntestb'>
                            <div className='newtest'>
                                <h3>Suresh Sharma</h3>
                                <p>It’s been a true inspiration for me to attend the coach certification program. It has been a very exhilarating journey.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 nntestb'>
                            <div className='newtest'>
                                <h3>Rahul Sharma</h3>
                                <p>It’s been a true inspiration for me to attend the coach certification program. It has been a very exhilarating journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="rs-faq" class="rs-faq ptt-60 pbb-50">
                <div className="container">
                    <div className="row ">
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4 text-center'>
                            <img src="/efassets/img/faqs.png" alt="Testimonial" />
                        </div>
                    </div>

                    <div className="row ptt-40">
                        <div className='col-sm-12 faqss'>
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is included in the fees of the course?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            The fees of the Coaching Certification includes facilitation fees for Classroom Sessions (Virtual Instructor led) and Asynchronous learning Sessions. We also offer 10 hrs of ‘Mentor Coaching’ sessions, along with ‘Peer Coaching Support’ with unlimited access to Mock Tests for CKA ( now replaced with the new Credentialing Exam). That’s not all, we provide flexible finance options with interest free EMIs. Moreover, various other certifications & programs worth more than Rs. 1 Lakh are complimentary with the course.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            In Addition to the coaching sessions, what else is included in the program?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            In addition, we offer you the following certifications and programs worth more than Rs. 1 lakh, as complimentary :<br></br>

                                            ‘Emotional Intelligence Train the Trainer’ certification.<br></br>
                                            25 free EQ assessments for your coaching assignments.<br></br>
                                            Free Workshop on setting up your coaching practice or profession.<br></br>
                                            ‘Advance Learning Professional Certification’ program (a 3 months certification course).<br></br>
                                            These certifications can be availed anytime within 6 months.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Are there easy finance options available?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            To reduce your upfront payment burden, we offer ‘Interest Free EMIs’, where you only pay 3 EMIs as advance payment. The rest can be paid over 6/9/12 months depending on the finance institution’s loan tenure scheme.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Does the institute provide mentor coaching hours or do we have to pay extra?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            At no additional cost, we offer 10 hrs of Mentor Coaching along with ‘Guaranteed Peer Coaching’ assistance and strong back-end support access to Master Coach / Facilitator. This will help you speed up your coaching journey and help establish coaching practice whether inside your organization or as a professional coach.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How well experienced are the Master Coaches/ Instructors?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            The International Master Coaches who conduct this training are very seasoned coaches with close to 30 years of coaching experience between the two of them. In association with Aster Coaching US (Accredited by ICF), we take pride in sharing with you that we certify and develop high-caliber coaches who meet global standards and are in tune with local, regional and global business practices.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is the flexibility of the Coaching Program?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Keeping in mind one’s work schedule, we offer ViLT sessions on weekends per your convenience. This helps in finishing classroom credits without work being affected. In case of any unforeseen challenges, you can also opt to discontinue the batch and continue later with the next upcoming batch, at no additional Cost.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>


            <div class="ptt-60 pbb-50 lastcc">
                <div className="container">
                    <div className="row ">
                        <div className='col-sm-12 text-center'>
                            <h2>Still have a doubt about coaching ?</h2>
                            <a className='talkbtn' onClick={() => setModalOpen1(!modalOpen1)}>TALK TO US</a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
