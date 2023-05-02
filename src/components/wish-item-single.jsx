import React from 'react'
import { Col, Row } from 'reactstrap';
import ReactStars from "react-rating-stars-component";
// const characterImages = require.context('../assets/images/characters');
// const weaponImages = require.context('../assets/images/weapons');
// const characterIcons = require.context('../assets/images/details/character-icons');
// import star3 from '../assets/images/characters/徽章.png'
// import star4 from '../assets/images/characters/金属胸针.png'
// import star5 from '../assets/images/characters/伞.png'


import star3 from './gif/徽章.png'
import star4 from './gif/金属胸针.png'
import star5 from './gif/伞.png'

export default function WishItemSingle(props) {
  const { isNewItem } = props
  const { name, rating, type,element} = props.item
  const isCharacter = type === 'character'
  // const backgroundImage = `url('${isCharacter ? characterImages('./' + src).default : weaponImages('./' + src).default}')`
  // return <div ><img src={star3} /> </div>
  debugger
  const src = rating === 4 ?  star4 : rating === 5 ? star5 : star3
  return (
      <Col
      xs="12"
      className="h-100 p-4"
      >
        <Row
        className="wish-item-single-container h-100 p-2"
        >
        {
          isNewItem && <span className="new-badge">New</span>
        }
          <Col
            className="h-100 d-flex flex-column justify-content-center align-items-center wish-item-single-content"
            // style={{
            //   background: isCharacter && `url('${characterIcons(`./${element}.png`).default}') left / 20% no-repeat`
            // }}
            // sm="12"
            // md="3"
            > 

            <img  width={200} height={200}  sm="12"
            // md="3" className="h-100 d-flex flex-column justify-content-center align-items-center wish-item-single-content"
             src={src} /> 
            <div
              className="text-center text-wrap pb-1">{name}</div>
            <ReactStars
              count={rating}
              size={24}
              edit={false}
              color="#ffd700"
              classNames={"justify-content-center"}
            />
          </Col>
          <Col
            className="wish-item-single h-100 w-100"
            // style={{
            //   backgroundImage,
            //   backgroundSize: isCharacter ? 'contain' : 'inherit'
            // }}
            sm="12"
            md="9"
            >

            <img     className="wish-item-single h-100 w-100"   sm="12"
            md="9" src={src} /> 
          </Col>
        </Row>
      </Col>
  )
}
