import React from 'react'
import styled from '@emotion/styled';

export const CarouselCardWrapper = styled.div`
    background: #fff;
    display: flex;
    // width: 466px;
    min-height: 250px;
    padding-top: 18px;
    padding-right: 21px;
    padding-left: 36px;
    padding-bottom: 33px;
    text-align: left;
    background-color:#fff;
    margin: 0 20px;
`
export const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    min-height: 250px
`


export const Img = styled.img`
   align-self: flex-start;
`

const Card = ({ img, title, paragraph }) => {
    return (
        <CarouselCardWrapper>
            <CardWrapper>
                <h3>{title}</h3>
                <p style={{ fontSize: '12px' }}>{paragraph}</p>
            </CardWrapper>
            <Img src={img} alt="" />

        </CarouselCardWrapper>
    )
}
export default Card