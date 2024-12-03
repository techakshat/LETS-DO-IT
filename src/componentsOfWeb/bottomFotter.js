import React from 'react'

export default function bottomFotter() {
  let FooterStyle = {
    position: "absolute",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light my-3 py-3" style={FooterStyle}>
      <p className="text-center">
      Copyright &copy; Akshat Dongre
      </p>
      
    </footer>
  )
}
