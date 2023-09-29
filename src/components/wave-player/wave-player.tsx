import React from 'react';
import useWaveSurfer from "../../hooks/use-wavesurfer";
import {PlayerProps} from "../../types";


const WavePlayer = (props: PlayerProps) => {
  const { src, playPauseButton: PlayPauseButton, loader: Loader, waveOptions, containerStyles } = props;

  const { containerRef, playPause, playing, ready } = useWaveSurfer(waveOptions, src);

  return (
    <>
      {!ready && (Loader ? <Loader /> : <p>loading...</p>)}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          ...containerStyles,
        }}
      >
        {ready ? (
          PlayPauseButton ? (
            <PlayPauseButton playing={playing} onClick={playPause} />
          ) : (
            <button onClick={playPause}>{playing ? 'pause' : 'play'}</button>
          )
        ) : null}
        <div ref={containerRef} style={{ flex: 1 }} />
      </div>
    </>
  );
};

export default WavePlayer;
