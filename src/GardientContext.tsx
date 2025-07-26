import { PaletteResult } from '@somesoap/react-native-image-palette';
import React, { createContext, PropsWithChildren, useState } from 'react';

interface IInitalStateGradientContent {
  colors: PaletteResult;
  prevColors: PaletteResult;
  setMainColors: (palette: PaletteResult) => void;
  setPreviousColors: (palette: PaletteResult) => void;
}

export const GardientContext = createContext<IInitalStateGradientContent>(
  {} as IInitalStateGradientContent,
);

interface Props extends PropsWithChildren {}
export const GradientProvider = ({ children }: Props) => {
  const [colors, setColors] = useState<PaletteResult>({
    darkMuted: 'transparent',
    lightMuted: 'transparent',
    darkVibrant: 'transparent',
    lightVibrant: 'transparent',
    muted: 'transparent',
    vibrant: 'transparent',
    dominantAndroid: 'transparent',
  });
  const setMainColors = (palette: PaletteResult) => {
    setColors(palette);
  };
  const setPreviousColors = (palette: PaletteResult) => {
    setPrevColors(palette);
  };
  const [prevColors, setPrevColors] = useState<PaletteResult>({
    darkMuted: 'transparent',
    lightMuted: 'transparent',
    darkVibrant: 'transparent',
    lightVibrant: 'transparent',
    muted: 'transparent',
    vibrant: 'transparent',
    dominantAndroid: 'transparent',
  });
  return (
    <GardientContext.Provider
      value={{ colors, prevColors, setMainColors, setPreviousColors }}
    >
      {children}
    </GardientContext.Provider>
  );
};
