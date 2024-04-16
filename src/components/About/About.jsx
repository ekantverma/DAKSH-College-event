// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>DAKSH 24</h2>
            <p className={classes.para}>
            Daksh-2024, the three-day extravaganza organized by Mangalayatan University, Aligarh, is a vibrant celebration of talent and creativity. With a focus on holistic development, this event offers students a platform to showcase their skills in various domains including technical, fine arts, literary, and theatrical pursuits. 
            Daksh-2024, which is scheduled for 18th, 19th, and 20th April 2024, encourages whole-hearted participation from all students, fostering a spirit of camaraderie and collaboration. Participants are not only given the opportunity to exhibit their talents but also engage in meaningful interactions with peers, faculty, and experts in their respective fields. Through Daksh-2024, Mangalayatan University reaffirms its commitment to nurturing well-rounded individuals equipped with the skills and confidence to thrive in diverse professional and creative environments.
            As the countdown to Daksh-2024 begins, we eagerly await the opportunity to witness the brilliance and ingenuity of our students, making this year's fest an unforgettable experience for all involved.  
            </p>

            {/* <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            from advanced robotics challenges to entrepreneurship hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, and a
            titanic prize money sum of above half a million rupees to make Karma
            one of the most unique tech carnivals of the country.
          </p> */}
            {/* <div className={classes.btn}>
            <Button label="Explore" />
          </div> */}
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
