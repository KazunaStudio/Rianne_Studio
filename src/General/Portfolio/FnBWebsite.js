import React,{Component} from 'react';
import '../General.css';
import './Portfolios.css';
import {Nav} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import logo from "../../Images/PEEL/PeelLogo.png";
import customerfolio from "../../Images/PEEL/customerfolio.png";
import stafffolio from "../../Images/PEEL/Stafffolio.png";
import Peel from "./Videos/PEEL.mp4";
import prototype from "../../Images/PEEL/Prototype.png";
import work9 from "../../Images/FYPJ/specs.png";
import work1 from "../../Images/HearMe/HearMe.png";

export class FnBWebsite extends Component{
    render(){
        return(
            <div style={{paddingBottom:"5%"}}>
                <Helmet>
                <title>FnB Website | Rianne's Studio</title>
                </Helmet>
                <div style={{paddingBottom:"5%",paddingTop:"3%",fontFamily:"Raleway", width:"65%", margin:"0 auto", textAlign:"left"}}>
                    <h4 className='fonts'>FnB Website</h4>
                        <p style={{textAlign:"center"}}>
                            My experience designing a website for a school project relating to F&B. The goal is to help the F&B Industry by improving their website.
                        </p>
                        <p style={{fontSize:"14px", margin:"0 auto", textAlign:"center"}}>Just an FYI, the place was shut down on the 28th of June 2020. I am sad to see it go, it was a great place to eat.<img src={logo} className='imagehearme' alt="phone1"/></p>
                        <table style={{margin:"3% auto",width:"90%"}}>
                            <tr>
                                <td className='lines'>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>Project Deliverables</h3>
                                    <p className='subbody'>
                                        User Interface <span style={{fontSize:"14px", margin:"0 auto", textAlign:"center"}}>( Web )</span><br/>
                                        Interactive Prototype <span style={{fontSize:"14px", margin:"0 auto", textAlign:"center"}}>( Partial ) </span><br/>
                                        Seed Project
                                    </p>
                                </td>
                                <td className='lines'>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>My Role</h3>
                                    <p className='subbody'>
                                        UI/UX Design<br/>
                                        App Development
                                    </p>
                                </td>
                                <td>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>Context</h3>
                                    <p className='subbody'>
                                        Duration : 6 Months<br/>
                                        Team: Roshni Shaju, Dawn Lim Yu Xuan, Nurnafiezah Bte Mohd Arifin.
                                    </p>
                                </td>
                            </tr>
                        </table>

                        <hr/>

                        <h5 className='subheader'>Background</h5>
                        <p>
                            We found the restaurant, "The Peel 1889" in a new article published by The New Paper (TNP), which states that the restaurant was struggling to stay alive 
                            due to COVID-19. So, we decided as part of our school project, we wanted to help them by improving their website and services to attract more customer 
                            to their place.
                        </p>
                        <p>
                            The Peel 1889 is a mod pizza bar that pays tribute to the evolution of the pie that has gone global. The Peel 1889 is a bar that sells a wide range 
                            of food such as pizza pasta tapas and many more. This place has a great ambiance that is suitable for family and friends to go and have a meal 
                            together. The PEEL 1889 was located at myVillage at Upper Serangoon. It was the fresh take on neighborhood pizzeria.
                        </p>
                        <hr/>
                        <h5 className='subheader'>Analysis & Planning</h5>
                        <div>
                            <p>
                                We've first taken a look at what are the problems that may have arisen due to COVID-19.
                            </p>
                            <p>
                                We listed out the problems which include:
                                <ul>
                                    <li>Inadequate Online Ordering and Payment System - Disorganized Payment Layout</li>
                                    <li>Limited Delivery Coverage and Driver Shortage - Constrained to Serangoon Due to Limited Islandwide Drivers</li>
                                    <li>Significant Communication Gap Between Customers and Company - Lack of Awareness Regarding Changes in Peel due to Absence of Customer-Company 
                                    Interaction</li>
                                    <li>Shift in Consumer Behavior - With fewer customers opting for dine-in experiences, there is a rise in online orders. However, competition in 
                                    the online space has intensified at the time</li>
                                </ul>  
                            </p>
                            <p>We then proceed to formulate user stories derived from the research we conduct.</p>
                        </div>

                        <hr/>

                        <h6 className='subheader'>Customers' Stories</h6>
                        <p>The following story was what we came up for the customer's perceptive:</p>
                        <p>
                        <img src={customerfolio} className='imageself' alt="customerfolio"/>
                        </p>
                        <h6 className='subheader'>Staffs' Stories</h6>
                        <p>And for the staff's perceptive, we came up with the following story:</p>
                        <p>
                        <img src={stafffolio} className='imageself' alt="stafffolio"/>
                        </p>
                        <br/>
                        <p>After finalizing the persona with our lecture and team members, we then used Google Sites as a place to create our prototype.</p>                   
                        <hr/>                       
                        <h5 className='subheader'>Prototype</h5>
                        <p>
                           These were the initial Homepage, Menu & Delivery Tracking page:
                        </p>
                        <img src={prototype} className='imageself' alt="Prototype"/>
                        
                        <hr/>

                        <h5 className='subheader'>Key Takeaway</h5>
                        <p>
                        The takeaway would be understanding the importance of having data encrypted to protect the users private 
                        information, how to develop a working website with basic functions using flask & managing time management when working
                        with team members really make me understand how important communication is and knowing the parts that one has to play to
                        ensure that the project runs smoothly.
                        </p>
                        <hr/>
                        <h5 className='subheader' style={{textAlign:"center"}}>My Part of The Demonstration</h5>
                        <br/>
                        <video src={Peel} controls autoplay className='container'/>
                        <br/>
                        <p>Due to the project being from a long time back, certain parts of the project is no longer working, hence decided to demo the
                            parts that I have developed.
                        </p>

                </div>

                <div class="with-lines">
                    <p>Check out some of my other works!</p>
                    </div>
                    <div class="bestworksothers">
                    <div class="bestworksitem">
                        <Nav>
                            <Nav.Link href="/Rianne_Studio/HearingAidApp" className='navstyle'>
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
                            <Nav.Link href="/Rianne_Studio/SpectacleE-commerceApp" className='navstyle'>
                                <div className='image1container'>
                                    <img src={work9} className='imagework2' alt="Logo"/>
                                </div>
                                <div className='textleft'>
                                    <b>Spectacle E-commerce App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>First phase of the app creation <br/>(UX Design & First stage Development)</span> 
                                </div>
                            </Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
        )
    }
}