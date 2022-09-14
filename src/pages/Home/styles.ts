import styled from "styled-components";

export const CoffeeListContainer = styled.main`
  width: 1120px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.375rem;

  .titleSection {
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
  }

  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 0 10%;
  }
`;
