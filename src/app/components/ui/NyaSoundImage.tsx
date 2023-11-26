"use client"

import Image from 'next/image'
import useSound from "use-sound";

interface Props {
    imgPath: string;
    imgAlt: string;
    mp3Path: string;
}

export default function NyaSoundImage(props: Props) {
    const [play] = useSound(props.mp3Path, { volume: 0.1 });

    return (
        <Image src={props.imgPath} alt={props.imgAlt} width={500} height={500} onClick={() => play()} priority={true}></Image>
    )
}