import Layout from '../components/Layout/Layout';
import CL from '../components/CL/Layout';
import ED from '../components/ED/Layout';
import FiveB from '../components/FiveB/Layout';
import Wiley from '../components/Wiley/Layout';
import Eaglesflightindia from '../components/Eaglesflightindia/Layout';
import EFLPNEW from '../components/EFLPNEW/Layout';
import Hhf from '../components/Hhf/Layout';
import COS from '../components/cos/Layout'
import COSR from '../components/cosresult/Layout'
import CoachingA from '../components/CoachingA/Layout'
import YogeshSood from '../components/YogeshSood/Layout'
import Leaderbehaviourassessment from '../components/leaderbehaviourassessment/Layout'
import Jensons8urvey from '../components/jenson-8-survey/Layout'
import BYLDNEW from '../components/byld-new/Layout'
import Experientiallearning from '../components/experiential-learning/Layout'
import Jenson8 from '../components/jenson8/Layout'
import Assessments from '../components/Assessments/Layout'
import Coachinghead from '../components/Coachingheadc/Layout'



// import Hhf from '../components/Hhf/Layout';



import Head from 'next/head'
import Script from 'next/script'
import App from 'next/app'

export default function MyApp({ Component, pageProps, router }) {

  if (router.pathname.startsWith('/cruciallifechangingskills')) {

    return (
      <CL>
        <Head>
          <title>Crucial Life-Changing Skills | Our Solutions | BYLD Group</title>
          <meta name="description" content="We offer the best communication courses for leaders to ensure effective business communication through Influence skills training. To know more, check out the page." />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/classets/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
          <script src="https://unpkg.com/phosphor-icons"></script>
          <link rel="stylesheet" href="/classets/css/style.css" />
          <link rel="shortcut icon" href="/classets/favicon.png" type="image/x-icon" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-25012511-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-25012511-1');
                `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </CL>
    )

  }


  else if (router.pathname.startsWith('/fivebehaviors')) {

    return (
      <FiveB>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/5bassets/favicon.png" />      

          <link rel="stylesheet" type="text/css" href="/5bassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/5bassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/5bassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/5bassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/5bassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/5bassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205275343-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-205275343-1');
                `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
        </Head>
        <Component {...pageProps} />
      </FiveB>
    )

  }

  else if (router.pathname.startsWith('/everythingdisc')) {

    return (
      <ED>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/edassets/favicon.png" />
          <link rel="stylesheet" type="text/css" href="/edassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/edassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/edassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/edassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/edassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/edassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-P9GPQ8EC4C"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P9GPQ8EC4C');
                `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </ED>
    )

  }

  else if (router.pathname.startsWith('/wiley')) {

    return (
      <Wiley>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/wileyassets/favicon.png" />
  

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/wileyassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/wileyassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
        </Head>

        <Component {...pageProps} />
      </Wiley>
    )

  }

  else if (router.pathname.startsWith('/eaglesflightindia/byomkesh-bakshi')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />


        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/feluda')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
     
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />


        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/jagga-jasoos')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
    
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />


        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/karamchand')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
        
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />


        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/kkw')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
   
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/ms-marple')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
         
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/museum-caper-4')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
       
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/museum-caper-5')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
        
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/mcw')) {
    return (
      <Hhf>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
  
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />
        </Head>
        <Component {...pageProps} />
      </Hhf>
    )
  }

  else if (router.pathname.startsWith('/eaglesflightindia/promotional-lp')) {

    return (
      <EFLPNEW>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />


          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205257587-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-205257587-1');
                `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
        </Head>

        <Component {...pageProps} />
      </EFLPNEW>
    )

  }



  else if (router.pathname.startsWith('/eaglesflightindia')) {

    return (
      <Eaglesflightindia>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/efassets/favicon.png" />
          
          <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205257587-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-205257587-1');
                `,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>
        </Head>

        <Component {...pageProps} />
      </Eaglesflightindia>
    )

  }

  else if (router.pathname.startsWith('/coaching/become-a-professional-coach-marketing')) {

    return (
      <CoachingA>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </CoachingA>
    )

  }

  else if (router.pathname.startsWith('/coaching/become-a-professional-coach-pre-program-assessment')) {

    return (
      <CoachingA>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </CoachingA>
    )

  }


  else if (router.pathname.startsWith('/coaching/coaching-snapshot-pre-program-assessment/')) {

    return (
      <COSR>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </COSR>
    )

  }
  else if (router.pathname.startsWith('/coaching/coaching-snapshot-pre-program-assessment')) {

    return (
      <CoachingA>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </CoachingA>
    )

  }
  


  else if (router.pathname.startsWith('/coaching/coaching-snapshot-marketing/')) {

    return (
      <COSR>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </COSR>
    )

  }

  else if (router.pathname.startsWith('/coaching/coaching-snapshot-marketing')) {

    return (
      <COS>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </COS>
    )

  }


  else if (router.pathname.startsWith('/yogesh-sood')) {

    return (
      <YogeshSood>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/yogesh.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-5PXTTR960E');
        `,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </YogeshSood>
    )

  }

  else if (router.pathname.startsWith('/leader-behaviour-assessment-sales/')) {

    return (
      <COSR>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

        </Head>

        <Component {...pageProps} />
      </COSR>
    )

  }

  else if (router.pathname.startsWith('/leader-behaviour-assessment-self-sales')) {

    return (
      <Leaderbehaviourassessment>
        <Head>
        <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}

        </Head>

        <Component {...pageProps} />
      </Leaderbehaviourassessment>
    )

  }
  else if (router.pathname.startsWith('/leader-behaviour-assessment-sales')) {

    return (
      <Leaderbehaviourassessment>
        <Head>
        <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}

        </Head>

        <Component {...pageProps} />
      </Leaderbehaviourassessment>
    )

  }

  else if (router.pathname.startsWith('/jenson-8/jenson-8-survey-marketing')) {

    return (
      <Jensons8urvey>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}

        </Head>

        <Component {...pageProps} />
      </Jensons8urvey>
    )

  }

  else if (router.pathname.startsWith('/jenson-8/jenson-8-survey-sales')) {

    return (
      <Jensons8urvey>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}

        </Head>

        <Component {...pageProps} />
      </Jensons8urvey>
    )

  }

  else if (router.pathname.startsWith('/jenson-8')) {

    return (
      <Jenson8>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>

        <Component {...pageProps} />
      </Jenson8>
    )

  }


  else if (router.pathname.startsWith('/leader-behaviour-assessment-marketing')) {

    return (
      <Leaderbehaviourassessment>
        <Head>
        <link rel="stylesheet" type="text/css" href="/assets/css/head.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/efassets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}

        </Head>

        <Component {...pageProps} />
      </Leaderbehaviourassessment>
    )

  }


  else if (router.pathname.startsWith('/byld-new')) {

    return (
      <BYLDNEW>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />          
          
          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

        </Head>
        <Component {...pageProps} />
      </BYLDNEW>
    )

  }


  else if (router.pathname.startsWith('/our-solutions/experiential-learning')) {

    return (
      <Experientiallearning>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </Experientiallearning>
    )

  }

  else if (router.pathname.startsWith('/our-solutions/assessments')) {

    return (
      <Assessments>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </Assessments>
    )

  }

  else if (router.pathname.startsWith('/assessments')) {

    return (
      <Assessments>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </Assessments>
    )

  }

  else if (router.pathname.startsWith('/our-solutions/coaching')) {

    return (
      <Coachinghead>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </Coachinghead>
    )

  }

  else if (router.pathname.startsWith('/coaching')) {

    return (
      <Coachinghead>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `var chatbot_id=12480;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
              `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

        </Head>
        <Component {...pageProps} />
      </Coachinghead>
    )

  }




  else {

    return (
      <BYLDNEW>
        <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />          
          
          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/rsmenu-main.css" />

          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css" />
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css" />
          

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />

        </Head>
        <Component {...pageProps} />
      </BYLDNEW>
    )

  }

}
