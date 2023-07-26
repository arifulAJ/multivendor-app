import React from 'react'
import styled from 'styled-components';

const  Shiping=()=> {
  const data = localStorage.getItem('thapaCart');
  const parsedData = JSON.parse(data);

 
  return (
    <Purches>
      <h3 className='dashbord'>Welcome to your purches dashbord</h3>
      <p className='orderItem'>you orderd : <span>{parsedData.length}</span> items </p>
      <div className='allmade'>
      <ul>product name:
      {
      parsedData.map((product,index)=>(
    
        <div  key={product.id}>
        
        
          <li>
         {index+1}: {product.name}
          </li>
        
        </div>
       
      ))
      }</ul>
      
      </div>

    </Purches>
  )
}


const Purches=styled.div`
background:#F8F9FA;
padding:20px;
.dashbord {
  text-align:center;
  font-size:50px;
}
.orderItem {
  font-size:30px;
}
span {
  font-weight:bold;
}
ul {
  font-size:30px;
 
}
li {
  color:black;
  font-weight:bold;
  font-size:20px;
}
.allmade {
  width:60%;
  display:flex;
  align-item:center

}
`


export default Shiping