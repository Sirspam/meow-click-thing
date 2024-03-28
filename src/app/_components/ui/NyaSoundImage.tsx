"use client"

import { useState, useEffect } from "react"
import useSound from "use-sound"

interface Props {
  imgPath: string
  imgAlt: string
  mp3Path: string
}

export default function NyaSoundImage(props: Props) {
  const defaultImgClass =
    "max-w-full max-h-full sm:max-w-[500px] flex aspect-auto"
  const [imgClassState, setImgClassState] = useState(defaultImgClass)

  const [play] = useSound(props.mp3Path, { volume: 0.5 })

  useEffect(() => {
    const handleMouseUp = () => {
      if (imgClassState !== defaultImgClass) {
        setImgClassState(defaultImgClass)
      }
    }
    window.addEventListener("mouseup", handleMouseUp)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [defaultImgClass, imgClassState])

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={imgClassState}
      src={props.imgPath}
      alt={props.imgAlt}
      onClick={() => play()}
      onMouseDown={() => setImgClassState(defaultImgClass + " scale-95")}
    />
  )
}
