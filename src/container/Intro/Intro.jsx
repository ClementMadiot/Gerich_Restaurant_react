import React, { useState, useRef } from 'react'
import { BsPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'

import './Intro.css'

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo = () => {
    // if the playVideo is true we're going to toggle it off and if it's false e're going to toggle it on
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    // rule to pause or play video on click
    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()

    }
  }
  return (
    <section className="app_video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app_video-overlay flex_center">
        <div
          className="app_video-overlay_circle flex_center"
          onClick={handleVideo}
        >
          {/*On the click if playVideo is true (because is running) you can display pause btn else display play fill btn */}
          {playVideo ? (
            <BsPauseFill color="var(--color-golden)" fontSize={30} />
          ) : (
            <BsPlayFill color="var(--color-golden)" fontSize={30} />
          )}
        </div>
      </div>
    </section>
  )
}
export default Intro
