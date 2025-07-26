import {
  getPalette,
  PaletteResult,
} from '@somesoap/react-native-image-palette';

export const getImagesColor = async (uri: string) => {
  let palette: PaletteResult;
  try {
    palette = await getPalette(uri);
  } catch (error) {
    throw Error('error getting palette');
  }
  return { palette };
};
