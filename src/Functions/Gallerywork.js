import React from 'react';
import {Nav, NavLink} from 'react-bootstrap';
import '../Functions/Functions.css';
import work1 from "../Images/HearMe/HearMe.png";
import work2 from "../Images/FYPJ/specs.png";
import work3 from "../Images/PEEL/PeelLogo.png";

const Gallerywork = () => {
    return(
        <div>
            <div class="with-lines">
                    <p>Check out some of my best works!</p>
            </div>
            <div class="bestworks">
                <div class="bestworksitem">
                    <Nav>
                        <Nav.Link href="./HearingAidApp" className='navstyle'>
                            <div className='image1container'>
                                <img src={work1} className='imagework1' alt="Logo"/>
                            </div>
                            <div className='textleft'>       
                                <b>Hearing Aid App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>Hearing Aid App <br/> (UX Design)</span> 
                            </div>
                        </Nav.Link>
                    </Nav>
                </div>
                <div class="bestworksitem">
                    <Nav>
                        <Nav.Link href="./SpectacleE-commerceApp" className='navstyle'>
                            <div className='image1container'>
                                <img src={work2} className='imagework2' alt="Logo"/>
                            </div>
                            <div className='textleft'>
                                <b>Spectacle E-commerce App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>First phase of the app creation <br/>(UX Design & First stage Development)</span> 
                            </div>
                        </Nav.Link>
                    </Nav>
                </div>
                <div class="bestworksitem">
                    <Nav>
                        <Nav.Link href="./FnBWebsite" className='navstyle'>
                            <div className='image1container'>
                                <img src={work3} className='imagework3' alt="Logo"/>
                            </div>
                            <div className='textleft'>
                                <b>FnB Website</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>Front-End of the app <br/> (UX Design & Partial Development) </span> 
                            </div>
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        </div>
    );
}

export default Gallerywork;