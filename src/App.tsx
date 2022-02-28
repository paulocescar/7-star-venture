import React from 'react';
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'

import "@fontsource/inter"

import Routes from './routes';

const App = () => {
  
const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px) translateX(-10px)',
}

const customTheme = extendTheme({
  semanticTokens: {
    fonts: {
      body: 'inter',  
    },
    colors:{
      primary: '#0065FF',
      secondary: '#1D2C4B',
      success: '#36B37E'
    }
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
            },
          },
        },
      },
    },
  }
})

  return (
    <div className="App">
      <ChakraProvider theme={customTheme} >
        <Routes/>
      </ChakraProvider >
    </div>
  );
}

export default App;
