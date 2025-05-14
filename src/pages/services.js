import Banner from "../comman/banner";
import Footer from "../comman/footer";
import Header from "../comman/header";
import Middle from "../comman/middle";



export default function Service() {
    return(
        <>
        <Header/>
        <Banner title="Our Services" subtitle="Services"/>
        <Services/>
        <Footer/>
        </>
    )
}


function Services() {
    return(
        <>
    
<section class="w3l-servicesblock w3l-servicesblock1 py-5" id="services">
    <div class="container py-lg-5 py-md-4 py-2">
        <h3 class="title-big text-center mb-5"> What you will have</h3>
        <div class="row">
            <div class="col-lg-6 align-self pr-lg-4">
                <div class="progress-info info1">
                    <h6 class="progress-tittle">Figma illustrations <span class="">80%</span></h6>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "80%"}}
                            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div class="progress-info info2">
                    <h6 class="progress-tittle">PHP programming <span class="">95%</span>
                    </h6>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "95%"}}
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div class="progress-info info3">
                    <h6 class="progress-tittle">Web design & development <span class="">90%</span></h6>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "90%"}}
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div class="progress-info info4">
                    <h6 class="progress-tittle">Adobe Photoshop <span class="">75%</span></h6>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "75%"}}
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div class="progress-info info2 mb-0">
                    <h6 class="progress-tittle">Wordpress design <span class="">95%</span></h6>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "95%"}}
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mt-lg-0 mt-5 pl-lg-4">
                <h3 class="title-left"> Our Skills - We are qualified and of experienced with a lot of skills</h3>
                <p class="mt-md-4 mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula. Semper at. Lorem ipsum dolor sit amet
                    elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init
                    dolor sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.</p>
                <p class="mt-3">Pellen tesque libero ut justo,
                    ultrices in ligula. Semper at. Lorem init ipsum dolor sit amet elit. Dolor ipsum non velit,
                    culpa! Pellen tesque libero ut justo, ultrices in ligula amet dolor sit.</p>
            </div>
        </div>
    </div>
</section>

<div className="w3l-servicesblock2" id="why">
  <section id="grids5-block" className="py-5">
    <div className="container py-lg-5 py-md-4 py-2">
      <h3 className="title-big text-center">Why Choose us</h3>
      <div className="row mt-lg-5 mt-4">
        <div className="col-lg-4 col-md-6">
          <div className="grids5-info">
            <a href="#service" className="d-block zoom"><img src="assets/images/service1.jpg" alt className="img-fluid service-image" /></a>
            <div className="blog-info">
              <h4><a href="#service">We believe in Quality</a></h4>
              <p className="mt-sm-3 mt-2">Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
          <div className="grids5-info">
            <a href="#service" className="d-block zoom"><img src="assets/images/service2.jpg" alt className="img-fluid service-image" /></a>
            <div className="blog-info">
              <h4><a href="#service">We stand for uniqueness</a></h4>
              <p className="mt-sm-3 mt-2">Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
          <div className="grids5-info">
            <a href="#service" className="d-block zoom"><img src="assets/images/service3.jpg" alt className="img-fluid service-image" /></a>
            <div className="blog-info">
              <h4><a href="#service">We respect Deadlines</a></h4>
              <p className="mt-sm-3 mt-2">Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<section className="w3l-servicesblock1 py-5" id="moreservices">
  <div className="container py-lg-5 py-md-4 py-2">
    <h3 className="title-big text-center">Hand-Crafted services</h3>
    <Middle/>
    </div>
</section>


        </>
    )
}