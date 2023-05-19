import React, { Children } from 'react'
import '@styles/globals.css'

import Home from './page'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
           <Home></Home>
        </body>
    </html>
  )
}

export default RootLayout