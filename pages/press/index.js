import Head from 'next/head'
import  moment from 'moment'

export async function getServerSideProps() {
    const res = await fetch('https://byldnewspr.vercel.app/api/posts')
    const posts = await res.json()

    return {
      props: {
        posts   
      },
    }
  }

export default function Press({posts}){
    return(
        <>
        <Head>
            <title>News Feed</title>
            <meta name="description" content=""/> 
        </Head>

        <section className='missionvisionbg pressbgc'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='pagetitle text-center'>
                    <h1 className='feedh1'>News Feed</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

        <div className="rs-inner-blog ptt-40 pbb-50">
                <div className="container custom">
                    <div className="row">

                      {
                        posts.map((allpr)=>{                            
                            return(
                                <div className="col-sm-4 mbb-20">
                        <div className="blog-item">
                            <div className="blog-img">
                                <a target="_blank" href={allpr.PostNewURL}><img src={allpr.ImageURL} alt={allpr.ImageURL}/></a>                               
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><a target="_blank" href={allpr.PostNewURL} className='eventsboxtitle'>{allpr.Title}</a></h3>
                                <div className="blog-meta">
                                    <ul className="btm-cate">
                                        <li className='pdate'>
                                            <div className="blog-date">
                                                <i className="fa fa-calendar-check-o"></i> <span>Published: </span>{moment(allpr.ModifiedDate).format('MMMM DD Y')}
                                            </div>
                                            <div className="author">
                                                <i className="fa fa-building-o"></i> <span>Published In:</span> {allpr.ImageAlt}
                                            </div>
                                        </li>                                       
                                    </ul>
                                </div>                               
                                <div className="blog-button">
                                    <a className="blog-btn" target="_blank" href={allpr.PostNewURL}>Continue Reading</a>
                                    {/* {
                                        (()=>{
                                            if(sss)
                                            return<h1>hii</h1>
                                            else
                                            return<h4>sdfsdfsdf</h4>
                                        })()
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>
                            )
                        })
                      }                    

                    </div> 
                </div>
            </div>
        </>
    )
}