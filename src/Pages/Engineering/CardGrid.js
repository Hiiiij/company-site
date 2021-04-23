import React from 'react';
import { CenterContainer } from '../../Components/StyledComponents';
import styled from '@emotion/styled';

const ProjectTile = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;
const ProjectItem = styled.div`
  width: 100%;
  height: 100%;
  minwidth: 200px;
`;

const ProjectImg = styled.img`
  margin-bottom: 41px;
  margin-top: 67px;
  width: 100%;
`;
const Wrapper = styled.div`
  padding-top: 67px;
  padding-bottom: 67px;
`;
const BlackBg = styled.div`
  background-color: #000;
  color: #fff;
`;
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 50px;
`;

export function CardGrid({ projectCardData }) {
  return (
    <BlackBg>
      <CenterContainer>
        <Wrapper>
          <h2>Projects</h2>
          <ProjectGrid>
            {projectCardData.map((item, index) => (
              <ProjectItem key={index}>
                <ProjectImg src={item.img} />
                <ProjectTile>{item.title}</ProjectTile>
              </ProjectItem>
            ))}
          </ProjectGrid>
        </Wrapper>
      </CenterContainer>
    </BlackBg>
  );
}
