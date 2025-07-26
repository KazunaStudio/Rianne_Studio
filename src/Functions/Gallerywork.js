import React from 'react';
import { Link } from 'react-router-dom';
import '../Functions/Functions.css';
import work1 from "../Images/PremiumApp/premiumapp.png";
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
                    <Link to="/SpectacleE-commerceApp" className='navstyle'>
                        <div className='image1container'>
                            <img src={work2} className='imagework2' alt="Logo"/>
                        </div>
                        <div className='textleft'>
                            <b>Spectacle E-commerce App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>First phase of the app creation <br/>(UX Design & First stage Development)</span> 
                        </div>
                    </Link>
                </div>
                <div className="bestworksitem fadein">
                    <Link to="/PremiumApp" className='navstyle'>
                        <div className='image1container'>
                            <img src={work1} className='imagework roundimg' alt="Logo"/>
                        </div>
                        <div className='textleft'>       
                            <b>Premium App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>Application <br/> (Full Stack Development)</span> 
                        </div>
                    </Link>
                </div>
                <div className="bestworksitem">
                    <Link to="/FnBWebsite" className='navstyle'>
                        <div className='image1container'>
                            <img src={work3} className='imagework3' alt="Logo"/>
                        </div>
                        <div className='textleft'>
                            <b>FnB Website</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>Front-End of the app <br/> (UX Design & Partial Development) </span> 
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Gallerywork;