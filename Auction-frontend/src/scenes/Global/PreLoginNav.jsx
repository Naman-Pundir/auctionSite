import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PreLoginNav = () => {
  return (
    <MainHeader>
        <div className="top">
            <div className="logo">
                <img src='./images/logo.png' alt='hello'/>
            </div>
            <div className="bar">
                <ul className='navbar-list'>
                    <li>
                        <NavLink to="/" className="navbar-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sellerLogin" className="navbar-link">Seller Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/buyerLogin" className="navbar-link">Buyer Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </MainHeader>
  )
}

const MainHeader = styled.header`

    .top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .logo{
        display: flex;
        align-items: center;
    }

    .bar{
        display: flex;
        align-items: center;
    }

    img{
        margin-top: 1rem;
        height: 5rem;
        width: auto;
    }

    .navbar-list{
        margin: 0;
        margin-right: 2.5rem;
        padding: 0;
        display: flex;
        gap: 4.8rem;
        align-items: center;

        li{
            margin-top: 30px;
            list-style: none;
        }

        .navbar-link{

            &: link,
            &: visited {
                display: inline-block;
                text-decoration: none;
                font-size: 1.5rem;
                font-weight: 400;
                text-transform: uppercase;                
                color: black;
                transition: color 0.3s linear;
            }

            &: hover,
            &:active {
                color: blue;
            }
        }

    }
`

export default PreLoginNav
