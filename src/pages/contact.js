import { useState } from "react";
import Banner from "../comman/banner";
import Footer from "../comman/footer";
import Header from "../comman/header";

export default function Contact() {
    return (
         <>
         <Header/>
         <Banner title="Get in Touch" subtitle="Contact"/>
        <Contactother/>
        <Footer/>



  
        </>
    );
   
       
}

function Contactother() {

  const [data, setdata] = useState({
    username:"",
    useremail:"",
    userphone:"",
    usersubject:"",
    usermessage:"",
  });

  const handlechange=(e) => {
    const {name,value}=e.target; 
    setdata(
     (prevdata)=>(
         {
             ...prevdata,
             [name]:value,
         }
     )
    )
}

function submitt(e) {
  e.preventDefault();
  console.log(data)
}





    return (
        <>
<section className="w3l-contact-7 pt-5" id="contact">
  <div className="contacts-9 pt-lg-5 pt-md-4">
    <div className="container">
      <div className="top-map">
        <div className="row map-content-9">
          <div className="col-lg-8">
            <p className="mb-4">Your email address will not be published. Required fields are marked *</p>
            <form action="https://sendmail.w3layouts.com/submitForm" onSubmit={submitt} method="post"  className="text-right">
              <div className="form-grid">
                <input type="text" name="username" id="w3lName" value={data.username} onChange={handlechange} placeholder="Name*" required />
                <input type="email" name="useremail" id="w3lSender" value={data.useremail} onChange={handlechange} placeholder="Email*" required />
                <input type="text" name="userphone" id="w3lPhone" value={data.userphone} onChange={handlechange} placeholder="Phone number*" required />
                <input type="text" name="usersubject" id="w3lSubject" value={data.usersubject} onChange={handlechange} placeholder="Subject" />
              </div>
              <textarea name="usermessage" id="w3lMessage"  value={data.usermessage} onChange={handlechange} placeholder="Message" defaultValue={""} />
              <button type="submit" className="btn btn-primary btn-style mt-3">Submit</button>
            </form>
          </div>
          <div className="col-lg-4 cont-details">
            <address>
              <h5 className>Our Office Address</h5>
              <p><span className="fa fa-map-marker" />Style web design studio, 208 Trainer Avenue street,
                Corner Market, NY - 62617 </p>
              <p><span className="fa fa-phone" /><a href="tel:+1(12) 366 411 4999"> +1(12) 366 411
                  4999</a></p>
              <p> <a href="mailto:mail@example.com"><span className="fa fa-envelope" />mail@example.com</a></p>
              <p> <a href="mailto:support@example.com"><span className="fa fa-support" />support@example.com</a></p>
              <h5 className="mt-4 mb-3">Follow us on social media</h5>
              <div className="main-social-footer-29">
                <a href="#facebook" className="facebook"><span className="fa fa-facebook m-0" /></a>
                <a href="#twitter" className="twitter"><span className="fa fa-twitter m-0" /></a>
                <a href="#instagram" className="instagram"><span className="fa fa-instagram m-0" /></a>
                <a href="#linkedin" className="linkedin"><span className="fa fa-linkedin m-0" /></a>
              </div>
            </address>
          </div>
        </div>
      </div>
    </div>
    <div className="map mt-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin" frameBorder={0} style={{border: "0"}} allowFullScreen />
    </div>
  </div>
</section>

        </>
    )
}