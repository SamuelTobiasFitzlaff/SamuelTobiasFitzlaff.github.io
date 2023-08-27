import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.backgroundPrimary};
  margin-top: 0.5rem;
  span {
    float: right;
  }
  h3 {
    font-size: 1.125rem;
    padding: 0.5rem;
  }
  p {
    font-size: 0.875rem;
    padding: 0 0.5rem 0.5rem;
  }
`;
