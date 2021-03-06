import styled from '@emotion/styled';

import { fadeIn } from '../../Styles';

export const Container = styled.div`
    display: flex;
    background-repeat: no-repeat;
    background-position: 0% 100%;
    background-image: url("../Assets/dots.svg");
    ${fadeIn};
`;