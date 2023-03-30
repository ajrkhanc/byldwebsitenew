import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function DTCICoachingAcademy() {

  const registerUser = async event => {
    event.preventDefault()
    document.getElementById("submitbuttonform").value = "Submitting form...."
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    }
    xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/85/feedback');
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
    xhttp.send("fname=" + event.target.fname.value +
      "&lname=" + event.target.lname.value +
      "&email-721=" + event.target.email.value +
      "&phone=" + event.target.phone.value +
      "&Companyname=" + event.target.organization.value +
      "&wheredidyoucome=" + event.target.referredby.value +
      "&QuestionsComments=" + event.target.QuestionsComments.value)

  }



  return (
    <>
      <Head>
        <title>Become a Coach - BYLD Group</title>
        <meta name="description" content="When you think of becoming a coach – Think BYLD" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9D9QEXG1BB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9D9QEXG1BB');
                `,
          }}
        />
      </Head>

      <section className='icfmain'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='pagetitle text-center'>
                <h1>Become a Coach</h1>
                <p>When you think of becoming a coach – Think BYLD</p>
                <div class="btn-part ptt-10 pbb-30">
                  <a class="readon2" href="/coaching/become-a-professional-coach-marketing">Take Assessment <div class="btn-arrow"></div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rs-about style2 ptt-40 pbb-40">
        <div className="container">
          <div className="row">
            <div className='col-sm-6 icfbg'>
              <div className='sec-title3 icfbh4'>
                <h4 className="">Why ICF certification is imperative?</h4>
                <div className="heading-border-line left-style jencolor"></div>
              </div>
              <p className='text-justify ptt-20 icfpc'>
                If you are a professional wishing to strengthen your current profile and boost your future prospects or you are one of those looking for a second carrier option, then you should consider the ICF coach certification program. Anyone aspiring to become a professional coach can benefit from being an ICF credentialed coach.
              </p>
            </div>

            <div className="col-sm-6">
              <div className="icfimglb">
                <img src='/assets/img/icfleft.jpg' alt="dt-dr" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='ptt-40 pbb-30 jenson8section1'>
        <div className='container'>
          <div className='row'>
            <div className="col-sm-6">
              <div className="icfimglb">
                <img src='/assets/img/icfmg2.jpg' alt="dt-dr" />
              </div>
            </div>

            <div className='col-sm-6 boxshd letf5border text-left bgwhite patb0'>
              <div className='ptt-10 pbb-10'>
                <h2 className='ifch2c'>Fact check -</h2>
                <p>
                  About <span className='hispan'>85%</span> of clients want their coaches to be credentialed by ICF, because it’s the largest and globally accepted coach certification program.
                </p>
                <p>
                  ICF is a non-profit organization that is the leading global organization dedicated to advancing the coaching profession by setting high standards, providing independent certification and building a worldwide network of trained coaching professionals.
                </p>
                <p>
                  In association with Aster Coaching US, and being accredited with International Coach Federation (ICF), we take pride in sharing with you that, we certify and develop high-caliber coaches who meet global standards and are in tune with local, regional and global business practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
        <div class="container">
          <div class="row">


            <div class="col-sm-6 rightsides">

              <div className='row'>
                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Who can consider the ICF accredited certification program?</h4>

                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>HR heads, HR managers, Training managers, Trainers, and Consultants</li>
                      <li>Business Heads, Directors, General Managers, Managers, and Entrepreneurs</li>
                      <li>CEOs, Senior leaders, Line Managers, Team Leaders, Supervisors, and all other C-suit executives.</li>
                    </ul>
                  </div>
                </div>

                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Why signup with BYLD?</h4>

                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>As a learning and development organisation which has been in business for more than 2 decades, we bring immense experience of designing and running successful learning journeys.</li>
                      <li>9 years of experience running the coach certification program with 300 plus accredited coaches and 600 certified coaches.</li>
                      <li>100% Pass results for achieving ICF ACC Credentials</li>
                      <li>Seasoned International master coaches as facilitators</li>
                      <li>10 hours of mentor coaching is included in the program</li>
                      <li>Complete support at every step of the process by the dedicated relationship manager.</li>
                      <li>Guaranteed peer coaching assistance</li>
                      <li>Interest free EMI Option for fees</li>
                    </ul>
                  </div>
                </div>


              </div>
            </div>

            <div className="col-sm-6 pr-33 md-pr-15 md-mb-50">
              <div className="images-part parnernetworkheight">
                <div className="bannerform">
                  <form id="contact-form" className='clientcornner' onSubmit={registerUser}>
                    <div className="row">
                      <div className='col-sm-12'>
                        <p>Fill in the form below and our subject matter experts will connect you within 24 working hours.</p>
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input type="text" name="fname" placeholder="First Name*" required />
                      </div>
                      <div className="col-sm-6 mb-12">
                        <input type="text" name="lname" placeholder="Last Name*" required />
                      </div>
                      <div className="col-sm-12 mb-12">
                        <input type="email" name="email" placeholder="Enter Email*" required />
                      </div>
                      <div className="col-sm-12 mb-12">
                        <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                      </div>

                      <div className="col-sm-12 mb-12">
                        <input type="text" name="organization" placeholder="Organization*" required />
                      </div>


                      <div className="col-sm-12 mb-12">
                        <select name="referredby" required>
                          <option value="">Referred By</option>
                          <option value="Email">Email</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Google Search">Google Search</option>
                          <option value="Reference">Reference</option>

                        </select>
                      </div>
                      <div className="col-lg-12 mb-12">
                        <textarea className="from-control" name="QuestionsComments" placeholder="Questions/Comments:"></textarea>
                      </div>
                      <div className="col-lg-12 mb-12">
                        <input id="submitbuttonform" className="clientcornnerbtn width150" type="submit" value="Submit" />
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


      <div class="rs-process style1 pt-100 pb-100 md-pt-70 md-pb-70">
        <div class="container">
          <div class="row y-middle">
          </div>
        </div>
        <div class="container custom2">
          <div class="process-effects-layer">
            <div class="row">
              <div className='col'></div>

              <div class="col">
                <div class="rs-addon-number">
                  <div class="number-part">
                    <a className='hccs' href='/coaching/insideout-coaching'>
                      <div class="number-image">
                        <span>InsideOut™ Coaching</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="rs-addon-number">
                  <div class="number-part">
                    <a className='hccs' href='/coaching/breakthroughs'>
                      <div class="number-image">
                        <span>Breakthrough</span>
                      </div>

                    </a>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="rs-addon-number">
                  <div class="number-part">
                    <a className='hccs' href='/coaching/executive-coaching'>
                      <div class="number-image">
                        <span>Executive Coaching</span>
                      </div>

                    </a>
                  </div>
                </div>
              </div>


              <div className='col'></div>

            </div>
          </div>
        </div>
      </div>




    </>
  )
}