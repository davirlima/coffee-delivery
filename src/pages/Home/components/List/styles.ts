import styled from "styled-components";

export const ListContainer = styled.section`
  width: auto;
  display: grid;
  grid-template-columns: 16rem 16rem 16rem 16rem;
  row-gap: 2.5rem;
  column-gap: 2rem;

  @media screen and (min-width: 1441px) {
    width: 100%;
    justify-content: space-between;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 16rem 16rem 16rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 16rem 16rem;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 16rem;
  }
`;
