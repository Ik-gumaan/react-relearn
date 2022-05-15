import React from 'react'

const Footer = (props) => {

var footerTextStyle={
  width:"100%",
  color:"white",
  padding:"20px",
}


  return (
    <footer className="bg-dark" style={footerTextStyle}>
<p>
  Copyright &copy; ToDoList@Nain.com
</p>
    </footer>
  )
}

export default Footer
