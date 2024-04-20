import { extendTheme } from '@chakra-ui/react'
import { tabsTheme } from './ButtonChakra'

// * Include custom option in here, like colors, fonts...
/*
const colors = {
  white: '#fff',
  orange: '#F37A02',
  magenta: '#EB4561',
  yellow: {
    50: '#FFEB40',
    500: '#FFB504'
  },
  blue: {
    50: '#56C2BD',
    100: '#03AAE1',
    900: '#001F55'
  },
  green: {
    50: '#38DF58',
    500: '#FFB504'
  }
}

const fonts = {
  body: 'Radio Canada, sans-serif',
  html: 'Roboto, sans-serif'
}

export default theme = extendTheme({ colors, fonts })
*/

export const theme = extendTheme({
  components: {
    Tabs: tabsTheme,
  },
  colors: {
    white: {
      100: '#fff',
      500: '#FAFAFA'
    },
    magenta: '#EB4561',
    yellow: {
      50: '#FFEB40',
      500: '#FFB504'
    },
    orange: {
      100: '#FFF4E9',
      900: '#F37A02'
    },
    blue: {
      50: '#56C2BD',
      100: '#03AAE1',
      200: '#43E8ED',
      500: '#014181',
      900: '#001F55'
    },
    green: {
      50: '#38DF58',
      500: '#5DDF2D'
    }
  },
  fonts: {
    body: 'Radio Canada, sans-serif',
    heading: 'Roboto, sans-serif'
  },
  styles: {
    global: {
      body: {
        color: 'blue.900',
        background: 'white.500',
      },
      button: {
        w: '300px',
        h: '40px',
        color: 'white.500',
        boxShadow: '0 0px 4px 1px rgb(0 0 0 / 0.50%)',
        background: 'linear-gradient(98deg, #38DF58 32.07%, #C7CF21 74.25%)',
        _hover: { bg: 'green.50' }
      }
    }
  }
})
