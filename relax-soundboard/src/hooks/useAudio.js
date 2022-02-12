import { useState, useEffect, useRef } from "react";

export const useAudio = (audioSrc) => {
    const [audio] = useState(new Audio(audioSrc));
    const [isPlaying, setIsPlaying] = useState(false);
    const [volumeLvl, setVolumeLvl] = useState(0.6);
    const audioRef = useRef(audio);

    const toggleSound = () => setIsPlaying(!isPlaying);

    audio.loop = true;

    useEffect(() => { isPlaying ? audio.play() : audio.pause() }, [isPlaying]);

    useEffect(() => {
        audio.addEventListener("ended", () => setIsPlaying(false));
        return () => {
            audio.removeEventListener("ended", () => setIsPlaying(false));
        };
    }, []);

    useEffect(() => adjustVolume());

    const handleVolumeChange = (event) => setVolumeLvl(event.target.value);

    const adjustVolume = () => audioRef.current.volume = volumeLvl;

    return [isPlaying, toggleSound, volumeLvl, handleVolumeChange];
};



