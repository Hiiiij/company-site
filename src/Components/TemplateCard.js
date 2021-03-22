/* eslint-disable */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/react'
import { cx, } from '@emotion/css'
import { ContainerWithLayoutPadding } from './StyledComponents';

const InternalComponentStyles = styled.div`
    display: flex;
    padding-top: 60px;
    width: 100%;
`;

const ImgWrapper = styled.section`
  flex: 0 0 50%;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  background: white;
  min-height: 300px;
  border: ${props => props.noBorder ? 'none' : '12px solid #f1f1f1'};
  justify-content: flex-end;
  flex-direction: column;
`;

const TemplateImg = styled.img`
  height: ${props => props.noBorder ? 'auto' : '110px'};
`

const ImgContainer = styled.div`
  padding-left: 1rem;
  width: 100%;
`;

const TextWrapper = styled.div`
  width: 100%;
`;

export function TemplateCard({
  noBorder,
  renderLeftSideExtras,
  renderRightSideExtras,
  renderHeader,
  description,
  img,
  styles,
  imgWrapperStyles,
  children
}) {
  return (
    <InternalComponentStyles>
      <TextWrapper>
        <div>
          {renderHeader && renderHeader()}
        </div>
        <div>
          <p>{description}</p>
          <div style={{ marginTop: '30px' }}>{renderLeftSideExtras && renderLeftSideExtras()}</div>
        </div>
      </TextWrapper>
      <ImgContainer>
        <ImgWrapper noBorder={noBorder} style={{ ...imgWrapperStyles }}>
          <TemplateImg noBorder={noBorder} src={img} />
        </ImgWrapper>
        <div>{renderRightSideExtras && renderRightSideExtras()}</div>
      </ImgContainer>
      <div>{children}</div>
    </InternalComponentStyles>
  );
}
