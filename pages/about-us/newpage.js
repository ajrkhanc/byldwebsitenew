import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CountUp from 'react-countup';
import React from 'react';




export default function Home() {

    var settings = {
        dots: false,
        arrows: true,
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
                    window.setTimeout(function () {
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
            "&textarea=" + event.target.leadsquared_Notes.value)

    }

    return (
        <>


            <Head>
                <title>Law Firm Website | BYLD Group</title>
                <meta name="description" content="Law Firm Website" />
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(30000).fadeIn();
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
                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs lawfirms">
                <div class="container">
                    <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
                        <ul>
                            <li>
                                <a href="/">
                                    <span>Home</span>
                                </a>
                                <span class="separator">/</span>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Law Firm Website</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-7'>
                            <div class="breadcrumbs-inner">
                                <span class="watermark ">BYLD</span>
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    Get Your Certification Today
                                </h1>
                                <span class="sub-text wow fadeInUp delay-0-2s animated animateUP">
                                    People are the best source of solutions to their own problems and aspirations. Coach is there to help and accelerate the journey to destination or solution.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <section className='solutionrow ptt-60 pbb-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Model</h2>
                        </div>
                    </div>
                    <div className='row zindx'>

                        <div className='col-sm-12 zindx'>
                            <div className='row align-items-center'>
                                <div className='col-sm-6'>
                                    <div className='wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/model1.png" alt="images" />
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                                        This coaching model is designed to help clients develop a clear understanding of their situation, set specific goals, measure progress, and take action towards success. This model is supported by Problem solving tools at various steps.
                                    </p>
                                    <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                                        <Link href="#know-more"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>

                </div>
            </section>

            <div className="rs-about style2 logosl ptt-50 pbb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="pb-50  text-center">
                                <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Modules</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row mmssb'>
                        <div className='col-sm-12'>
                            <div className='text-center'>
                                <div className='minnerb wow fadeInUp delay-0-2s animated animateUP'>
                                    <h3>Time - 130 hrs</h3>
                                    <h4> Max students - 20 </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mmssb2'>
                        <div className='col-sm-6 zindexx'>
                            <div className='moduleinner'>
                                <h3 className='wow fadeInUp delay-0-2s animated animateUP'>Coaching Foundation  Module 1</h3>
                                <img className='wow fadeInUp delay-0-2s animated animateUP' src="/assets/img/new/frame.jpg" alt="images" />
                            </div>
                        </div>
                        <div className='col-sm-6 zindexx    '>
                            <div className='moduleinner'>
                                <h3 className='wow fadeInUp delay-0-2s animated animateUP'>Coaching for Performance Module II</h3>
                                <img className='wow fadeInUp delay-0-2s animated animateUP' src="/assets/img/new/model2.png" alt="images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center pbb-30'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP"><h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Emotional Intelligence Based Coaching</h2></h2>
                        </div>
                        <div className='clearfix'></div>

                        <div className='col-sm-8'>
                            <div>
                                <table className='mtblc wow fadeInUp delay-0-2s animated animateUP'>
                                    <tr>
                                        <th className='texttrasc' width='10px'></th>
                                        <th>Recognition</th>
                                        <th>Regulation</th>
                                    </tr>
                                    <tr>
                                        <td className='texttras'><p>Personal Competence</p></td>
                                        <td>
                                            <h3>Self-Awareness</h3>
                                            <ul>
                                                <li>Self-confidence</li>
                                                <li>Awareness of your emotional  state</li>
                                                <li>Recognizing how your behavior impacts othres</li>
                                                <li>Paying attention to how others influence your emotional state</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <h3>Self-Management</h3>
                                            <ul>
                                                <li>Keeping disruptive emotions and impulses in check</li>
                                                <li>Acting in congruence with your values</li>
                                                <li>Handling change flexibly</li>
                                                <li>Pursuing goals and opportunities despite obstacles and setbacks</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'><p>Social Competence</p></td>
                                        <td>
                                            <h3>Social Awareness</h3>
                                            <ul>
                                                <li>Picking up on the mood in the room</li>
                                                <li>Caring what others are going through</li>
                                                <li>Hearing what the other person is "really" saying</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <h3>Relationship Management</h3>
                                            <ul>
                                                <li>Getting along well with others</li>
                                                <li>Handling conflict effenctively</li>
                                                <li>Clearly expressing ideas/information</li>
                                                <li>Using sensitivity to another persons feeling (empathy) to manage interactions successfully</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='helpm'>
                                <h3>Helps in :</h3>
                            </div>
                            <div className='helpsb mbb-30 wow fadeInUp delay-0-2s animated animateUP'>
                                <img src="/assets/img/new/lifec.png" alt="images" />
                                <h4>Life Coaching</h4>
                            </div>

                            <div className='helpsb wow fadeInUp delay-0-2s animated animateUP'>
                                <img src="/assets/img/new/relationshipc.png" alt="images" />
                                <h4>Relationship Coaching</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="rs-team" className='style2 solutionrow ptt-60 pbb-60 rsteam'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-8 text-center'>
                            <h2 class="title pbb-100 mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP pbb-30">Program Directors</h2>
                        </div>
                    </div>
                    <div className='row zindx'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-8'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='innerteamc  mtt-30'>
                                        <div className='teamimgc1'>
                                            <a target="_blank" href="/yogesh-sood"><img src="/assets/img/team/yogesh-sood.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a target="_blank" href="/yogesh-sood">Yogesh Sood</a>
                                            </div>
                                            <span className="post">ACTP, MCC (ICF)</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/yogesh-sood/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className='teampera'>
                                            <p>CMD, BYLD Group, Blanchard International India, and founder of first SEA chapter of ICF in 2004</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-sm-6'>
                                    <div className='innerteamc mtt-30'>
                                        <div className='teamimgc1'>
                                            <a href="#"><img src="/assets/img/team/sandeep.jpg" alt="" /></a>
                                        </div>
                                        <div className="team-info">
                                            <div className="name">
                                                <a href="#">Sandeep Budhiraja</a>
                                            </div>
                                            <span className="post">Certified Master Trainer – ICF Coaching Curriculum, PMC Global™ | Master Facilitator DTCI ViLT | Certified ICF ACC Coach</span>
                                        </div>
                                        <div>
                                            <ul className="social-icon">
                                                <li><a target="_blank" href="https://www.linkedin.com/in/sanbuds/"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className='teampera'>
                                            <p>Certified trainer for Self Track and Other's Track from Partners in Leadership. Global leader in Accountability Training.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>

                </div>
            </section>


            <section className='solutionrow ptt-60 pbb-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>

                        </div>
                    </div>
                    <div className='row zindx'>

                        <div className='col-sm-12 zindx'>
                            <div className='row align-items-center'>
                                <div className='col-sm-6'>
                                    <div className='wow fadeInUp delay-0-2s animated animateUP'>
                                        <img src="/assets/img/new/cc1.png" alt="images" />
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='pll-20'>
                                    <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Program Details</h2>
                                    <ul className='programul ptt-20'>
                                        <li>Program Starts : (May onwards)</li>
                                        <li>Language : English</li>
                                        <li>Delivery Method: Combination (face-to-face, webinar, telephonic, combination)</li>
                                        <li>Program is for : HR, Learning Professionals, Freelancers,Managers</li>
                                        <li>Prerequisite : Graduation</li>
                                    </ul>

                                    <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                                        <Link href="#know-more"><a className="readon2">Know More <div className="btn-arrow"></div></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='clearfix'></div>
                    <div className='solutionarrowbox1'>
                        <img src="/assets/img/homeb/orangearrow.png" />
                    </div>
                    <div className='solutionarrowbox2'>
                        <img src="/assets/img/homeb/bluearrow1.png" />
                    </div>

                </div>
            </section>




            <section className='aboutmap ptt-50 pbb-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 text-center pbb-30'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Our Upcoming Training schedule</h2>
                        </div>
                        <div className='clearfix'></div>

                        <div className='col-sm-12'>
                            <div>
                                <table className='mtblc wow fadeInUp delay-0-2s animated animateUP width100p'>
                                    <tr>
                                        <th>Dates</th>
                                        <th>Time</th>
                                        <th>Events Name</th>
                                        <th>Book Know</th>
                                    </tr>
                                    <tr>
                                        <td className='texttras'>16 April 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>Virtual Training Apollo3</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>17 June 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>Harnessing Creative Intelligence</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>30 May 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>Five Behaviour - Course Preview</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>20 June 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>DISC Train-the-Trainer (TTT)</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>12 May 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>The SLII Experience™ - Face to Face</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>

                                    <tr>
                                        <td className='texttras'>29 April 2023</td>
                                        <td>10:30 AM to 5:00 PM</td>
                                        <td>Everything DISC - Virtual Course Preview</td>
                                        <td><a href='#'>Register Now</a></td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <div id='know-more' class="homecon ptt-60">
                <div class="container">
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get in touch</h2>
                        </div>
                        <div className='col-sm-9'>
                            <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                                Avail the development stream that is essential for your professional requirement. For more information, feel free to fill the form and we will get back to you
                            </p>
                        </div>
                    </div>

                    <div class="row y-middle">
                        <div class="col-lg-5 md-mb-50">
                            <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                                <img src="/assets/img/homeb/contactl.png" alt="Contact" />
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="contact-wrap">
                                <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                                    <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                                        <div className="row">
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="name" placeholder="Enter Name*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="email" name="email" placeholder="Enter Email*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="Location" placeholder="Location" />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="organization" placeholder="Organization" />
                                            </div>
                                            <div className="col-sm-6 mb-12">
                                                <input className='borrr' type="text" name="designation" placeholder="Designation*" required />
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
                                                <input id="submitbuttonform" className="clientcornnerbtn bord0" type="submit" value="Submit" />
                                            </div>
                                            <p id="showlabel" style={{ display: "none" }}></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
