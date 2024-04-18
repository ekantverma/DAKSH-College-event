import React from "react";
import sambhavLogo from "../../assets/Logo.png";
import classes from "./Footer.module.css";


const grabbitinsta = "https://www.instagram.com/mangalayatan.university/?hl=en";
const grabbitlinkedin = "https://www.linkedin.com/school/mangalayatan-university-aligarh/?originalSubdomain=in";

const grabbitwebsite = "https://www.mangalayatan.in/"

const spiderurl = "https://www.linkedin.com/in/om-gawande/";
const saurabh = "https://www.linkedin.com/in/ekantverma/";
const sanyog = "https://www.linkedin.com/in/sanyog-mahajan-8288a7204/";

const grabbiturl = "https://www.grabbitdypcoe.in";
const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <img
                className={classes.footer_sambhav_image}
                src={sambhavLogo}
                alt="sambhavLogo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>SAMBHAV'23</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description}>
          Daksh-2024, the three-day extravaganza organized by Mangalayatan University, Aligarh, is a vibrant celebration of talent and creativity.
          </p>
          <div className={classes.footer_social_item}>
  
            {/* <div>
              <a
                href={sambhavtwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>  </div> */}
          </div>
        </div>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <a
                href={grabbiturl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
    
              </a>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>GrabBit</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description}>
            Get the latest updates about internships, hackathons, job openings
            and much more..
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={grabbitinsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div>
              <a
                href={grabbitlinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>
            </div>
    
            <div>
              <a
                href={grabbitwebsite}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/domain--v1.png"
                  alt="zsdsff"
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className={classes.footer}second'>
          <h2 className={classes.footer}menu-heading'>Menu</h2>
          <h6 className={classes.footer}page-link'>About US</h6>
          <h6 className={classes.footer}page-link'>Term of Use</h6>
          <h6 className={classes.footer}page-link'>Privary Policy</h6>
          <h6 className={classes.footer}page-link'>Order History</h6>
          <h6 className={classes.footer}page-link'>Return policy</h6>
        </div> */}
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>Mangalayatan University Aligarh</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                alt=""
              />
            </div>
            <div>
              <p>9359555555</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <p className={classes.mail}>www.mangalayatan.in/</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Website created by{" "}
          <a
            href={spiderurl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
           
          </a>{" "}
          {" "}
          <a
            href={saurabh}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            @Ekant Verma
          </a>{" "}
          {" "}
          <a
            href={sanyog}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            
          </a>{" "}
          
        </h4>
      </div>
    </div>
  );
};

export default Footer;
