import React from 'react';

import './Register.css';
const register = (props) =>{
    return(
        <div>
             
        <h2>Sign up below!</h2>
        <img src={props.profilePic} />
        <form className='formContainer'>
        <div className="noStyle">
        <input id='profilePic'  placeholder='Profile Picture' type='file' accept="image/*" onChange={props.changed} />
        </div>
       <input id='username' placeholder='USERNAME' name ='username' type='text' onChange={props.changed}/>
       <input id='email' placeholder ='EMAIL' name= 'email' type='text' onChange={props.changed}/>
       <input id='password' placeholder='PASSWORD' name ='password'type='password' onChange={props.changed}/>
       <input id ='confirmPassword' placeholder='CONGFIRM PASSWORD' name='confirmPassword' type='password' onChange={props.changed}/>
       <button onClick={props.submit}>REGISTER</button>
       </form>
        </div>
    );
};

export default register;