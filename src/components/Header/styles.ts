import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 1440px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  img {
    width: 5.3rem;
  }

  @media screen and (max-width: 1440px) {
    width: 1120px;
  }
  @media screen and (max-width: 1120px) {
    width: 100%;

    padding: 2rem 10%;
  }
  @media screen and (max-width: 320px) {
    padding: 2rem 0;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const LocalInformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  background-color: ${(props) => props.theme.purple_light};
  border-radius: 6px;

  color: ${(props) => props.theme.purple};

  span {
    color: ${(props) => props.theme.purple_dark};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`;

export const CartContainer = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.yellow_dark};

  background-color: ${(props) => props.theme.yellow_light};
  border-radius: 4px;
`;
