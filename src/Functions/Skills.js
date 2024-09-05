import React, { useState, useEffect } from 'react';
import designer from '../Images/designing.png';
import coder from '../Images/Coding.png';
import '../Functions/Functions.css';

const SkillsTable = () => {
    const [animationStarted, setAnimationStarted] = useState(false);

    // Listen for scroll events
    useEffect(() => {
        const handleScroll = () => {
            if (!animationStarted && window.scrollY > 10) {
                setAnimationStarted(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animationStarted]);

    return (
        <div className={`table-container ${animationStarted ? 'zoom-out' : ''}`}>
            <h4 style={{marginBottom:'2%', fontFamily:"Caveat",fontWeight:"bolder",fontSize:"35px"}}>Design Magician: Weaving Code and Creativity!</h4>
            <br/>
            <table style={{ margin: "0 auto", width: "50%" }}>
                <tr>
                    <td>
                        <div className='Designer_border'>
                            <h4 className='Designer'>Part Designer</h4>
                            <p style={{ fontFamily: "Raleway" }}>Figma<br />Canva<br />UI Design <br /> UX Design<br />Web/App Design</p>
                        </div>
                    </td>
                    <td style={{ width: "5%" }}></td>
                    <td className='Coder_border'>
                        <h4 className='Coder'>Part Coder</h4>
                        <p style={{ fontFamily: "SourceCodePro", fontSize: "20px" }}>React Js <br /> Python <br /> HTML/CSS <br />Front-End Development <br /> Snacking</p>
                    </td>
                </tr>
            </table>
            <img src={designer} className='table-image' alt="Table Image" />
            <img src={coder} className='table-image2' alt="Table Image2" />
        </div>
    );
}

export default SkillsTable;