import React, { useState } from "react";
import Popper from "../popper/popper";
import SoundsList from "../sounds-list/sounds-list";
import { useTheme } from "../../hooks/useTheme";

import "./home.css";

const Home = () => {
    const [referenceElement, setReferenceElement] = useState(null);
    const {bodytheme} = useTheme();
    return(
        <div className="home-page" style={{ backgroundColor: bodytheme.backgroundColor, color: bodytheme.color }}>
            <div className="popper">
                <Popper referenceElement={referenceElement}/>
            </div>
            
            <div className="sound-list-wrapper" ref={setReferenceElement}> 
                <SoundsList/>
            </div>
        </div>
    );
}

export default Home;