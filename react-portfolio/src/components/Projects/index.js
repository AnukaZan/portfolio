import { Link } from 'react-router-dom'
import './index.scss';
import Kissmet from "../../assets/project-images/kissmet.png"
import ohshoot from "../../assets/project-images/oh-shoot.gif"

const Projects = () => {
    return(
        <div className="container projects">
            <div className="text-zone">
                <h1> <span className = "pink"> Projects </span></h1>
                <section class="works border-left">
                    <div class="work-1">
                        <div class="work-img">
                            <a href="https://boiling-tor-64905.herokuapp.com/">
                                <img src={Kissmet}/>
                            </a>
                        </div>
                        <div class ="work-title">
                            <p> Kissmet </p>
                        </div>
                    </div>

                    <div class="work">
                        <div class="work-img img-size">
                            <a href="https://ohshoot.herokuapp.com/">
                                <img src={ohshoot} alt="Retro shooter game " />
                            </a>
                        </div>
                        <div class ="work-title">
                            <p> oh-SHOOT </p>
                        </div>
                    </div>

                    <div class="work">
                        <div class="work-img img-size">
                            <a href="https://anukazan.github.io/filmpire/">
                                <img src="./images/filmpire.png" alt="Film Database Website" />
                            </a>
                        </div>
                        <div class ="work-title">
                            <p> Filmpire </p>
                        </div>
                    </div>
                    
                    <div class="work">
                        <div class="work-img img-size">
                            <a href="https://erdene.com/">
                                <img src="./images/erdene.png" alt="Mining company website"/>
                            </a>    
                        </div>
                        <div class="work-title">
                            <p> Erdene Resource Company Website Design </p>
                        </div> 

                    </div>

                    <div class="work">
                        <div class="work-img img-size">
                            <a href="https://www.figma.com/proto/XiMFYJWVM1v9Gqt7QtbeeD/Santorini-Greek-Island-Final-Prototype?page-id=174%3A943&node-id=182%3A1138&viewport=241%2C48%2C0.02&scaling=scale-down&starting-point-node-id=182%3A1138">
                                <img src="./images/santorini.png" alt="Greek restaurant website"/>
                            </a>
                        </div>
                        <div class="work-title">
                            <p> Santorini Greek Restaurant Website Design </p>
                        </div> 
                    </div>
            </section>
            </div>
        </div>
    )
}

export default Projects;