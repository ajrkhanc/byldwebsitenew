import Head from 'next/head'
import moment from 'moment'

export async function getServerSideProps() {
    const res = await fetch('https://byldblogs.vercel.app/api/posts')
    const posts = await res.json()

    const cat = await fetch('https://byldblogs.vercel.app/api/categories')
    const cats = await cat.json()

    return {
        props: {
            posts,
            cats,
        },
    }
}

export default function Blog({ posts, cats }) {

    const PopupRegisterd = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonformpopup").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/22/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel1popup").innerHTML = "Thank you for your details. Check your inbox for more details.";

                    document.getElementById("showlabel1popup").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("popuphidec").style.display = "none";
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-email=" + event.target.fmail.value)

    }

    return (
        <>
            <Head>
                <title>Blog - BYLD Group</title>
                <meta name="description" content="" />
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

                <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
            </Head>

            <div class="rs-breadcrumbs blogsbg">
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
                                <a href="/blog">
                                    <span>Blogs</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>
                        <div className='col-sm-8'>
                            <div class="breadcrumbs-inner">
                                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                                    BYLD Blogs
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-inner-blog ptt-40 pbb-50 positionrelative">
                <div className="container">
                    <div className="row zindx">

                        <div className='col-sm-12'>
                            <div>
                                <form className='postfilterform'>
                                    <select>
                                        <option value='Latest'>Latest</option>
                                        <option value='Oldest'>Oldest</option>
                                    </select>

                                    <select>
                                        <option value=''>Categories</option>
                                        <option value='Assessment'>Assessment</option>
                                        <option value='Coaching'>Coaching</option>
                                        <option value='Experiential Learning'>Experiential Learning</option>
                                        <option value='Leadership and Performance Enhancement'>Leadership and Performance Enhancement</option>
                                        <option value='Staffing and Search'>Staffing and Search</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-12">
                            {
                                posts.slice(0, 10).map((getpost) => {
                                    return (
                                        <>
                                        <div className="row mshdc">
                                            <div className="col-md-8 mbb-20">
                                                <div className="blog-item">
                                                    <div className="blog-content">
                                                        <h3 className="blog-title"><a href={getpost.posturl}>{getpost.Title}</a></h3>
                                                        <div className="blog-meta">
                                                            <ul className="btm-cate">
                                                                <li>
                                                                    <div className="blog-date">
                                                                        <i className="fa fa-calendar-check-o"></i> {moment(getpost.ModifiedDate).format('MMMM DD Y')}
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="author">
                                                                        <i className="fa fa-user-o"></i> {getpost.AuthorFullname}
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p>{getpost.Description}</p>
                                                        </div>
                                                        <div className="blog-button">
                                                            <a className="blog-btn" href={getpost.posturl}>Read More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="blog-img">
                                                    <a href={getpost.posturl}><img src={getpost.ImageURL} alt={getpost.ImageAlt} /></a>
                                                </div>
                                            </div> 
                                        </div>
                                        <hr className='hrc'></hr>
                                        </>
                                    
                                    );
                                })
                            }



                        </div>

                        <div class="col-lg-12 text-center">
                            <div class="pagination-area">
                                <div class="nav-link">
                                    <span class="page-number white-color">1</span>
                                    <a class="page-number" href="#">2</a>
                                    <a class="page-number" href="#">3</a>
                                    <a class="page-number" href="#">4</a>
                                    <a class="page-number" href="#">5</a>
                                    <a class="page-number" href="#">6</a>
                                    <a class="page-number" href="#">7</a>
                                    <a class="page-number" href="#">8</a>
                                    <a class="page-number" href="#">9</a>
                                    <a class="page-number" href="#">10</a>
                                    <a class="page-number" href="#">12</a>
                                    <a class="page-number border-none" href="#">Next</a>
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
            </div>

            <div id="popuphidec" class='popup wow fadeInUp delay-0-2s animated animateUP'>
                <div class='cnt223'>
                    <a href='' class='close popupclose'>X</a>
                    <div className='popupinner'>
                        <div className='popupimg text-center'>
                            <img src="/assets/img/popupimg.png" />
                            <h3>YOU CAN’T LEARN ANYTHING FROM A POP-UP.</h3>
                            <p>But you can learn a lot from insightful matters by our experts by getting those delivered to your inbox every month.</p>
                        </div>
                        <div className='popupform'>
                            <form id="contactForm" onSubmit={PopupRegisterd}>
                                <div className="row clearfix justify-content-center">
                                    <div className="col-sm-12">
                                        <div className="form-group mb-0">
                                            <input type="email" id="EmailAddress" name="fmail" className="form-control popupsus" placeholder="Enter Your Email" required />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group mb-0">
                                            <input id="submitbuttonformpopup" type="submit" className="theme-btn btnwidth fullbtn" value="SEND ME INSIGHTS" />
                                        </div>
                                        <div className="clearfix"></div>
                                        <p id="showlabel1popup" className="submitpopup" style={{ display: "none" }}></p>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}