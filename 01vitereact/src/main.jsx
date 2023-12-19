import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const name="gokul";
const reactelement=React.createElement(
 'a',
 {href:'https://google.com',target:'_blank'},
 'click me ',
name
)

// ReactDOM.createRoot(document.getElementById('root')).render(
    
 
//     reactelement
 
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    
 
    reactelement 
 
)
