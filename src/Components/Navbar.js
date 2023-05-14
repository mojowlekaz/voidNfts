import React from 'react'

export default function Navbar() {

  const style2 = {
    width: '100%', marginTop: "50px",
    // Adding media query..
    '@media (min-width: 0px)': {
      display: "none"
    },
  };


  const style = {
    width: '20%', 
    marginTop: "50px",
    


    '@media (min-width: 350px)': {
      width: '50%', 
    },
  };
  
  
  return (
    <div className='Navbar'>
      <img className='desk' style={ style} src={ require("/Users/macbook/reactvoid/src/assets/logovoidfeathers.png")} />


<div className='mobilee'>
<img  style={ style2} src={ require("/Users/macbook/reactvoid/src/assets/logovoidfeathers.png")} />
</div>

<div   className="info">
<h1>VoidFeathers Live Mint</h1>
      <a href='https://orionflower.com/voidfeathers/whitepaper/' target=" _blank">Whitepaper</a>
</div>
<h1 className='o'>VoidFeathers Live Mint</h1>
      <a href='https://orionflower.com/voidfeathers/whitepaper/' target=" _blank" className='o'>Whitepaper</a>
    </div>
  )
}
