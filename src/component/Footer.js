import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  // MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow, 
  MDBBtn
} from 'mdb-react-ui-kit';
import {RiInstagramFill} from 'react-icons/ri' 
import {RiTwitterFill} from 'react-icons/ri' 
import {RiGithubFill} from 'react-icons/ri' 
import {RiLinkedinBoxFill} from 'react-icons/ri' 
import {RiStackFill} from 'react-icons/ri' 

 


export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
         
          
        </section>
        <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                
              <RiStackFill/> Mausam.ui
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social links</h6>
              <p>
                <a href='https://www.instagram.com/udaysolankii03/' className='text-reset'>
                 <RiInstagramFill/> Instagram
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <RiTwitterFill/> Twitter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <RiGithubFill/> Github
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <RiLinkedinBoxFill/> Linkdin
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                 
               Inodre , 452011 , India
              </p>
              <p>
                 
                Mausam.ui.weather@.gmail.com
              </p>
              <p>
                  +91 9174595317
              </p>
              <p>
                  +91 78982 87715
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

         

        <section className='mb-3 descript'>
          <p>
           <p>Mausam.UI: Revolutionizing Weather Information Delivery
            </p>  

            In the digital age, weather forecasting has become an essential part of our daily lives. Whether we're planning a weekend getaway,deciding on our daily commute, or simply curious about the weather conditions, having accurate and up-to-date weather information at our fingertips is crucial. That's where Mausam.UI comes in – a groundbreaking web application that aims to revolutionize the way we access and interact with weather data.
          </p>
        </section>

         
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='#'>
        Mausam.UI.com
        </a>
      </div>
    </MDBFooter>
  );
}