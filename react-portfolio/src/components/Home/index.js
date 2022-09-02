// import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'
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
                <h2> Full-Stack Developer /  Javascript Expert / Ramen Enthusiast </h2>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>
                <Link to="/projects" className='flat-button'> VIEW PROJECTS </Link>
            </div>
        </div>
    )
}

export default Home;