import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.textPrimary};

  min-height: calc(100vh - ${(props) => props.theme.headerHeight});
  display: grid;
  grid-template-rows: 1fr auto;
  margin-top: ${(props) => props.theme.headerHeight};
`;
