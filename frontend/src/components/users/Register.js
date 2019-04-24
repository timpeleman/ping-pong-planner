import React from 'react';

import Registers from'./Register/Registers;
const register=(props) => (
    
   
    <Registers  profilePic={props.profilePic} submit={props.submit} changed={props.changed(event)}/>
);

export default register;
