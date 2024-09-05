import React,{Component} from 'react';
import '../General.css';
import GalleryWork from '../../Functions/Gallerywork.js';


export class Portfolio extends Component{
    render(){
        return(
            <div style={{paddingBottom:"5%", paddingTop:"5%"}}>
              <h4>Collection of my works</h4>
              <GalleryWork/>
            </div>
        )
    }
}