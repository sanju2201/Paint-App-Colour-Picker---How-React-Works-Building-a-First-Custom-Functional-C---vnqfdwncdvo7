import React, { useState } from 'react';
import '../styles/Child.css'

const Selection = ({ applyColor }) => {
    const [bg, setBg] = useState({ background: '' });
    return (
        <div className="fix-box" style={bg} onClick={() => applyColor(setBg)}>
            <h2 className="subheading">Selection</h2>
        </div>
    );
};

export default Selection;

// onClick = { props.applyColor() } style = {{ background: '' }}