import { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import {MyWaveSurferOptions} from "../types";

export const useWaveSurfer = (waveOptions: MyWaveSurferOptions, src?: string) => {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const containerRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState<string | null>(null);


  useEffect(() => {
    if (containerRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        ...waveOptions,
        hideScrollbar: true,
        container: containerRef.current,
      });

      wavesurferRef.current.on('ready', handlePlayerReady);
      wavesurferRef.current.on('play', handlePlay);
      wavesurferRef.current.on('pause', handlePause);
    }

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    }
  }, []);

  const handlePlayerReady = () => {
    setReady(true);
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const playPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  useEffect(() => {
    if (wavesurferRef.current) {
      if (audioLoaded !== src && src) {
        wavesurferRef.current.load(src);
        setAudioLoaded(src);
      }
    }
  }, [src, audioLoaded]);

  return {
    containerRef,
    playPause,
    playing,
    ready
  }
}

export default useWaveSurfer;
