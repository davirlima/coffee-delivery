import styled from "styled-components";

export const CartContainer = styled.main`
  width: 1440px;
  margin: 2.5rem auto;
  display: grid;
  grid-template-columns: 58.8% 41.17%;
  column-gap: 2rem;

  @media screen and (max-width: 1440px) {
    width: 1120px;
  }
  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 0 10%;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: auto;
    column-gap: 0;
    row-gap: 2rem;
  }
`;

export const Frame = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme.base_subtitle};
    margin-bottom: 1rem;
  }
`;
