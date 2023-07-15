import styled from "styled-components";

export const Container = styled.div`
  color: var(--text-primary);

  min-height: calc(100vh - 60px);
  display: grid;
  grid-template-rows: 1fr auto;
  margin-top: 60px;
`;
