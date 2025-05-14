import Footer from "../comman/footer";
import Header from "../comman/header";
import Middle from "../comman/middle";

export default function Homemain(){
    return(
        <>
        <Header/>
        <Top/>
        <Secondsectionrepeat/>
        <ThirdSectionRepeat/>
        <Middle/>
        <Bottomhalf/>
        <Footer/>
        </>
    )
}



function Top() {
    return(

        <>
   <div>
  <section id="home" className="w3l-banner py-5">
    <div className="container py-lg-5 mt-lg-5">
      <div className="py-lg-4 my-2">
        <div className="banner-info-grid mt-lg-5">
          <h3 className="mb-4">Stylish Creative Designs.</h3>
          <section id="bottom" className="demo">
            <a href="#bottom"><span />Scroll</a>
          </section>
        </div>
      </div>
    </div>
  </section>
 
 
</div>

      </>
    );
}



function Secondsectionrepeat(){
  return(
    <>
      <section className="w3l-bottom-grids-6 py-5" id="bottom">
    <div className="container py-lg-5 py-md-4 py-2">
      <div className="grids-area-hny main-cont-wthree-fea row">
      <Secondsection title="01. Video productions" heading="Stunning video sequence and impressing ideas are all here." des="Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet."/>
      <Secondsection title="02. Branding Design" heading="Great reflection of your brand be achieved by top designers." des="Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet."/>
      <Secondsection title="03. Graphic Design" heading="Creating gorgeous graphic design meeting clients needs." des="Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet."/>
      </div>
    </div>
  </section>
    </>
  )
}
function Secondsection( props){
  return(
    <>
        <div className="col-lg-4 col-md-6 grids-feature">
          <div className="area-box">
            <span className="title-small mb-2">{props.title}</span>
            <h4><a href="#feature" className="title-head">{props.heading}</a></h4>
            <p className> {props.des}</p>
          </div>
        </div>
      
     
    </>
  )
}




