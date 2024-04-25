import React from "react";

const Footer = () => {
  return (
    <div>
    <div className='Footer bg-warning w-full' style={{background:'#00B0B5', color:'white', padding:'3rem 0'}}>
      <div className='Footercontainer '>
        <div className='row footer'>
          <div className='col-md-6 col-lg-5 col-12 ft-1' >
            <h2><span style={{color:"#49bede",margin:'10px',fontFamily: "Inria serif",fontSize: "40px"}}><b>Azal</b></span><b style={{fontFamily: "Inria serif",fontSize: "40px"}}>Shope</b></h2>
            <p style={{padding:'1rem 2rem 1rem 0',margin:'10px',fontWeight: "bold"}}>It is the best shopping app which have lots of fun in choosing your own and favourite products.And welcome to AZAL shope app.</p>
            <div className='footer-icons' style={{ color:'red' }}>
            <i class="fa-brands fa-facebook " style={{padding:' 0.5rem', background:'#49bede', color:'white', margin:'0 0.5rem', borderRadius:'50%'}}></i>
            <i class="fa-brands fa-google" style={{padding:' 0.5rem', background:'#49bede', color:'white', margin:'0 0.5rem',  borderRadius:'50%'}}></i>
            <i class="fa-brands fa-instagram" style={{padding:'0.5rem', background:'#49bede', color:'white', margin:'0 0.5rem',  borderRadius:'50%'}}></i>
            <i class="fa-brands fa-twitter" style={{padding:'0.5rem', background:'#49bede', color:'white', margin:'0 0.5rem', borderRadius:'50%'}}></i>
            
            </div>
            </div>
            
            <div className='col-md-6 col-lg-3 col-12 ft-2'>
              <h2 style={{color:'#49bede',margin:'5px',fontSize: "40px",fontFamily: "Inria serif"}}><b>Quick Links</b></h2>
              <ul style={{listStyle:'none', paddingLeft:'0',margin:'5px',fontWeight: "bold" }}>
                <li className='nav-item'>
                  <a className='nav-link' href="/">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Your Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Your Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Azalshope App Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Your Collection
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h2 style={{ color: "#49bede" ,margin:'5px',fontSize: "40px",fontFamily: "Inria serif"}}>
                <b>Contact Us</b>
              </h2>
              <div className="asd" style={{margin:'5px',fontWeight: "bold",}}>
              <p>
                <i class="fa-solid fa-phone-volume"></i> +91 987654321
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> azalshope@gmail.com
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i> World wide brands
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="last-footer"
        style={{
          background: "#00B0B5",
          color: "white",
          textAlign: "center",
          padding: "1rem 0",
        }}
      >
        <p>Assured Quality | 100% Handpicked | Easy Exchange</p>
        <li className="nav-item" style={{ listStyle: "none" }}>
          <a className="nav-link" href="/">
            Already a Customer? Sign in{" "}
          </a>
        </li>
      </div>
    </div>
  );
};

export default Footer;
