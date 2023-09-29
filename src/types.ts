import {WaveSurferOptions} from "wavesurfer.js";
import {ComponentType, CSSProperties} from 'react';

export type MyWaveSurferOptions = Omit<WaveSurferOptions, 'container'>;
export interface PlayerProps {
  waveOptions: MyWaveSurferOptions;
  src?: string;
  playPauseButton?: ComponentType<{ playing: boolean; onClick: () => void }>;
  loader?: () => React.JSX.Element;
  containerStyles?: CSSProperties;
}
