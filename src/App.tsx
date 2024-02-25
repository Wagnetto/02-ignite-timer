// import { ThemeProvider } from 'styled-components'
// import { defaultTheme } from './styles/themes/default'
// import { GlobalStyle } from './styles/global'
// import { Router } from './Router'
// import { BrowserRouter } from 'react-router-dom'

import { FakeHome } from './FakeHome'

export function App() {
  return (
    <FakeHome />
    // <ThemeProvider theme={defaultTheme}>
    //   <GlobalStyle />
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    // </ThemeProvider>
  )
}
