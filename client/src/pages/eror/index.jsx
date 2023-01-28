import React from 'react'
import "./index.scss"
import {Helmet} from "react-helmet";

const Eror = () => {
  return (
    <div className='eror'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Eror Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <img src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?w=2000" alt="" />
    </div>
  )
}

export default Eror