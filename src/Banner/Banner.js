import React from 'react'
import {Row,Col} from 'reactstrap';
import './Banner.css'
const Banner = ({toggle}) => {
    return (
      
        <Row style={{marginTop:'200px'}}>
          <Col>
            <h1 className='banner_title'>
              Empowering Multi-Chain NFT Marketplace To Make Crypto-Collectibles
              Accessible
            </h1>
            <p  className={`banner_paragraph ${toggle && "banner_p"}`}>Create, sell or collect digital items secured with blockchain</p>

            <button className='banner_btn'>Create</button>
            <button className='banner_btn_exp'>Explore</button>

          </Col>
          <Col>
          <div className='move_banner' >
          <img  src="https://images.unsplash.com/photo-1601356631371-7b248bfdab63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt=""/>
          </div>
          </Col>
        </Row>
      
    );
    
    
}

export default Banner
