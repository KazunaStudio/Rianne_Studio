import React, { Component } from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                            <td><Link to="/About" className='flexfooter1'>About</Link>
                            </td>
                            <td><Link to="/Portfolio" className='flexfooter1'>Portfolio</Link>
                            </td>
                            <td><Link to="/Contact" className='flexfooter1'>Contact</Link>
                            </td>
                        </tr>
                        </thead>
                    </table>
                </footer>
            </div>
        );
    }
}