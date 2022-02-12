import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { useAudio } from "../../hooks/useAudio";
import VolumeSlider from "../volume-slider/volume-slider";

import "./sounds-list.css"

const importAll = (req) => req.keys().map(req);
const SOUND_IMAGES = importAll(require.context('../../assets/icons/sounds', false, /\.(svg)$/));
const SOUNDS = importAll(require.context('../../assets/sounds', false, /\.(mp4|wav|mp3)$/));


const SoundsList = () => {
    return (
        <span className="sounds-list d-flex justify-content-center flex-wrap">
            {SOUND_IMAGES.map((img, i) => <SoundsListElement key={i} imgIndex={i} soundSrc={SOUNDS[i]}/>)}
        </span>
    )
};

const SoundsListElement = ({ imgIndex, soundSrc }) => {
    const [isPlaying, toggleSound, volumeLvl, handleVolumeChange] = useAudio(soundSrc);
    const {isDark} = useTheme();
    let imgClassName= "sound-img" + (isDark ? " img-dark" : " img-light") + (isPlaying ? " playing" : "");
    
    return (
        <div className="sounds-list-element">
            <div className="btn-wrapper">
                <button 
                    className="btn shadow-none"
                    onClick={toggleSound}
                    key = {imgIndex}>
                    <img className={imgClassName} src = {SOUND_IMAGES[imgIndex]} />
                </button> 

                <VolumeSlider
                    isPlaying={isPlaying} 
                    volumeLvl={volumeLvl}
                    handleVolumeChange={handleVolumeChange}/>
            </div>
        </div>
    );
};

export default SoundsList;