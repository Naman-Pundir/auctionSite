import React from 'react'
import PostLoginNav from '../Global/PostLoginNav'
import globalvariable from '../../GlobalVariables'
import Sellerbidlist from '../../components/Sellerbidlist'
import { Button } from '../../components/Button'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Sdashboard = () => {
  return (
    <Wrapper>
        <PostLoginNav/>
        <Sellerbidlist/>
        <div className="button">
            <NavLink to="/addItem"><Button>Add Item</Button></NavLink>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .button{
        margin-top: 2.5rem;
        margin-left: 17rem
    }
`

export default Sdashboard
