import { useParams } from 'react-router'
import Header from '../../Componets/Header/Header'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
import Modal1 from '../../Componets/Modal/Modal';

const CategoryProducts = () => {
  const [modalShow, setModalShow] = useState(false)
  const [productData, setProductData] = useState({})
  const [filterData, setfilterData] = useState([])
  const setData = (val1,val2)=>{
    setModalShow(val1)
    setProductData(val2)
  }


    const {id} = useParams()
    console.log(id.toUpperCase())
    const data = useSelector((state)=> state.ProductArray.produsts)
    const allData = data.filter((item)=> item.category == id) 
console.log(allData)

    
    return (
        <>
        <div className='container' >
        <Header />
        <br /><br /><br />
            <h1 className="FeCat">Our Products For <span className='CapId'> {id} </span> </h1>
        
            <MDBContainer fluid className="my-5 text-center">
            
        
            <MDBRow>
        {
            allData.map((item,index)=>{
              const model1 = item.model.slice(0, 5)
              return(
                <MDBCol onClick={() => setData(true, item)} md="3" lg="2" sm="6" className="mb-4 newCat">
                <MDBCard>
                  <div>
                    <MDBCardImage
                      src={item.image}
                      fluid
                      className="w-100 newCatImg"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-primary ms-2">{item.discount}% off</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                      </div>
                    </a>
                  </div>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">
                       <strong className="brand1"> {item.brand} </strong> {model1}</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>Category: <span className="cat"> {item.category}</span> </p>
                    </a>
                    <h6 className="mb-3">${item.price}</h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              
              )
            })
        
              
        }
            </MDBRow>
          </MDBContainer>
        
          <Modal1 show={modalShow}
                onHide={() => setModalShow(false)}
                items = {productData}
                        />
        </div>
          </>
          )
}

export default CategoryProducts
