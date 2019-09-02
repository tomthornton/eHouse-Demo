import React from 'react'
import CartIcon from '../../assets/images/icon-cart.svg'

export default function NavCart({cartCount}) {
    return (
        <div className='nav-cart'>
            <img src={CartIcon}/>
            <div className='nav-cart-badge'>
                {cartCount}
            </div>
        </div>)
}
