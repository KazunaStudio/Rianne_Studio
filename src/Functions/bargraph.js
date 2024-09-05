import React, { useState, useEffect } from 'react';
import '../Functions/Functions.css';

const BarGraph = () => {
    const [animationStarted, setAnimationStarted] = useState(false);

    // Listen for scroll events
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

    // Sample data (values are percentages)
    const data = [
        { label: 'Figma', value: 65}, // 50% height
        { label: 'Digital Art', value: 45 }, // 25% height
        { label: 'Programming', value: 75}, // 30% height
        { label: 'Photography', value: 85}, // 20% height
        { label: 'Bubble Tea', value: 70 }, // 20% height
    ];

    // Function to generate horizontal lines
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

            {/* Bar graph container */}
            <div className="bar-graph-container">
                {/* Background with grid lines */}
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