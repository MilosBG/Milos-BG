import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';

export default function BouncingLoader () {
    const [text, setText] = useState("");
    const [showImg, setShowImg] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowImg(false)
            setText(
                "Grind Until Achieve"
            )
        }, 3000);
    }, []);

  return (
    <>
      <div>
        {
            showImg ? (
                <img src={assets.BounceLoad} />
            ) : (
                <h3>{text}</h3>
            )
        }
      </div>
    </>
  )
};


