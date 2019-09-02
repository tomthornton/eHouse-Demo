import React from 'react'
import styled from 'styled-components'

export default function MobileMenu() {

    const MobileMenuContainer = styled.div`
        display: none;
        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
            display: block;
        }
    `

    return (
        <MobileMenu>
            mobile menu
        </MobileMenu>
    )
}
