import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import globalvariable from '../GlobalVariables';

const Sellerbidlist = () => {

    const [courses, setCourses] = useState([]);
    const history = useNavigate();
    const email = globalvariable.currentSeller;
    const currDate = new Date();

    const fetchData = () =>{
        return axios.post("http://localhost:8000/user/get_all_bid_seller" , {email}).then((res) => setCourses(res.data.bids));
    }

    const clicked = (x) =>{
        history("/updateBid" , {state: {id: x}});
    }    
    

    useEffect(() => {
        fetchData();
    }, []);

    console.log(courses);

  return (
    <Wrapper>
        <div className='container'>
        <h2>Your Items</h2>
            <div className='grid grid-three-column'>
                {
                    courses.map((courseObj,index) => {
                        return(
                            <div className='services-1'>
                                <h2>{courseObj.item_name}</h2>
                                <br></br>
                                <p>{courseObj.item_info}</p>
                                <br></br>
                                <p>Start Price : {courseObj.start_price} Rs.</p>
                                <br></br>
                                <p>Currend Bid : {courseObj.current_bid} Rs.</p>
                                <br></br>
                                <p>Time Left : {((courseObj.end_time - currDate.getTime())/36e5).toFixed(2)} hrs</p>
                                <br></br>
                                <p>Status: {courseObj.status}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    .grid{
        gap: 4.8rem;
    }

    .container{
        margin-top:5rem;
    }

    .services-1 {
    padding: 20px;
    width: auto;
    height: 30rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    background-color: lightgray;
    text-align: left;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-1:hover{
    background-color: lightblue;
  }
`;

export default Sellerbidlist
