import React from 'react'
import Slide from "react-reveal/Slide";


function Effect() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Scroll Down to See the Effect</h1>
      </header>
      <main>
        <Slide left>
          <div className="section">
            <h2>Section 1</h2>
            <p>This content slides in from the left.</p>
          </div>
        </Slide>
        <Slide right>
          <div className="section">
            <h2>Section 2</h2>
            <p>This content slides in from the right.</p>
          </div>
        </Slide>
        <Slide left>
          <div className="section">
            <h2>Section 3</h2>
            <p>This content slides in from the left.</p>
          </div>
        </Slide>
        <Slide right>
          <div className="section">
            <h2>Section 4</h2>
            <p>This content slides in from the right.</p>
          </div>
        </Slide>
      </main>
    </div>
  )
}

export default Effect