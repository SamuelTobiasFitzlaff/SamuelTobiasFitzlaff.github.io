import styled from "styled-components";

export const Container = styled.div`
  color: var(--text-primary);

  min-height: calc(100vh - var(--header-height));
  display: grid;
  grid-template-rows: 1fr auto;
  margin-top: var(--header-height);
`;
