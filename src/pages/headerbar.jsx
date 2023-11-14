import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const iconStyle = {
    color: '#1ED760',
    fontSize: '30px',
};

const squareiconStyle = {
    fontSize: '30px',
    margin: '0px 10px 0px 10px',
};

const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '60px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
};

const headertextStyle = {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '24px',
}

function Headerbar() {
    const navigate = useNavigate(); // useNavigate 추가
  
    const goToMain = () => {
      navigate('/'); // '/' 경로로 이동
    };
  
    return (
      <>
         <div style={headerStyle} onClick={goToMain}>
         <MenuIcon style={{ ...iconStyle, paddingLeft: '20px' }} />
         <div style={headertextStyle}>AsuMusic</div>
         <AccountCircleIcon style={{ ...iconStyle, paddingRight: '20px' }} />
     </div>
        
      </>
    );
  }
  
  export default Headerbar;