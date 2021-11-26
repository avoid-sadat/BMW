import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
   
   
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>News</h3>
                        <ul>
                            <li><a href="#">Latest News</a></li>
                            <li><a href="#">Team</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>BMW SHOP</h3>
                        <p>exploring the world as much as I can, while trying to find a balance of ethical and sustainable travel. Come travel with me, it’s going to be fun.</p>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright">BMW SHOP © 2021</p>
            </div>
        </footer>
    </div>
   
   
    
      );
};

export default Footer;