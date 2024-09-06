import React,{Component,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import selfimg from "./Images/Self-Image.png";
import sitimg from "./Images/SIT_LOGO.png";
import "./App.css"
import GalleryWork from './Functions/Gallerywork.js';


export class Home extends Component{
    render(){
        return(
            <div style={{paddingBottom:"5%"}}>
                <div className='section1'>
                    <div className='innersection1'>
                        <div className='innercontrol'>
                            <div className='columnstyle2'>
                                <div className='centers'>
                                    <RacingText />
                                    <p style={{fontFamily:"Raleway"}}>A student living in <span style={{fontFamily:"MarckScript", fontSize:"30px"}}>Singapore</span>, studying <span style={{fontFamily:"SourceCodePro"}}>Applied Computing</span> at 
                                        <img src={sitimg} className='SITimage' alt="Logo"/>with an interest to be <span style={{fontFamily:"Salsa", fontSize:"20px"}}>UX/UI designer or developer</span>.
                                    </p>
                                    <button className='storybutton'>
                                        <Link to="/About" style={{color:"white", textDecoration:"none"}}>Dive Into My Story 
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "10px"}}  width="24" height="24" fill="rgb(255, 255, 255)" class="bi bi-book" viewBox="0 0 16 16">
                                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                                        </svg>
                                        </Link>
                                    </button> 
                                </div>
                            </div>
                            <div className='columnimage2'>
                                <div className="image-container2">
                                    <img src={selfimg} className='imagehome' alt="Logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GalleryWork/>
            </div>
        )
    }
}

function RacingText() {
    const [startRacing, setStartRacing] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartRacing(true); // Start the racing animation after a delay
        }, 1000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <h1 className={`mobilever racingtext ${startRacing ? 'start-racing' : ''}`}>Welcome To  My Studio!</h1>
    );
}