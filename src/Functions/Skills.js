import React, { useState, useEffect } from 'react';
import designer from '../Images/designing.png';
import coder from '../Images/Coding.png';
import '../Functions/Functions.css';

const SkillsTable = () => {
    const [animationStarted, setAnimationStarted] = useState(false);

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
            <h4 className='header'>Design Magician: Weaving Code and Creativity!</h4>
            <br/>
            <table className='table_adjust'>
                <tr>
                    <td>
                        <div className='Designer_border'>
                            <h4 className='Designer'>Part Designer</h4>
                            <hr className='underline'/>
                            <p className='Dskill_names'>Figma<br />Canva<br />UI Design <br /> UX Design<br />Web/App Design</p>
                        </div>
                    </td>
                    <td>
                        <div className='Coder_border'>
                            <h4 className='Coder'>Part Coder</h4>
                            <hr className='underline'/>
                            <p className='Cskill_names'>React Js <br /> Python <br /> HTML/CSS <br />Front-End Development <br /> Snacking</p>
                        </div>
                    </td>
                </tr>
            </table>
            <img src={designer} className='table-image' alt="Table Image" />
            <img src={coder} className='table-image2' alt="Table Image2" />
        </div>
    );
}

export default SkillsTable;