import React,{Component} from 'react';
import '../General.css';
import './Portfolios.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import applogo from "../../Images/PremiumApp/premiumapp.png";
import work1 from "../../Images/HearMe/HearMe.png";
import work3 from "../../Images/PEEL/PeelLogo.png";
import work9 from "../../Images/FYPJ/specs.png";

export class PremiumApp extends Component{
    render(){
        return(
            <div style={{paddingBottom:"5%"}} className='fadein'>
                <Helmet>
                <title>Premium App | Rianne's Studio</title>
                </Helmet>
                <div style={{paddingBottom:"5%",paddingTop:"3%",fontFamily:"Raleway", width:"65%", margin:"0 auto", textAlign:"left"}}>
                    <h4 className='fonts'>Premium App </h4>
                        <p style={{textAlign:"center"}}>
                            My experience developing an app for a tuition agency for premium tutors. 
                            The goal is to allow tutors to make their own arrangements with the clients in regards to attendances.
                        </p>
                        <p style={{fontSize:"14px", margin:"0 auto", textAlign:"center"}}><img src={applogo} className='imagePremium' alt="applogo"/> Disclaimer: This logo is not the official logo.</p>
                        <table  className='table_adjust_port'>
                            <tr>
                                <td className='lines'>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>Deliverables</h3>
                                    <p className='subbody'>
                                        User Interface (Mobile)<br/>
                                        Attendance System<br/>
                                        Assignment System <br/>
                                        Scheduling System
                                    </p>
                                </td>
                                <td className='lines'>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>My Role</h3>
                                    <p className='subbody'>
                                        Frontend & <br/>
                                        Backend Development
                                    </p>
                                </td>
                                <td>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>Context</h3>
                                    <p className='subbody'>
                                        Duration : 5 Months <br/>
                                        Team: 1 UX designer & 3 other developers
                                    </p>
                                </td>
                            </tr>
                        </table>

                        <hr/>

                        <h5 className='subheader'>Background</h5>
                        <p>
                            This app was created in response to the need for a more efficient way for tutors to manage their own sessions & responsibilities without relying on 
                            manual coordination. Previously, routine tasks like scheduling lessons, creating sessions & updating attendance often required external assistance,
                            which then slowed down the processes & created unnecessary friction. 
                        </p>
                        <p>
                            The goal of the app is to provide tutors with a streamlined, self-service tool that allows 
                            them to independently handle tasks such as scheduling & submitting of attendance, & accessing assignment 
                            information & ultimately improving workflow & reducing reliance on support systems.
                        </p>
                        <hr/>
                        <h5 className='subheader'>Attendance System</h5>
                        <p>
                            The Attendance System was progressively developed to streamline session tracking, improve user input handling, and support recurring session logic. 
                            Key milestones included implementing custom calendar logic with time pickers, supporting both single and batch submission workflows, and enabling 
                            detailed error handling for edge cases. The system also introduced smooth animations, improved visual feedback, and adaptive UI for mobile use. 
                            Multiple rounds of debugging enhanced reliability across browsers and devices, with persistent state handling to remember previous entries and user 
                            actions. 
                        </p>

                        <hr/>
                        
                        <h5 className='subheader'>Scheduling System</h5>
                        <p>
                            The Scheduling System evolved to support complex scenarios such as recurring events, grouped sessions, and rescheduling with constraints. Core 
                            efforts went into refining the calendar system, time validation, and conditional alerting for overlapping or invalid entries. A robust routing 
                            and redirection logic was established to preserve session context and user progress. Edge-case handling was improved through comprehensive testing, 
                            and the UI was enhanced with animations, empty states, and cross-device responsiveness to ensure a seamless user experience. 
                        </p>
 
                        <hr/>
                        <h5 className='subheader'>Assignment System</h5>
                        <p>
                            The Assignment System focused on delivering a clear and responsive interface for managing tasks. This included building advanced search and filter functionalities, 
                            optimizing scroll behavior, and refining visual indicators for grouped assignments. Enhancements also involved dynamic content rendering, handling of duplicate or 
                            conflicting entries, and consistent user feedback via modals and notifications. Emphasis was placed on improving logic for tutors handling multiple students, with 
                            improvements to data accuracy and display consistency.
                        </p>
                        <hr/>
                        <h5 className='subheader'>Overall</h5>
                        <p>
                            Across all systems, the app's development centered on usability, maintainability, and performance. Key efforts included robust form validation, 
                            consistent visual design, animation and feedback improvements, and mobile optimization. Core components were made reusable, navigation flows were
                            tightened, and documentation was prioritized for future scalability. Cross-browser and cross-platform testing ensured stability, while recurring bug 
                            fixes and logic enhancements significantly improved reliability. The final product is a streamlined tool empowering tutors with full control over their
                             responsibilities. 
                        </p>
                       
                </div>

                <div class="with-lines2">
                    <p>Check out some of my other works!</p>
                </div>
                <div class="bestworksothers">
                    <div class="bestworksitem">
                        <Link to="/HearingAidApp" className='navstyle'>
                            <div className='image1container'>
                                <img src={work1} className='imagework1' alt="Logo"/>
                            </div>
                            <div className='textleft'>       
                                <b>Hearing Aid App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>Hearing Aid App <br/> (UX Design)</span> 
                            </div>
                        </Link>
                    </div>
                    <div class="bestworksitem">
                        <Link to="/FnBWebsite" className='navstyle'>
                            <div className='image1container'>
                                <img src={work3} className='imagework3' alt="Logo"/>
                            </div>
                            <div className='textleft'>
                                <b>FnB Website</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>Front-End of the app <br/> (UX Design & Partial Development) </span> 
                            </div>
                        </Link>
                    </div>
                    <div class="bestworksitem">
                        <Link to="/SpectacleE-commerceApp" className='navstyle'>
                            <div className='image1container'>
                                <img src={work9} className='imagework2' alt="Logo"/>
                            </div>
                            <div className='textleft'>
                                <b>Spectacle E-commerce App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>First phase of the app creation <br/>(UX Design & First stage Development)</span> 
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}