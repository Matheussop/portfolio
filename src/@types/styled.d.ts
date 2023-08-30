import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    colors: {
      'background': string,
      'primary': string,
      'gray': string ,
      'white': string,
    }
  }
}
