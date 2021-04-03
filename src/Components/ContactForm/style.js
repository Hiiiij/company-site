import styled from '@emotion/styled';

export const ContactUsSection = styled.div`
    background: black;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;  
    padding: 2.5rem 3rem 3rem 3rem;
 
`
export const ContactUsForm = styled.form`
    display: flex;
    flex-direction:column;
    max-width: 618px;
    width:100%;
`
export const ContactUsInput = styled.input`
    width:100%;
    border:2px solid rgba(255, 255, 255, 0.5);
    border-radius:15px;
    padding: 16px 23px;
    color: white;
    background:transparent;
    margin-bottom: 15px;
    font-size: 1.2rem;
    font-weight:600;
    &::  placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
    &:focus {
        outline: 0;
        border-color: rgba(255,177,61,0.65);
        color: rgba(255,177,61,0.65);
    }
`
export const ContactUsHeader = styled.h2`
    display:flex;
    justify-content: center;
    color: white;
    font-size: 3rem;
    padding-top: 2.5rem;
    font-weight: 700;
`
export const ContactUsBtn = styled.button`
    padding: 1rem 0;
    color: black;
    font-size: 1.2rem;
    text-align: center;
    border-radius:15px;
    border:none;
    font-weight: 600;
    cursor: pointer;
`
export const TextField = styled.textarea`
 width:100%;
 border:2px solid rgba(255, 255, 255, 0.5);
 border-radius:15px;
 padding: 16px 23px;
 color: white;
 background:transparent;
 margin-bottom: 15px;
 font-size: 1.2rem;
 font-weight:600;
 &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
  &:focus {
        outline: 0;
        border-color: rgba(255,177,61,0.65);
        color: rgba(255,177,61,0.65);
    }
`
