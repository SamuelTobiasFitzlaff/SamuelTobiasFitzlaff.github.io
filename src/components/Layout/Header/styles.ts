import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  height: 60px;
`;
