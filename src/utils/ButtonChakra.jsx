import { tabsAnatomy, accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    fontSize: { base: 'sm', md: 'md' },
    fontWeight: 'bold',
    rounded: 'md',
    bg: 'white.500',
    color: 'orange.900',
    _hover: { bg: 'orange.100' },
    _selected: {
      bg: 'orange.900',
      color: 'white.500'
    }
  }
})

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle })
