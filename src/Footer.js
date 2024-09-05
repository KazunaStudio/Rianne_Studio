import React, { Component } from 'react';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap';
import './App.css';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="footer-content normal">
                            <Navbar.Brand href="/Rianne_Studio" className='normal'>
                                &copy; Ong Zuay Rianne
                            </Navbar.Brand>
                    </div>
                    <table className='footer-items'>
                        <thead>
                        <tr>
                            <td><Nav.Link href="/Rianne_Studio/About" style={{fontSize:"16px", color:"white"}} className='flexfooter1'>About</Nav.Link>
                            </td>
                            <td><Nav.Link href="/Rianne_Studio/Portfolio" style={{fontSize:"16px", color:"white"}} className='flexfooter1'>Portfolio</Nav.Link>
                            </td>
                            <td>
                            <Nav.Link href="https://wa.me/6585355703" target="_blank"  style={{fontSize:"14px",color:"white",textAlign:"left",fontFamily:"Ralewaylight"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                            </svg>
                        </Nav.Link>
                            </td>
                            <td>
                            <Nav.Link href="https://t.me/KazuKitsune" target="_blank" style={{fontSize:"14px",color:"white",textAlign:"left",fontFamily:"Ralewaylight"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-telegram" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                            </svg> 
                        </Nav.Link>
                            </td>
                            <td>
                            <Nav.Link href="https://www.linkedin.com/in/rianne-ong/" target="_blank" style={{fontSize:"14px",color:"white",textAlign:"left",fontFamily:"Ralewaylight",borderRadius:"50%"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16" style={{borderRadius:"50%"}}>
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </Nav.Link>
                            </td>
                        </tr>
                        </thead>
                    </table>
                </footer>
            </div>
        );
    }
}