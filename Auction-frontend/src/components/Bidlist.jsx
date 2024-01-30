import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import globalvariable from '../GlobalVariables';

const Bidlist = () => {

    const [courses, setCourses] = useState([]);
    const [price, setPrice] = useState([]);
    const history = useNavigate();
    const email = globalvariable.currentBuyer;
    const currDate = new Date();

    const fetchData = () =>{
        return axios.post("http://localhost:8000/user/get_all_bid").then((res) => setCourses(res.data.bids));
    }

    const clicked = (x,y,z) =>{
        if(price > y && price > z){
            try{
                console.log(price);
                axios.post("http://localhost:8000/user/bid_update",{
                    bid_id : x, current_bid: price, client_email: email
                })
                .then(res=>{
                    if(res.data.message === "Unable to bid"){
                        alert("Unable to bid right now.");
                    }
                })
            }
            catch{
                console.log("Error");
            }
        }else{
            alert("New bid must be greater than current bid and start price");
        }
    }
    
    const update = (x) => {
        try{
            console.log(x);
            axios.post("http://localhost:8000/user/updateStatus",{
                bid_id: x
            })
            .then(res =>{
                if(res.data.message === "status_update"){
                    console.log("Updated")
                }
            })
        }
        catch{
            console.log("Error");
        }
    }
    

    useEffect(() => {
        fetchData();
    }, []);

    console.log(courses);

  return (
    <Wrapper>
        <div className='container'>
        <h2>Available Items</h2>
            <div className='grid grid-three-column'>
                {
                    courses.map((courseObj,index) => {
                        if((((courseObj.end_time - currDate.getTime())/36e5).toFixed(2) <= 0) && courseObj.status == "Unsold"){
                            update(courseObj._id);
                            if(courseObj.current_bid == "0"){
                                courseObj.status = "Unsold and Timeout";
                            }else{
                                courseObj.status = "Sold";
                            }  
                        }
                        var form = true;
                        if(courseObj.status != "Unsold"){
                            form = false;
                        }
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
                                <p>Time Left : {
                                    ((courseObj.end_time - currDate.getTime())/36e5).toFixed(2)
                                } hrs</p>
                                <br></br>
                                <p>Status : {courseObj.status}</p>
                                <br></br>
                                {form && <form>
                                    <p>Bid on the item</p>
                                    <br></br>
                                    <input type='text' placeholder='Enter your Price' onChange={(e) => setPrice(e.target.value)}/>
                                    <br></br>
                                    <input type='submit' onClick={() => clicked(courseObj._id,courseObj.start_price,courseObj.current_bid)} value="Bid Now"/>
                                </form>}
                                
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
    height: 45rem;
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

export default Bidlist
