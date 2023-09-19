// Libraries
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './DoubleParallax.scss';

function DoubleParallax() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      <Parallax pages={5}>

        <ParallaxLayer offset={0} sticky={{ start: 0, end: 2 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="card sticky">
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="card parallax purple">
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="card parallax blue">
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default DoubleParallax;