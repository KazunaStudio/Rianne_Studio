import React, { useState, useEffect } from 'react';
import '../Functions/Functions.css';

const BarGraph = () => {
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const element = document.querySelector('.bar-graph-wrapper');
        const rect = element.getBoundingClientRect();
        if (!animationStarted && rect.top < window.innerHeight && rect.bottom >= 0) {
            setAnimationStarted(true);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [animationStarted]);

    const data = [
        { label: 'Figma', value: 65 }, 
        { label: 'Write Scripts', value: 40 }, 
        { label: 'React JS', value: 70 }, 
        { label: 'Reading', value: 90 }, 
        { label: 'Bubble Tea', value: 85 }, 
    ];

    const generateHorizontalLines = () => {
        const lines = [];
        for (let i = 1; i <= 3; i++) {
            lines.push(<div key={i} className={`horizontal-line line-${i}`} />);
        }
        return lines;
    };

    return (
        <div className={`bar-graph-wrapper ${animationStarted ? 'animate' : ''}`}>
            {/* Y-axis labels */}
            <div className="y-axis-labels">
                <div className="y-label">"Checkmate"</div>
                <div className="y-label">"Let's Do This!"</div>
                <div className="y-label">"Good Enough."</div>
                <div className="y-label">Newbie</div>
            </div>

            <div className="bar-graph-container">
                <div className="background-lines">
                    {generateHorizontalLines()}
                </div>

                {/* Bar Graph */}
                <div className="bar-graph">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bar"
                            style={{ height: `${item.value}%`, backgroundColor: item.color, position: 'relative' }}
                        >
                            {/* Position the value on top of the label */}
                            <span className="value" style={{ position: 'absolute', marginBottom:'15%', left: '50%', transform: 'translateX(-50%)', color:"white", fontSize:"40px" }}>{item.value}%</span>
                            <span className="label">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BarGraph;