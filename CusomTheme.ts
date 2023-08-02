// customTheme.ts
import {MD3LightTheme} from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  colors: {
    primary: 'rgb(255, 182, 138)',
    onPrimary: 'rgb(82, 35, 0)',
    primaryContainer: 'rgb(116, 53, 0)',
    onPrimaryContainer: 'rgb(255, 219, 200)',
    secondary: 'rgb(255, 181, 158)',
    onSecondary: 'rgb(93, 24, 0)',
    secondaryContainer: 'rgb(124, 45, 18)',
    onSecondaryContainer: 'rgb(255, 219, 208)',
    tertiary: 'rgb(200, 206, 68)',
    onTertiary: 'rgb(49, 51, 0)',
    tertiaryContainer: 'rgb(71, 74, 0)',
    onTertiaryContainer: 'rgb(229, 234, 93)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(32, 26, 23)',
    onBackground: 'rgb(236, 224, 219)',
    surface: 'rgb(32, 26, 23)',
    onSurface: 'rgb(236, 224, 219)',
    surfaceVariant: 'rgb(82, 68, 60)',
    onSurfaceVariant: 'rgb(215, 194, 184)',
    outline: 'rgb(159, 141, 132)',
    outlineVariant: 'rgb(82, 68, 60)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(236, 224, 219)',
    inverseOnSurface: 'rgb(54, 47, 43)',
    inversePrimary: 'rgb(152, 71, 0)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(43, 34, 29)',
      level2: 'rgb(50, 39, 32)',
      level3: 'rgb(57, 43, 36)',
      level4: 'rgb(59, 45, 37)',
      level5: 'rgb(63, 48, 39)',
    },
    surfaceDisabled: 'rgba(236, 224, 219, 0.12)',
    onSurfaceDisabled: 'rgba(236, 224, 219, 0.38)',
    backdrop: 'rgba(58, 46, 39, 0.4)',
  },
};

export default theme;
