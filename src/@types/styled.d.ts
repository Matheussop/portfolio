import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      backgroundElevated: string,
      surface: string,
      surfaceAlt: string,
      primary: string,
      primaryStrong: string,
      primaryMuted: string,
      gray: string,
      text: string,
      textMuted: string,
      white: string,
      border: string,
      borderStrong: string,
      shadow: string,
    }
  }
}
