import React from 'react'

const Cards = (props) => {
    return <div className='cardLayout ' style={{
    
        display:'inlineBlock',
        margin:' 30px auto 20px auto',
        boxShadow:'0 5px 10px 2px rgba(0,0,0,0.25) ',
        padding:'20px',
        borderRadius:'5px',
        textAlign:'center',
        backgroundColor:'white'
       
        
  
    }}>
  
  {props.children}
    </div>;
}

export default Cards