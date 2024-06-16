import React from "react";
import "./Footer.css";
import Email from "../../static/email.svg";
import Contact from "../../static/contact.svg";

//mongodb+srv://ishariharan2004:<password>@edu-data-db.wpivmo0.mongodb.net/?retryWrites=true&w=majority&appName=edu-data-db
//BfUIbXYmfFGAZez2
//ishariharan2004

function Footer() {
    return (
        <div className="footer">
            <div className="FooterContainer">
                <div className="ContactUs">
                    <h2>Contact Us</h2>
                    <div className="FooterEmail">
                        <div>
                            <img src={Email} alt="email" />
                        </div>
                        <div>
                            <p>annauniversity@email.com</p>
                        </div>
                    </div>
                    <div className="FooterContact">
                        <div>
                            <img src={Contact} alt="Contact" />
                        </div>
                        <div>
                            <p>+044 1234 5678 565</p>
                        </div>
                    </div>
                </div>
                <div className="QuickLinks">
                    <h2>Quick Links</h2>
                </div>
                <div className="StudentCorner">
                    <h2>Student Corner</h2>
                </div>
            </div>
            <div className="CopyRights">
                <p>Copyright @ Ramanujan Computing Centre | Anna University, Chennai.</p>
            </div>
        </div>
    );
}

export default Footer;
