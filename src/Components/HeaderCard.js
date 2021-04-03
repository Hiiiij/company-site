/* eslint-disable */
import React from "react";
import styled from "@emotion/styled";
import { ContainerWithLayoutPadding } from "./StyledComponents";

const internalComponentStyles = {
  display: "flex",
};
const ImgWrapper = styled.section`
  flex: 0 0 50%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
`;
const TextWrapper = styled.section`
  flex: 0 0 50%;
`;
export function HeaderCard({
  renderLeftSideExtras,
  renderRightSideExtras,
  renderHeader,
  description,
  img,
  isReversed,
  styles,
  imgWrapperStyles,
}) {
  const LeftSide = (
    <TextWrapper>
      {renderHeader && renderHeader()}
      <p>{description}</p>
      {renderLeftSideExtras && renderLeftSideExtras()}
    </TextWrapper>
  );

  return (
    <ContainerWithLayoutPadding
      style={{ ...styles, ...internalComponentStyles }}
    >
      {!isReversed && LeftSide}
      <ImgContainer>
        <ImgWrapper style={{ ...imgWrapperStyles }}>
          <img src={img} />
          {renderRightSideExtras && renderRightSideExtras()}
        </ImgWrapper>
      </ImgContainer>

      {isReversed && LeftSide}
    </ContainerWithLayoutPadding>
  );
}
