import React,{Component} from 'react';
import './General.css'
import self from "../Images/aboutme.jpg";
import BarGraph from '../Functions/bargraph';
import Gallery from '../Functions/gallery.js';
import SkillsTable from '../Functions/Skills.js';
import GalleryWork from '../Functions/Gallerywork.js';


export class About extends Component{
    render(){
        return(
            <div style={{paddingBottom:"5%"}}>
                <div className='innersection2'>
                    <div className='innercontrol2'>
                        <div className='columnimage3'>
                            <div className="image-container3">
                                <img src={self} className='imageself' alt="Logo"/>
                            </div>
                        </div>
                        <div className='columnstyle3'>
                            <div className='centers' style={{width:"75%"}}>
                                <h1 style={{fontSize:"45px"}}>My Story</h1><hr style={{borderTop:"solid 4px rgb(74, 84, 93)"}}/>
                                <p style={{fontFamily:"Ralewaylight"}}>
                                    <span style={{fontSize:"22px",fontFamily:"Raleway"}}>I'm a student studying Applied Computing at Singapore Institute of Technology (SIT).</span>
                                    <br/><br/>
                                    Since young, I love to spend my time designing things and as I grew older to solve problems with my designs.
                                    Find me exploring new places to eat, taking pictures or simply creating digital art!
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <Gallery/>
                <hr style={{marginTop:"2%",borderTop:"solid 2px rgb(74, 84, 93)",marginBottom:"2%"}}/>
                <SkillsTable/>
                <hr style={{marginTop:"5%",borderTop:"solid 2px rgb(74, 84, 93)"}} className='bargraph-container'/>
                <div className='Section2 bargraph-container '>
                    <h4>Strategic Skillset!</h4>
                    <BarGraph />
                </div>
                <hr style={{marginTop:"2%",borderTop:"solid 2px rgb(74, 84, 93)",marginBottom:"2%", boxShadow:"3px 3px 10px black"}}/>
                <GalleryWork/>
            </div>
        )
    }
}