const data = [
  {
    title:"UI experience",
    img :"assets/images/p1.jpg",
    dec  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia."
  },
  
  {
    title:"Wordpress",
    img :"assets/images/p2.jpg",
    dec  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia."
  },
  
  { title:"Ecommerce",
     img :"assets/images/p3.jpg",
      dec  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." },
   
      {title : "Headphones" ,
      img : "assets/images/p4.jpg" ,
      dec : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." },  
   
      {title : "Mobile app" ,
      img : "assets/images/p5.jpg" ,
      dec : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia."    },
   
      {title : "Modern Ideas", 
      img : "assets/images/p6.jpg",
       dec : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia."  } ,  
   
       {title : "Creativity" ,
      img :"assets/images/p8.jpg" ,
      dec : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia."    }  ,   
   
      {title : "Fashion design", 
      img : "assets/images/p7.jpg",
       dec : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,quia."},

]


function ThirdSectionRepeat(){
  return(
    <>
      <section className="w3l-portfolio-8 py-5">
    <div className="portfolio-main py-lg-5 py-md-4 py-2">
      <div className="container">
        <div className="row galler-top">

          {
            data.map((Element)=>
              <>
              <ThirdSection  img={Element.img} title={Element.title} dess={Element.dec} />
              </>
            
            
          )
            
          }
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
function ThirdSection(props){
  return(
    <>
   
          <div className="col-lg-3 col-sm-6 protfolio-item hover14">
            <figure>
              <img src={props.img} alt="product" className="img-fluid" />
              <div className="img-info">
                <a href="#url" className="img-title">{props.title}</a>
                <p>{props.dess}</p>
              </div>
            </figure>
          </div>


          {/* <div className="col-lg-3 col-sm-6 protfolio-item hover14">
            <figure>
              <img src="assets/images/p2.jpg" alt="product" className="img-fluid" />
              <div className="img-info">
                <a href="#url" className="img-title">Wordpress</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
              </div>
            </figure>
          </div>
          <div className="col-lg-3 col-sm-6 protfolio-item hover14">
            <figure>
              <img src="assets/images/p3.jpg" alt="product" className="img-fluid" />
              <div className="img-info">
                <a href="#url" className="img-title">Ecommerce</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
              </div>
            </figure>
          </div>
          <div className="col-lg-3 col-sm-6 protfolio-item hover14">
            <figure>
              <img src="assets/images/p4.jpg" alt="product" className="img-fluid" />
              <div className="img-info">
                <a href="#url" className="img-title">Headphones</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
              </div>
            </figure>
          </div>
          <div className="col-lg-3 col-sm-6 protfolio-item hover14">
            <figure>
              <img src="assets/images/p5.jpg" alt="product" className="img-fluid" />
              <div className="img-info">
                <a href="#url" className="img-title">Mobile app</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
              </div>
            </figure>
          </div>
          <div className="col-lg-3 col-sm-6 protfolio-item hover14">
            <figure>
              <img src="assets/images/p6.jpg" alt="product" className="img-fluid" />
              <div className="img-info">
                <a href="#url" className="img-title">Modern Ideas</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
              </div>
            </figure>
          </div>
          <div className="col-lg-3 col-sm-6 protfolio-item hover14">
            <figure>
              <img src="assets/images/p8.jpg" alt="product" className="img-fluid" />
              <div className="img-info">
                <a href="#url" className="img-title">Creativity</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
              </div>
            </figure>
          </div>
          <div className="col-lg-3 col-sm-6 protfolio-item hover14">
            <figure>
              <img src="assets/images/p7.jpg" alt="product" className="img-fluid" />
              <div className="img-info">
                <a href="#url" className="img-title">Fashion design</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
              </div>
            </figure>
          </div> */}
        
    </>
  )
}

function Bottomhalf(){
    return(
        <>
    <section className="w3l-servicesblock py-5" id="services">
  <div className="container py-lg-5 py-md-4 py-2">
    <div className="row">
      <div className="col-lg-6 about-right-faq align-self">
        <h3 className="title-big"> Importance of Skills</h3>
        <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
          ultrices in ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae, ad.</p>
        <div className="progress-info info1">
          <h6 className="progress-tittle">Figma illustrations <span className>80%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "80%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
            </div>
          </div>
        </div>
        <div className="progress-info info2">
          <h6 className="progress-tittle">PHP programming <span className>95%</span>
          </h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "95%"}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
            </div>
          </div>  
        </div>
        <div className="progress-info info3">
          <h6 className="progress-tittle">Web design &amp; development <span className>90%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "90%"}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
            </div>
          </div>
        </div>
        <div className="progress-info info4 mb-0">
          <h6 className="progress-tittle">Adobe Photoshop <span className>75%</span></h6>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width:"75%"}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 left-wthree-img mt-lg-0 mt-5">
        <img src="assets/images/progress.jpg" alt className="img-fluid radius-image" />
      </div>
    </div>
  </div>
</section>


<div className="w3l-news" id="news">
  <section id="grids5-block" className="py-5">
    <div className="container py-lg-5 py-md-4 py-2">
      <h3 className="title-big text-center">See what’s going on</h3>
      <div className="row mt-lg-5 mt-4">
        <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4">
          <div className="grids5-info">
            <a href="#blog-single" className="d-block zoom"><img src="assets/images/blog1.jpg" alt className="img-fluid news-image" /></a>
            <div className="blog-info">
              <h4><a href="#blog-single">Best free Web templates</a></h4>
              <p className="date"><span className="fa fa-calendar mr-2" /> September 17, 2020</p>
              <p>Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
              <a href="#blog-single" className="btn btn-news mt-4">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
          <div className="grids5-info">
            <a href="#blog-single" className="d-block zoom"><img src="assets/images/blog2.jpg" alt className="img-fluid news-image" /></a>
            <div className="blog-info">
              <h4><a href="#blog-single">Skills to become a Designer</a></h4>
              <p className="date"><span className="fa fa-calendar mr-2" /> September 17, 2020</p>
              <p>Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
              <a href="#blog-single" className="btn btn-news mt-4">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
          <div className="grids5-info">
            <a href="#blog-single" className="d-block zoom"><img src="assets/images/blog3.jpg" alt className="img-fluid news-image" /></a>
            <div className="blog-info">
              <h4><a href="#blog-single">How to make 404 error page?</a></h4>
              <p className="date"><span className="fa fa-calendar mr-2" /> September 17, 2020</p>
              <p>Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
              <a href="#blog-single" className="btn btn-news mt-4">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

 
<section className="w3l-testimonials" id="testimonials">
  <div className="midd-w3 py-5">
    <div className="container py-lg-5 py-md-3">
      <div id="owl-demo1" className="owl-carousel owl-theme mt-4 py-2 mb-4">
        <div className="item">
          <div className="testimonial-content">
            <div className="testimonial">
              <blockquote>
                <q>They have responded immediately whenever we have had a question or problem and have
                  been an amazing business partner. I Will recommend their services to
                  many of our clients and have been thrilled with the work that they have done.</q>
              </blockquote>
              <div className="testi-des">
                <div className="peopl align-self">
                  <h3>Scarlett jack</h3>
                  <p className="identity">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-content">
            <div className="testimonial">
              <blockquote>
                <q>The service was excellent! I was very impressed with their work. These guys are
                  incredibly talented, easy to work with, easy to get a hold of – true professionals.
                  My project has been completed in time and on the highest level.</q>
              </blockquote>
              <div className="testi-des">
                <div className="peopl align-self">
                  <h3>Grayson lily</h3>
                  <p className="identity">Digital Marketer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-content">
            <div className="testimonial">
              <blockquote>
                <q>They have responded immediately whenever we have had a question or problem and have
                  been an amazing business partner. I Will recommend their services to
                  many of our clients and have been thrilled with the work that they have done.</q>
              </blockquote>
              <div className="testi-des">
                <div className="peopl align-self">
                  <h3>Scarlett jack</h3>
                  <p className="identity">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-content">
            <div className="testimonial">
              <blockquote>
                <q>The service was excellent! I was very impressed with their work. These guys are
                  incredibly talented, easy to work with, easy to get a hold of – true professionals.
                  My project has been completed in time and on the highest level.</q>
              </blockquote>
              <div className="testi-des">
                <div className="peopl align-self">
                  <h3>Grayson lily</h3>
                  <p className="identity">Digital Marketer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-content">
            <div className="testimonial">
              <blockquote>
                <q>They have responded immediately whenever we have had a question or problem and have
                  been an amazing business partner. I Will recommend their services to
                  many of our clients and have been thrilled with the work that they have done.</q>
              </blockquote>
              <div className="testi-des">
                <div className="peopl align-self">
                  <h3>Scarlett jack</h3>
                  <p className="identity">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-content">
            <div className="testimonial">
              <blockquote>
                <q>The service was excellent! I was very impressed with their work. These guys are
                  incredibly talented, easy to work with, easy to get a hold of – true professionals.
                  My project has been completed in time and on the highest level.</q>
              </blockquote>
              <div className="testi-des">
                <div className="peopl align-self">
                  <h3>Grayson lily</h3>
                  <p className="identity">Digital Marketer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<div className="w3l-faq-block py-5" id="faq">
  <div className="container py-lg-5">
    <div className="row">
      <div className="col-lg-6 pr-lg-5">
        <div className="accordion">
          <div className="accordion-item">
            <button id="accordion-button-1" aria-expanded="true"><span className="accordion-title">How much does
                a static website cost?</span><span className="icon" aria-hidden="true" /></button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                ut. Ut tortor.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">How to
                choose a best web template?</span><span className="icon" aria-hidden="true" /></button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                ut. Ut pretium.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">How to download a template?</span><span className="icon" aria-hidden="true" /></button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                ut. Ut tortor.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">Why should i choose a free website?</span><span className="icon" aria-hidden="true" /></button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                ut. Ut potenti.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-lg-0 mt-sm-5 mt-4">
        <img src="assets/images/faq.jpg" alt className="img-fluid radius-image" />
      </div>
    </div>
  </div>
</div>



<section className="w3l-bottom py-5" id="newsletter">
  <div className="container py-md-5 py-md-4 text-center">
    <div className="row">
      <div className="col-lg-9 col-md-10 mx-auto">
        <div className="subscribe mx-auto">
          <div className="header-section text-center mx-auto">
            <h3 className="title-big">Subscribe Newsletter </h3>
            <p className="mt-2"> Enter your email &amp; receive the latest news, updates &amp; special offers from us.</p>
          </div>
          <form action="#" method="post" className="subscribe-wthree pt-2 mt-md-5 mt-3">
            <div className="d-md-flex flex-wrap subscribe-wthree-field">
              <input className="form-control" type="email" placeholder="Enter your email..." name="email" required />
              <button className="btn btn-style btn-primary" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  
        </>
    )
}