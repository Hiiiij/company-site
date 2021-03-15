/* eslint-disable */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/react'
import { cx, } from '@emotion/css'
import { ContainerWithLayoutPadding } from './StyledComponents';

const InternalComponentStyles = styled.div`
    display: flex
`;

const ImgWrapper = styled.section`
  flex: 0 0 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: white;
  min-height: 300px;
  border: ${props => props.noBorder ? 'none' :  '12px solid #f1f1f1'};
`;

const TemplateImg = styled.img`
  height: ${props => props.noBorder ? 'auto' :  '110px'};
`

const ImgContainer = styled.div`
  padding-left: 3rem;
`;
const TextWrapper = styled.section`
    
`;

export function TemplateCard({
    noBorder,
    renderLeftSideExtras,
    renderRightSideExtras,
    renderHeader,
    description,
    img,
    styles,
    imgWrapperStyles
}) {
    return (
      <InternalComponentStyles>
        <TextWrapper>
        {renderHeader && renderHeader()}
        <p>{description}</p>
        {renderLeftSideExtras && renderLeftSideExtras()}
      </TextWrapper>
        <ImgContainer>
          <ImgWrapper noBorder={noBorder} style={{ ...imgWrapperStyles }}>
            <TemplateImg noBorder={noBorder} src={img} />
            {renderRightSideExtras && renderRightSideExtras()}
          </ImgWrapper>
        </ImgContainer>
      </InternalComponentStyles>
    );
}
