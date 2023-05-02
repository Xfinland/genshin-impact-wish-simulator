import React from 'react';
// import fourStarClip from '../assets/images/ui/4starwish.mp4'
// import fourStarClipSingle from '../assets/images/ui/4starwish-single.mp4'
// import threeStarClipSingle from '../assets/images/ui/3starwish-single.mp4'
// import fiveStarClip from '../assets/images/ui/5starwish.mp4'
// import fiveStarClipSingle from '../assets/images/ui/5starwish-single.mp4'
import fourStarClip from './gif/4star.gif'
import threeStarClip from './gif/3star.gif'
import fiveStarClip from './gif/5star.gif'

export default function Wish(props) {
  const { setView, is4StarItem, is5StarItem, isSingleItem } = props
  const [showImage , setShowImage] = React.useState(true)
  
  // React.useEffect(() => {

  //   setTimeout(() => {
  //     setView('wish-results')
  //   }, 5000);
  // },[props])

  const onload = () => {
    setTimeout(() => {
      setView('wish-results')
    }, 6000);
  }

  const src = is4StarItem ?  fourStarClip : is5StarItem ? fiveStarClip : threeStarClip
  return (
    <>
    <button
    onClick={() => setView('wish-results')}
    className="skip-button">跳过</button>
      <img className="min-vh-100 w-100 overflow-hidden" src={src} onLoad={onload}/>
    {/* <video
    className="min-vh-100 w-100 overflow-hidden"
    onEnded={() => setView('wish-results')}
    playsInline
    autoPlay
    muted
    >
      <source
        src={
          isSingleItem
          ? (
            is5StarItem ? fiveStarClipSingle : (is4StarItem ? fourStarClipSingle : threeStarClipSingle)
          )
          : (
            is5StarItem ? fiveStarClip : fourStarClip
          )
        }
        type="video/mp4"/>
    </video> */}
    </>
  )
}
