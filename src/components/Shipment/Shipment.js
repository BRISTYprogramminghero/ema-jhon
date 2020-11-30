import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css' 
import { userContext } from '../../App'

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const onSubmit = data => {
        console.log('form submited', data);

    };
  
    console.log(watch("example")); 
  
    return (
   
      <form className="ship-from " onSubmit={handleSubmit(onSubmit)}>
     
        {/* <input name="example" defaultValue="test" ref={register} /> */}
        
        
        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder = "Your name" />
        {errors.name && <span className="error">Name is required</span>}

        <input name="email"  ref={register({ required: true })} placeholder = "Your Email" />
        {errors.email && <span className="error">Email is required</span>}

        <input name="address" ref={register({ required: true })} placeholder = "Your address" />
        {errors.address && <span className="error">Address is required</span>}
        
        <input name="phone" ref={register({ required: true })} placeholder = "Your phone" />
        {errors.phone && <span className="error">Phone is required</span>}
        
        <input type="submit" />
      </form>
    );
}

export default Shipment;