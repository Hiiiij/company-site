import { css, keyframes } from '@emotion/react';

const fadeInOpacity = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
export const fadeIn = css`
  opacity: 1;
  animation-name: ${fadeInOpacity};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.4s;
`;
