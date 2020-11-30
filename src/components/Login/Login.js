import React, { useContext, useState }  from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailnAndPassword } from './LoginManager';


function Login() {
  const [newUser, setNewUser] = useState (false);
  const [user,setUser] = useState ({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photoUrl : ''
  })

  initializeLoginFramework()

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/shipment" } }; 
 
  const googleSignIn = () => {
    handleGoogleSignIn()
    .then (res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
    })
  }

const signOut = () => {
  handleSignOut()
  .then (res => {
    setUser(res);
    setLoggedInUser(res);
  })
}



  const handleBlur =(event) => {
    let isFieldValid = true ;

    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
      
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid =  isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = {...user}
      newUserInfo [event.target.name] = event.target.value;
      setUser (newUserInfo);
    }
  }



  const handleSubmit = (event) => {
   if (newUser && user.email && user.password){
    createUserWithEmailAndPassword (user.email, user.password, user.name)
    .then (res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
   }
   
   if(!newUser && user.email && user.password) {
   signInWithEmailnAndPassword(user.email, user.password)
   .then (res => {
    setUser(res);
    setLoggedInUser(res);
    history.replace(from);
   })
   }

   event.preventDefault();
  }




   
  return (
    <div style={{textAlign: 'center' }}>
     {
       user.isSignedIn ? <button onClick={signOut}>Sing out</button> :
       <button onClick = {googleSignIn}>Sing in</button>
     }
     <br/>
     <button>Facebook login</button> 
    {
      user.isSignedIn && <div>
        <p> Welcome{user.name}</p>
        <p>Your email , {user.email}</p>
        </div>
    }



    <h1>Our own authentication</h1>
    <input type="checkbox" onChange={() => setNewUser (!newUser )} name="newUser" id=""/>
    <label htmlFor="newuser">New user sign up</label> 
     
    <form onSubmit={handleSubmit}>
    
     {newUser && <input name="name" type="text" onBlur = {handleBlur} placeholder="Your name"/>}
      <br/>
     <input type="text" name="email" onBlur={handleBlur} placeholder="Your email address" required/>
     <br/>
     <input type="password" name ="password" onBlur={handleBlur} id="" placeholder="Your Password " required></input>
     <br/>
     <input type="submit" value={newUser ? 'sign up' : 'sign in'}/>
    </form>
    <p style={{color: 'red'}}>{user.error}</p>
    {user.success &&   <p style={{color: 'green'}}> User created successfully {user.error}</p>}
    </div>
  );
}

export default Login;
