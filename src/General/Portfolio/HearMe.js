import React,{Component} from 'react';
import '../General.css';
import './Portfolios.css';
import video from "./Videos/HearMe.mp4";
import work1 from "../../Images/HearMe/HearMe.png";
import work2 from "../../Images/HearMe/googleform.png";
import work3 from "../../Images/HearMe/piechart.png";
import work4 from "../../Images/HearMe/HEARME_img1.png";
import work5 from "../../Images/HearMe/CropPreview.png";
import work6 from "../../Images/HearMe/NoiseDetection.png";
import work7 from "../../Images/HearMe/chatmsg.png";
import work9 from "../../Images/FYPJ/specs.png";
import work10 from "../../Images/PEEL/PeelLogo.png";
import {Nav} from 'react-bootstrap';
import { Helmet } from 'react-helmet';


export class HearMe extends Component{
    render(){
        return(
            <div style={{paddingBottom:"5%"}}>
                <Helmet>
                <title>Hearing Aid App | Rianne's Studio</title>
                </Helmet>
                <div style={{paddingBottom:"5%",paddingTop:"3%",fontFamily:"Raleway", width:"65%", margin:"0 auto", textAlign:"left"}}>
                    <h4 className='fonts'>Hearing Aid App</h4>
                        <p style={{textAlign:"center"}}>
                            My experience designing an app for a school project to assist individuals with 
                            hearing disabilities, specifically those facing mild to profound hearing loss
                        </p>
                        <p style={{fontSize:"14px", margin:"0 auto", textAlign:"center"}}><img src={work1} className='imagehearme' alt="hearmeimage"/>Fun Fact: This logo is what I have made using Krita & Canva.</p>
                        <table style={{margin:"3% auto",width:"90%"}}>
                            <tr>
                                <td className='lines'>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>Project Deliverables</h3>
                                    <p className='subbody'>
                                        Unique Value Proposition <br/>
                                        Interactive Prototype
                                    </p>
                                </td>
                                <td className='lines'>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>My Role</h3>
                                    <p className='subbody'>
                                        User Research <br/>
                                        UI/UX Design <br/>
                                        Interactions and Visuals 
                                    </p>
                                </td>
                                <td>
                                    <h3 className='subheader' style={{marginLeft: "10%"}}>Context</h3>
                                    <p className='subbody'>
                                    Duration : 6 Months
                                    Team: Sagaan Pillai, Noor Ellyiana, Koh Xi Ze
                                    </p>
                                </td>
                            </tr>
                        </table>

                        <hr/>
                        <h5 className='subheader'>Problem Overview</h5>
                        <p>
                            Did you know, according to the World Health Organization, more than 5% of people worldwide, around 430 million, 
                            deal with hearing loss? And get this, it shoots up to a whopping 25% for the older folks. 
                            It's kind of heart-wrenching, isn't it? 
                        </p>
                        <p>
                            I mean, imagine being in a chat and missing out on 
                            crucial info just because of hearing loss—it's like skipping a beat in the conversation. 
                            What hits home is, that it's not just the profound cases; even folks with milder issues face 
                            this safety challenge.
                        </p>
                        <p>
                            Picture this: trying to stay alert in a world that's not playing the full soundtrack. 
                            It's a real universal struggle, from mild to profound hearing loss.
                        </p>
                        <p>And so we decided we would like to help these individuals.</p>
                        <hr/>
                        <h5 className='subheader'>Feasibility Study</h5>
                        <div>
                            <p>#ResearchFirst</p>
                            <p>These were the methods we use:</p>
                            <ol class="custom-list">
                                <li>Questionnaires</li>
                                <li>News articles</li>
                                <li>Government publication</li>
                            </ol>

                            <p>
                                I began the design exercise with a focused brainstorming session to capture initial thoughts. Prior to research, 
                                I outlined key insights needed from potential users, this included:
                            </p>
                            <p>
                                <ul>
                                    <li>Their typical hearing loss range</li>
                                    <li>Their Daily activities</li>
                                    <li>Challenges faced</li>
                                    <li>Factors affecting hearing aid use.</li>
                                </ul>
                            </p>

                            <p>
                                To gather essential information, I designed a Google Forms questionnaire aimed at reaching a broad audience 
                                with hearing disabilities. The use of anonymous responses facilitated quick feedback, helping me assess 
                                the effectiveness of my questions in capturing valuable insights.  
                            </p>

                            <table className='container'>
                                <tr>
                                    <td>
                                        <img src={work2} className='googleform' alt="googleform"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='indents'>
                                        <span>Feel free to take a look at the questionnaire
                                        <a href="https://forms.gle/rsNKZKPbdpadFZu5A" target="_blank"> here</a></span>
                                    </td>
                                </tr>
                            </table>
                            
                            <p>
                                I engaged with diverse perspectives on deafness through Reddit communities, garnering insights from 
                                31 individuals over a few weeks. Despite the modest sample size, valuable insights emerged. Subsequently, 
                                I conducted in-depth research online, explor ing news articles and government publications to enhance my 
                                understanding further.
                            </p>
                        </div>
                        <hr/>
                        <h5 className='subheader'>Conclusion on Feasibility Study</h5>
                        
                        <table className='container'>
                            <tr>
                                <td className='indent2'>
                                    <span>The Degree of Hearing Loss from the respondents</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={work3} className='piechart' alt="piechart"/>
                                </td>
                            </tr>
                        </table>
                        <p>                     
                            Based on the survey result, it aligns with the online 
                            research on moderate hearing loss prevalence.
                        </p>
                        <p>
                            Primary activities for these individuals includes:
                            <ul>
                                <li>Watching videos, movies, or TV</li>
                                <li>Using phones for calls and texts</li>
                            </ul>
                        </p>
                        <p>
                        Among the respondents experiencing daily difficulties, 64.5% reported challenges including:
                            <ul>
                                <li>Missing sounds like a car honking</li>
                                <li>Struggling to hear media</li>
                                <li>Facing communication obstacles</li>
                                <li>Relying on verbal announcements during travel</li>
                            </ul>
                        </p>
                        <p>
                            67.7% of respondents do not use hearing aids, citing reasons such as cost, discomfort, and maintenance expenses, 
                            which mirrors findings from online research.
                        </p>
                        <p>
                            This mirrors findings from online research indicating a notable portion of those with hearing loss 
                            forgo using hearing aids.
                        </p>
                        <hr/>
                        <h5 className='subheader'>Tackling Hearing Challenges with Innovation</h5>
                        <p>
                            To address challenges associated with hearing loss, spanning from mild to profound, and insightful 
                            discussions, my team and I chose to develop an empowering app. This app offers real-time transcription of 
                            spoken words, visual alerts for crucial sounds, and environmental cue recognition. It also facilitates seamless 
                            communication with features like text messaging and video calling.
                        </p>
                        <p>
                            The app's inclusive design also encourages community engagement and ultimately enhances their independence and overall quality 
                            of life.
                            <img src={work4} className='phone' alt="preview"/>
                        </p>
                        <hr/>
                        <h5 className='subheader'>Designing HearMe</h5>
                        <p>Collaborating with our lecturer and team members proved instrumental in refining the app's design. Ultimately, 
                            we unanimously agreed to proceed with a streamlined yet user-friendly interface for the application.
                        </p>
                        <img src={work5} className='phone' alt="preview"/>
                        <p>
                            We opted for a minimalist approach, incorporating basic and straightforward icons complemented by a 
                            soothing blue-grey color scheme.
                        </p>
                        <p>
                            The primary features include:
                        </p>
                        <h6>Noise Dectection</h6>
                        <p>
                            The noise detection feature for people with mild to profound deafness utilizes advanced audio recognition for 
                            customized or automatic alerts, enhancing situational awareness and inclusivity.
                            <img src={work6} className='phone' alt="preview"/>
                        </p>

                        <h6>Captioning Service</h6>
                        <p>
                            Along with our noise detection feature, we've incorporated an integrated captioning service for calls 
                            in our communication platform. This guarantees real-time, text-based representation of spoken dialogue,
                            significantly elevating inclusivity and accessibility.
                            <img src={work7} className='phone' alt="preview"/>
                        </p>
                        <hr/>
                        <h5 className='subheader'>The hope of the app & Key Takeaways</h5>
                        <p>The app's affordability, automatic noise detection, and customizable features make it ideal for users with mild 
                            to profound deafness. Additionally, the inclusion of a caption service for calls enhances accessibility, offering 
                            a comprehensive solution for a personalized and impactful user experience.
                            <br/><br/>
                            Reflecting on the project my team and I undertook, I've gathered some key insights:
                            <ol>
                                <li>
                                    Avoid assumptions: Validating assumptions is crucial. User issues may differ from our initial 
                                    perceptions, emphasizing the need for continuous validation.
                                </li>
                                <li>
                                    Data-driven UX: Utilizing user research data to prioritize needs and pinpoint pain points greatly simplifies the 
                                    visual design process
                                </li>
                                <li>
                                    Balance Research and Design: Striking equilibrium between thorough research and actual visual design is 
                                    imperative. Both play equally vital roles in crafting user-centric designs.
                                </li>
                                <li>
                                    Embrace Constructive Feedback: Incorporating constructive feedback is essential to design something 
                                    genuinely beneficial for users. After all, designing should address user needs effectively.
                                </li>
                            </ol>
                        </p>
                        <hr/>
                        <h5 className='subheader' style={{textAlign:"center"}}>The Demonstration</h5>
                        <br/>
                        <video src={video} controls autoplay className='container'/>
                </div>

                <div class="with-lines">
                    <p>Check out some of my other works!</p>
                    </div>
                    <div class="bestworksothers">
                    <div class="bestworksitem">
                        <Nav>
                            <Nav.Link href="/SpectacleE-commerceApp" className='navstyle'>
                                <div className='image1container'>
                                    <img src={work9} className='imagework2' alt="Logo"/>
                                </div>
                                <div className='textleft'>
                                    <b>Spectacle E-commerce App</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>First phase of the app creation <br/>(UX Design & First stage Development)</span> 
                                </div>
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div class="bestworksitem">
                        <Nav>
                            <Nav.Link href="/FnBWebsite" className='navstyle'>
                                <div className='image1container'>
                                    <img src={work10} className='imagework3' alt="Logo"/>
                                </div>
                                <div className='textleft'>
                                    <b>FnB Website</b> <br/> <span style={{fontFamily:"Ralewaylight",fontSize:"16px"}}>Front-End of the app <br/> (UX Design & Partial Development) </span> 
                                </div>
                            </Nav.Link>
                        </Nav>
                    </div>
                </div>
                
            </div>
        )
    }
}