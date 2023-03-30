import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {  
  return (
    <>
         <Head>
            <title>Museum Caper Website - Eaglesflightinidia</title>
            <meta name="description" content=""/> 
          </Head>

          <div className="themecoloforpdf ptt-20 pbb-15">
            <div className="container">
               <div className="row">
                  <div className="col-lg-5">
                     <img className="mlogosize" src="/efassets/img/mlogo.png"/>
                  </div>
                  <div className='col-sm-7'>
                    <ul className='float-right'>
                        <li><a className='mlist' href='/eaglesflightindia/mcw'>Home</a></li>
                    </ul>
                  </div>               
               </div>
            </div>
         </div>

         <div className="ptt-40">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <img className="" src="/efassets/img/bg-0-museum-caper.jpg"/>
                  </div>
                  <div className='clearfix'></div>
                  
                  <div className="col-lg-3"></div>
                  <div className="col-lg-2">
                     <a href='/eaglesflightindia/museum-caper-4/'><img className="" src="/efassets/img/Screenshot_2.png"/></a>
                  </div>
                  <div className="col-lg-2">
                      <a><img className="" src="/efassets/img/Screenshot_3.png"/></a>
                  </div>
                  <div className="col-lg-2">
                      <a href='/eaglesflightindia/museum-caper-5'><img className="" src="/efassets/img/Screenshot_4.png"/></a>
                  </div>
               </div>
            </div>
         </div>

    </>
  )
}
