import styled from "styled-components";

export const CoffeeListContainer = styled.main`
  width: 1440px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.375rem;

  @media screen and (max-width: 1440px) {
    width: 1120px;
  }
  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 0 10%;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    padding: 0.375rem 0.75rem;

    background-color: transparent;
    transition: background-color, 0.5s;
    border: 1px solid ${(props) => props.theme.yellow};
    border-radius: 100px;

    color: ${(props) => props.theme.yellow_dark};
    font-size: 0.625rem;
    font-weight: 700;

    :hover {
      background-color: ${(props) => props.theme.yellow_light};
    }
  }

  .active {
    background-color: ${(props) => props.theme.yellow_light};
  }

  @media screen and (max-width: 425px) {
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
