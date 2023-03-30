import Head from 'next/head'
import Link from 'next/link'

export default function solution(){

    return(
        <>
          <Head>
            <title>Our Solutions | HR, Productivity & Assessment Solutions| BYLD Group</title>
            <meta name="description" content="BYLD Group offers leadership development programs, coaching programs, and corporate training programs to boost self-performance and teamwork. To know more, check out the page."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/our-solutions.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="rs-services style1 modify shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">
                   
                    <div className="sec-title3 mbb-35 text-center">
                        <h4 className="countertoph2 text-center font30">Our Solutions</h4>
                        <div className="heading-border-line center-style"></div>
                        <p className='mtt-30'>
                        We are dedicated to make a difference to people and their organizations. Our clients across industries trust BYLD to manage, develop and align their talent needs in line with the business objectives and strategies – a responsibility we meet every day with enthusiasm, expertise, accountability, and passion.
                        </p>
                        <p className='solutionp'>Our Mission is to make individuals, teams, and organizations measurably more effective. Our Practice Areas include:</p>
                    </div>
                    <div class="row service-wrap mr-0 ml-0">
                        <div class="col-sm-6 col-md-4 padding-0">
                            <div class="service-grid">
                                <div class="service-icon mb-23">
                                <img src="/assets/img/icon/experiential-learning.png" alt=""/>
                                </div>
                                <h4 class="title mb-18"><a href="/our-solutions/experiential-learning">Experiential Learning</a></h4>
                                <div class="btn-wrap">
                                    <a class="readmore" href="/our-solutions/experiential-learning">Read more <div class="btn-arrow"></div></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 padding-0 pr-1">
                            <div class="service-grid">
                                <div class="service-icon mb-23">
                                <img src="/assets/img/icon/leadership-development.png" alt=""/>
                                </div>
                                <h4 class="title mb-18"><a href="/our-solutions/leadership-and-talent-development">Leadership & Performance</a></h4>
                                <div class="btn-wrap">
                                    <a class="readmore" href="/our-solutions/leadership-and-talent-development">Read more <div class="btn-arrow"></div></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-4 padding-0 pr-1">
                            <div class="service-grid">
                                <div class="service-icon mb-23">
                                    <img src="/assets/img/icon/assessments.png" alt=""/>
                                </div>
                                <h4 class="title mb-18"><a href="/our-solutions/assessments/">Assessments</a></h4>                                
                                <div class="btn-wrap">
                                    <a class="readmore" href="/our-solutions/assessments/">Read more <div class="btn-arrow"></div></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 padding-0 pr-1">
                            <div class="service-grid">
                                <div class="service-icon mb-23">
                                    <img src="/assets/img/icon/assessments.png" alt=""/>
                                </div>
                                <h4 class="title mb-18"><a href="/bespoke">BeSpoke</a></h4>                                
                                <div class="btn-wrap">
                                    <a class="readmore" href="/bespoke">Read more <div class="btn-arrow"></div></a>
                                </div>
                            </div>
                        </div>
                         
                        <div class="col-sm-6 col-md-4 padding-0">
                            <div class="service-grid">
                                <div class="service-icon mb-23">
                                <img src="/assets/img/icon/staffing.png" alt=""/>
                                </div>
                                <h4 class="title mb-18"><a href="/our-solutions/staffing">Staffing & Search</a></h4>                                
                                <div class="btn-wrap">
                                    <a class="readmore" href="/our-solutions/staffing">Read more <div class="btn-arrow"></div></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-4 padding-0">
                            <div class="service-grid">
                                <div class="service-icon mb-23">
                                <img src="/assets/img/icon/coaching.png" alt=""/>
                                </div>
                                <h4 class="title mb-18"><a href="/our-solutions/coaching">Coaching</a></h4>                                
                                <div class="btn-wrap">
                                    <a class="readmore" href="/our-solutions/coaching">Read more <div class="btn-arrow"></div></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>                     
                </div>
            </div>
            
        </>
    )
}


