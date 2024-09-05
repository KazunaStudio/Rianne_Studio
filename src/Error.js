import React,{Component,useState} from 'react';
import 'react-slideshow-image/dist/styles.css';
import fox_smile from "./Images/LittleFox_smiling.png"
import './App.css';
import { Helmet } from 'react-helmet';

export class Errorpage extends Component{
    render(){
        return(
            <div style={{marginBottom:"5.8%"}}>
                <Helmet>
                    <title>Error 404 | Rianne's Studio</title>
                </Helmet>
                <table className='tablestyle'>
                    <td className='columnimage'>
                        <tr>
                            <img src={fox_smile} className='image1'></img>
                        </tr>
                    </td>
                    <td className='columnstyle'>
                        <tr>
                            <h1>Oops Your're not suppose to be here!
                            </h1>
                            <h2>The page your visiting  may be unavailable.</h2>
                            <br/>
                            <h3>Let me guide you back</h3>
                            <a href="/" class="button-link">
                                <button>Click here to return back to my studio</button>
                            </a>
                        </tr>
                    </td>
                </table>
            </div>
        )
    }
}