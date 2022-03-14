import styled from "styled-components";

export const CarouselStyle = styled.div`
  ul {
    width: 100%;
    display: flex;
    padding: 50px;
    gap: 25px;
    align-items: center;
    justify-content: space-between;
    margin: 0px;
    padding: 0px;

    /* animate scroll infinite */
    svg {
      margin: 0px;
      padding: 0px;
      animation: slide-in-left 10s ease-in-out infinite;
      animation-fill-mode: forwards;

      @keyframes slide-in-left {
        100% {
          transform: translateX(100vw);
        }
      }
    }
    li {
      margin: 0px;
      padding: 0px;
    }
  }
`;
