import React, { useState } from 'react';
import { usePopper } from 'react-popper';

import "./popper.css";

const Popper = ({referenceElement}) => {
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "top",
        modifiers: [{ name: 'arrow', options: { element: arrowElement }},       {
            name: "offset",
            options: {
              offset: [0, 20]
            }
          }],
    });

    return (
        <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className="goroh">
            Try to mix and match the sound
            <div ref={setArrowElement} style={styles.arrow} className="arrow" />
        </div>
    );
};

export default Popper;