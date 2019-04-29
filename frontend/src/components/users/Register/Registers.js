import React from 'react';

import './Register.css';



const register = (props) =>{



    return(
        <div>
              <div className='left'>
              <a href='*'/></div>
        <div className='mainContainer'>
      
        <div className='animation'>
        {/*animation*/}
        </div>

<div className='middle-container'>
        
        <img src={props.profilePic} />
            <input id='profilePic' type='file' accept="image/x-png,image/gif,image/jpeg" onChange={props.changed} />
                 <form className='formContainer'>
                <input id='username' placeholder='USERNAME' name ='username' type='text' onChange={props.changed}/>
                <input id='email' placeholder ='EMAIL' name= 'email' type='text' onChange={props.changed}/>
                <input id='password' placeholder='PASSWORD' name ='password'type='password' onChange={props.changed}/>
                <input id ='confirmPassword' placeholder='CONGFIRM PASSWORD' name='confirmPassword' type='password' onChange={props.changed}/>
                <button onClick={props.submit}>REGISTER</button>
             </form>
             <button id='btn-log'  href='*'>Log In</button>
        </div>
        </div>
        </div>
    );
};

export default register;