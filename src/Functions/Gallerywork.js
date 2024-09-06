import React from 'react';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Functions/Functions.css';
import work1 from "../Images/HearMe/HearMe.png";
import work2 from "../Images/FYPJ/specs.png";
import work3 from "../Images/PEEL/PeelLogo.png";

const Gallerywork = () => {
    return(
        <div>
            <div className="with-lines">
                    <p>Check out some of my best works!</p>
            </div>
            <div className="bestworks">
                <div className="bestworksitem">
                    <Nav>
                        <Link to="/HearingAidApp" className='navstyle'>
                            <div className='image1container'>
                                <img src={work1} className='imagework1' alt="Logo"/>
                            </div>
                            <div className='textleft'>       
                                <b>Hearing Aid App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>Hearing Aid App <br/> (UX Design)</span> 
                            </div>
                        </Link>
                    </Nav>
                </div>
                <div className="bestworksitem">
                    <Nav>
                        <Link to="/SpectacleE-commerceApp" className='navstyle'>
                            <div className='image1container'>
                                <img src={work2} className='imagework2' alt="Logo"/>
                            </div>
                            <div className='textleft'>
                                <b>Spectacle E-commerce App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>First phase of the app creation <br/>(UX Design & First stage Development)</span> 
                            </div>
                        </Link>
                    </Nav>
                </div>
                <div className="bestworksitem">
                    <Nav>
                        <Link to="/FnBWebsite" className='navstyle'>
                            <div className='image1container'>
                                <img src={work3} className='imagework3' alt="Logo"/>
                            </div>
                            <div className='textleft'>
                                <b>FnB Website</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>Front-End of the app <br/> (UX Design & Partial Development) </span> 
                            </div>
                        </Link>
                    </Nav>
                </div>
            </div>
        </div>
    );
}

export default Gallerywork;