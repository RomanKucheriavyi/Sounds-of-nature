import React from "react";

import "./volume-slider.css";

const VolumeSlider = ({isPlaying, volumeLvl, handleVolumeChange}) => {
    return !isPlaying ? null : <div>
        <input
            type="range"
            className="form-range"
            min={0}
            max={1}
            step={0.1}
            value={volumeLvl}
            onChange={handleVolumeChange}/>  
    </div>
};

export default VolumeSlider;