// import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'
import Hero from '../../assets/images/hero.png'
import './index.scss';

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> Howdy! <br/>I'm  
                {/* <img src={LogoTitle} alt='developer'/>
                  nuka */}
                  

                  <span className = "pink"> Anuka</span>,
                <br/>
                Web Developer and <br/>UX Designer
                </h1>
                {/* <h2> Full-Stack Developer /  Javascript Expert / Ramen Enthusiast </h2> */}
                
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>
                <Link to="/projects" className='flat-button'> VIEW PROJECTS </Link>
            </div>
            <div className='image-zone'>
                <img src={Hero} alt='developer'/>
                <p> Full-stack developer and connoisseur of ramen.<br/> 
                    Love to bring my background in UX design and user-centric focus 
                    to inform my competitive approach to coding.<br/> 
                    I consider myself a 'forever student' with my eagerness to build on my foundations,
                    even playing the harmonica!
                </p>
            </div>
        </div>
    )
}

export default Home;