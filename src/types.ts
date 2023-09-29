import {WaveSurferOptions} from "wavesurfer.js";
import { ComponentType, CSSProperties, ReactNode } from 'react';

export type MyWaveSurferOptions = Omit<WaveSurferOptions, 'container'>;
export interface PlayerProps {
  src?: string;
  playPauseButton?: ComponentType<{ playing: boolean; onClick: () => void }>;
  loader?: () => ReactNode;
  waveOptions?: MyWaveSurferOptions;
  containerStyles?: CSSProperties;
}
