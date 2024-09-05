import React,{Component, useState, useEffect} from 'react';
import {Navbar,Nav,Offcanvas,Container} from 'react-bootstrap';
import './App.css';
import logo from "./Images/Riannelogo(white).png";
import { useLocation } from 'react-router-dom';

export class Navigation extends Component{
      render(){
        const Menu = () => {
          const [showNavbar, setShowNavbar] = useState(false);

          useEffect(() => {
            // Set showNavbar to true after the component has mounted
            setShowNavbar(true);
          }, []);
          const location = useLocation();

          return (
            <div className='navi_paddings'>
              <Navbar expand="md" className={`navout ${showNavbar ? 'slide-down' : ''}`}  sticky="top">
                <Container fluid >
                  <table className='tables2'>
                    <td className='column1'>
                      <tr>
                        <Navbar.Brand href="/Rianne_Studio" className='image-container'>
                          <img src={logo} className='image2' alt="Logo"/>
                        </Navbar.Brand>
                      </tr>
                    </td>
                    <td className='column2'>
                      <tr>
                        <Navbar.Toggle style={{border:"none"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-filter-right" viewBox="0 0 16 16">
                            <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"/>
                          </svg>
                        </Navbar.Toggle>
                      </tr>
                  </td>
                  </table>
                  
                  <Navbar.Offcanvas>
                    <Offcanvas.Header closeButton style={{backgroundColor:"#406a74"}}>
                      <Offcanvas.Title style={{fontSize:"24px"}}>
                        <a href="/Rianne_Studio"><img src={logo} className='image2' alt="Logo"/></a> <b style={{paddingLeft:"10%",fontSize:"30px", color:"white"}}>Welcome!</b>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="Offcanvas">
                      <Nav className="itemNav sticky-top" variant="underline">
                        <Nav.Link href="/Rianne_Studio/About" className={`hovering2 ${location.pathname === '/About' ? 'highlight2' : ''}`} style={{fontSize:"20px",color:"white"}}>About</Nav.Link>
                        <Nav.Link href="/Rianne_Studio/Portfolio" className={`hovering2 ${location.pathname === '/Portfolio' ? 'highlight2' : ''}`} style={{fontSize:"20px",color:"white"}}>Portfolio</Nav.Link>
                        <Nav.Link href="https://wa.me/6585355703" target="_blank"  style={{fontSize:"14px",color:"white",textAlign:"left",fontFamily:"Ralewaylight"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                            </svg>
                        </Nav.Link>
                        {/* <Nav.Link href='' className='hovering3' style={{fontSize:"14px",color:"black",textAlign:"left",fontFamily:"Ralewaylight"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                          </svg>Insert IGN
                        </Nav.Link> */}
                        <Nav.Link href="https://t.me/KazuKitsune" target="_blank" style={{fontSize:"14px",color:"white",textAlign:"left",fontFamily:"Ralewaylight"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-telegram" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                            </svg> 
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/rianne-ong/" target="_blank" style={{fontSize:"14px",color:"white",textAlign:"left",fontFamily:"Ralewaylight",borderRadius:"50%"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16" style={{borderRadius:"50%"}}>
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </Nav.Link>



                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            </div>  
          )
        }
        return (
          <Menu />
        )
      }
    }