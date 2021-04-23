import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ContactUsSection,
  ContactUsForm,
  ContactUsInput,
  ContactUsHeader,
  ContactUsBtn,
  TextField,
} from './style';
import Sent from '../../Assets/recruitingPage/sent.svg';

export const contactFormUtils = () => {};
export const ContactForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    setAsSent(true);
  };
  const [isSent, setAsSent] = useState(true);

  console.log('watch', watch('example')); // watch input value by passing the name of it

  return (
    <div>
      {isSent ? (
        <ContactUsSection>
          <ContactUsHeader> Your message has been sent</ContactUsHeader>
          <img src={Sent} alt="Sent animation" />
        </ContactUsSection>
      ) : (
        <ContactUsSection>
          <ContactUsHeader>Contact Us</ContactUsHeader>
          <ContactUsForm onSubmit={handleSubmit(onSubmit)} novalidate>
            <ContactUsInput
              placeholder="name"
              name="name"
              type="text"
              ref={register({ required: true })}
            />
            <ContactUsInput
              placeholder="email"
              name="email"
              type="email"
              ref={register({ required: true })}
            />

            {/* include validation with required or other standard HTML validation rules */}

            <TextField
              placeholder="message"
              name="message"
              ref={register({ required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <ContactUsBtn type="submit">Send message</ContactUsBtn>
          </ContactUsForm>
        </ContactUsSection>
      )}
    </div>
  );
};
