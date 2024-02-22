//Home.jsx
import React from 'react'
import './home.css'
import Topbar from '../Topbar/Topbar'
import { useSpring ,animated} from 'react-spring';


const Home = (props) => {

  const companyDetailsAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500, // Delay animation
  });

  const imageGalleryAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000, // Delay animation
  });

  const backgroundAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const contentAnimation = useSpring({
    from: { opacity: 0, marginTop: -50 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 1000, delay: 500 }, // Add a delay for staggered animation
  });


  return (
    <div align="center">
     
     <div >
    <Topbar xxx={props.checkLogout}/>
    </div>
    <animated.div className="background-animation" style={backgroundAnimation}></animated.div>
    <animated.div className="home-container" style={backgroundAnimation}>
    <animated.div style={contentAnimation}>

    <animated.div style={companyDetailsAnimation} className="company-details">

        <h1>TalentHRM</h1>
        <p><b>TalentHRM is an innovative IT company specializing in human resource management solutions tailored for 
          modern businesses. With a focus on leveraging cutting-edge technology, they craft intuitive software and 
          platforms designed to streamline HR processes,optimize talent acquisition, and enhance employee engagement.</b></p>
          </animated.div>

      
          {/* <animated.div style={imageGalleryAnimation} className="image-gallery">

        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
          alt="Company Image 1"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyypk_zow5bueBy66Cz94xoCVZGC6NuoNp2tw8PO9wA&s"
          alt="Company Image 2"
        />
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Company Image 3"
        /><br/><br/> */}

<footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Our mission is to empower businesses with innovative HR solutions that drive growth and foster a
            positive workplace culture. With a team of dedicated professionals, we are committed to delivering
            excellence and exceeding our clients' expectations.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          {/* Add links to social media profiles */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company XYZ. All rights reserved.</p>
      </div>
    </footer>
        </animated.div>
        </animated.div>
        {/* </animated.div> */}
      </div>
    
    
   

   
  )
}
export default Home
