import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PreLoginNav from '../Global/PreLoginNav'
import axios from 'axios'
import PostLoginNav from '../Global/PostLoginNav'
import globalvariable from '../../GlobalVariables'

const Additem = () => {

    const history = useNavigate();

    const [name, setName] = useState('')
    const [info, setInfo] = useState('')
    const [price, setPrice] = useState('')
    const [time, setTime] = useState('')
    const client_email = globalvariable.currentSeller

    async function submit(e){
        e.preventDefault();
        const currDate = new Date();
        const finaltime = currDate.getTime() + (time*60*60*1000);

        try{
            console.log(client_email);
            await axios.post("http://localhost:8000/user/bid_add",{
                name,client_email,price,time: finaltime,info
            })
            .then(res=>{
                if(res.data.message === "Register Success"){
                    history("/sellerDashboard");
                }else if(res.data.message === "All fields are required"){
                    alert("All fields are required.");
                }
            })

        }catch{
            console.log("ERROR");
        }
    }

  return (
    <div>
    <PostLoginNav/>
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-image'>
                    <figure>
                        <img src='images/side-image.png' alt='Image' className='image-style'/>
                    </figure>
                </div>
                <div className='register-form'>
                    <form method='post'>
                        <h2>Add new item</h2>
                        <br/><br/>
                        <h3>Item Name</h3>
                        <br/>
                        <input type='text' onChange={(e) => {setName(e.target.value)}} placeholder='Enter Item Name'></input>
                        <br/><br/>
                        <h3>Item Info</h3>
                        <br/>
                        <input type='text' onChange={(e) => {setInfo(e.target.value)}} placeholder='Enter Item Info'></input>
                        <br/><br/>
                        <h3>Start Price</h3>
                        <br/>
                        <input type='text' onChange={(e) => {setPrice(e.target.value)}} placeholder='Enter Starting Price'></input>
                        <br/><br/>
                        <h3>Time Limit</h3>
                        <br/>
                        <input type='text' onChange={(e) => {setTime(e.target.value)}} placeholder='Retype Time Limit(in hrs)'></input>
                        <br/><br/>
                        <input type='submit' onClick={submit} value="Register"></input>
                    </form>
                </div>
            </div>
        </div>
    </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
    padding: 12rem 0;

    img {
        min-width: 30rem;
        height: 35rem;
    }

    .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  .register-form{
    margin-top: -5rem;
    background: "#f6f6f6";
    padding: 20px;

    input{
        width: 100%;
    }
  }
`;

export default Additem
