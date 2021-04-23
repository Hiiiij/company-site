import styled from '@emotion/styled';
const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
`;
const TeamName = styled.h4`
  font-size: 2rem;
  font-weight: bold;
  line-height: 28.91px;
`;

const ProfileImg = styled.img`
  margin-top: 80px;
`;
const TeamItem = styled.div`
  width: 100%;
  height: 100%;
  minwidth: 200px;
`;

const ProjectTile = styled.h3`
  font-size: 22px;
  font-weight: 400;
  flex: 4;
`;
const FaviconImg = styled.img`
  width: 42px;
  height: 42px;
  flex-grow: 1;
  ${'' /* align-self: flex-end; */}
`;
const JobTitleContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const SubtitleContainer = styled.div`
  flex-grow: 4;
`;

export function TeamGrid({ teamCardData }) {
  return (
    <CompanyGrid>
      {teamCardData.map((item, index) => (
        <TeamItem key={index}>
          <ProfileImg src={item.img} />
          <JobTitleContainer>
            <SubtitleContainer>
              <TeamName className="bold">{item.name}</TeamName>
              <ProjectTile>{item.title}</ProjectTile>
            </SubtitleContainer>

            <FaviconImg src={item.favicon} />
          </JobTitleContainer>
        </TeamItem>
      ))}
    </CompanyGrid>
  );
}
