import React from 'react';
import { useForm } from 'react-hook-form';

export const contactFormUtils = () => {

}
const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
        <input 
            name="name" 
            ref={register({ required: true })} 
        />
        <input 
            name="email"
            type="email" 
            ref={register({ required: true })} 
        />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input name="message" ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default ContactForm;