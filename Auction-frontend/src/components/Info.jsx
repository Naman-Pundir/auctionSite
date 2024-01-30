import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';

const Info = () => {


  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>BIDDING APP</h1>
                    <p>Easy to access, client-server auction site. Register now for a fluent bidding experience.</p>
                    <NavLink to="/BuyerLogin"><Button>SignUp Now</Button></NavLink>
                    
                </div>
                <div className='hero-section-image'>
                    <figure>
                        <img src='images/side-image.png' alt='not-found' className='image-style'/>
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 30rem;
    height: 35rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
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
`;

export default Info
