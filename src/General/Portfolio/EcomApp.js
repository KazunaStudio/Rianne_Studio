import React,{Component} from 'react';
import '../General.css';
import './Portfolios.css';
import phone1 from "../../Images/FYPJ/specs.png";
import hierarchy from "../../Images/FYPJ/pageheri.jpg";
import firstdraft from "../../Images/FYPJ/firstdraft.png";
import framework from "../../Images/FYPJ/framedraft.png";
import buyer from "../../Images/FYPJ/Buyer.png";
import seller from "../../Images/FYPJ/Seller.png";
import final from "../../Images/FYPJ/Prototype.gif";
import work1 from "../../Images/HearMe/HearMe.png";
import work3 from "../../Images/PEEL/PeelLogo.png";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export class Ecomapp extends Component{
    render(){
        return(
            <div style={{paddingBottom:"5%"}} className='fadein'>
                <Helmet>
                <title>Spectacle E-commerce App | Rianne's Studio</title>
                </Helmet>
                <div style={{paddingBottom:"5%",paddingTop:"3%",fontFamily:"Raleway", width:"65%", margin:"0 auto", textAlign:"left"}}>
                    <h4 className='fonts'>Spectacle E-commerce App </h4>
                        <p style={{textAlign:"center"}}>
                            My experience designing an app for a start-up e-commerce business relating to Spectacles. 
                            The goal is to promote the recycling of spectacles by selling/donating.
                        </p>
                        <p style={{fontSize:"14px", margin:"0 auto", textAlign:"center"}}><img src={phone1} className='imagehearme' alt="phone1"/> Disclaimer: This logo is what I have made using AI, not the official logo used due to copyright.</p>
                        <table  className='table_adjust'>
                            <tr>
                                <td className='lines'>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>Deliverables</h3>
                                    <p className='subbody'>
                                        User Interface (Mobile)<br/>
                                        Interactive Prototype<br/>
                                        Technical Architecture<br/>
                                        Seed Project
                                    </p>
                                </td>
                                <td className='lines'>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>My Role</h3>
                                    <p className='subbody'>
                                        UI/UX Design<br/>
                                        Wireframing <br/>
                                        App Development
                                    </p>
                                </td>
                                <td>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>Context</h3>
                                    <p className='subbody'>
                                        Duration : 3 Months
                                        Team: Akaarsh Gajendran, Ms Liz Wang (Mentor)
                                    </p>
                                </td>
                            </tr>
                        </table>

                        <hr/>

                        <h5 className='subheader'>Background</h5>
                        <p>
                            This app addresses the common challenge faced by eyeglass owners: what to do with unwanted spectacles in good 
                            condition. Whether due to a change in prescription or fashion preference, users can sell or donate their eye-wear 
                            through this platform, promoting responsible recycling and providing an innovative solution for repurposing glasses. 
                        </p>
                        <hr/>
                        <h5 className='subheader'>Strategy</h5>
                        <div>
                            <p>
                                Infusing a touch of fun into the app's development, we'll center it around the dynamic relationship between 
                                sellers and buyers. With seven engaging modules, the platform aims to turn the eye-wear exchange into an enjoyable 
                                experience. This seller/buyer-centric strategy ensures a user-friendly interface, making the journey of selling 
                                or buying eye-wear not only efficient but also fun and interactive.
                            </p>
                            <p>
                                To gather essential information, I designed a Google Forms questionnaire aimed at reaching a broad audience 
                                with hearing disabilities. The use of anonymous responses facilitated quick feedback, helping me assess 
                                the effectiveness of my questions in capturing valuable insights.  
                            </p>
                        </div>

                        <hr/>

                        <h5 className='subheader'>Analysis & Planning</h5>
                        <p>
                            We've examined competitors like Carousell, New2U Thrift Shop, and Visio Optical, identifying key selling points. To meet business 
                            objectives, our app will feature seller auctions, a donation page outlining usage, and end-to-end services. Users can filter by 
                            brand, lens type, frames, and colors, with varied delivery options (self-deliver, partner delivery, and collection from partners).
                        </p>
                        <p>
                            We also listed out the pros and cons of the app which include:
                            <ul>
                                <li>Auctions that provide unique specs but may attract scammers</li>
                                <li>Sellers and Shops can earn passive income</li>
                                <li>Buyers can enjoy free services and access to trendy specs</li>
                                <li>Partners can benefit through charitable donations, faster deliveries, and a platform to sell old products</li>
                            </ul>
                        </p>
                        <p className='adjustment'>Planning of the page hierarchy</p>
                        <img src={hierarchy} className='imageself' alt="hierarchy"/>
                        

                        <hr/>

                        <h5>Drafting</h5>
                        <p>
                            With the knowledge from the initial analysis and conversations with my members and mentor, I then use PowerPoint to 
                            create a rough outline of how the app will look like.
                        </p>
                        <p className='adjustment'>First rough framework of the homepage</p>
                        <img src={firstdraft} className='imageself' alt="firstdraft"/>
                        <br/>
                        <p>
                            After finalizing the general concept with my mentor and team member, I transitioned to Figma for a more flexible and 
                            intuitive design process, allowing seamless adjustments and arrangement of elements.
                        </p>

                        <hr/>

                        <h5 className='subheader'>Design</h5>
                        <p>
                            Based on feedback from my mentor, team members, and the client, I successfully transformed my wireframes into 
                            high-fidelity mockups using Figma. 
                        </p>
                        <p className='adjustment'>
                            A mockup version of the project
                        </p>
                        <img src={framework} className='imageself' alt="framework"/>
                        <br/>
                        <h4 className='textadjustment'>Buyers' View</h4>
                        <img src={buyer} className='imageself' alt="buyer"/>
                        <br/>
                        <h4 className='textadjustment'>Sellers' View</h4>
                        <img src={seller} className='imageself' alt="seller"/>

                        <hr/>
                        
                        <h5 className='subheader'>Prototype</h5>
                        <p>
                            Creating a high-fidelity prototype using Principle was facilitated by the mockups I had developed, marking a significant milestone. This step 
                            allowed my team to engage with the design realistically and offer valuable constructive feedback.
                        </p>
                        <img src={final} className='imageself' alt="Prototype"/>
                        
                        <hr/>

                        <h5 className='subheader'>Key Takeaway</h5>
                        <p>
                            Despite facing challenges like refining color contrast and making multiple mockup adjustments, I've learned to 
                            tackle these obstacles head-on. Working on the project and optimizing the mockup's interactivity has made the 
                            process enjoyable and rewarding.
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
                </div>
            </div>
        )
    }
}