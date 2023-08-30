import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    colors: {
      'yellow-dark': string,
      'yellow': string,
      'yellow-light': string,
      'purple-dark': string,
      'purple': string,
      'purple-light': string,
      'base-title': string,
      'base-subtitle': string,
      'base-text': string,
      'base-label': string,
      'base-hover': string,
      'base-button': string,
      'base-input': string,
      'base-card': string,
      'background': string,
      'white': string,
    },
    fonts: {
      title: string,
      text: string,
    }
  }
}
