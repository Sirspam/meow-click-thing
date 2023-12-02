"use client"

import useSound from "use-sound";

interface Props {
    imgPath: string;
    imgAlt: string;
    mp3Path: string;
}

export default function NyaSoundImage(props: Props) {
    const [play] = useSound(props.mp3Path, { volume: 0.1 });

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="max-w-full max-h-full sm:max-w-[500px] flex aspect-auto" src={props.imgPath} alt={props.imgAlt} onClick={() => play()}/>
    )
}