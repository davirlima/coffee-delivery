import styled from "styled-components";

export const Card = styled.div`
  width: 16rem;
  height: 19.375rem;

  padding: 0 1.25rem 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.base_card};
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  margin-bottom: 1.125rem;

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    h3 {
      display: inline;

      padding: 0.25rem;

      font-size: 0.625rem;
      font-weight: 700;
      color: ${(props) => props.theme.yellow_dark};

      background-color: ${(props) => props.theme.yellow_light};
      border-radius: 100px;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  margin-bottom: 2.0625rem;

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base_subtitle};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.base_label};
  }
`;

export const BuyContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    color: ${(props) => props.theme.base_txt};
    span {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  div {
    display: flex;
    gap: 0.625rem;
  }
`;

export const CounterContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme.base_button};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  color: ${(props) => props.theme.base_title};

  button {
    display: flex;
    align-items: center;
    background-color: transparent;

    color: ${(props) => props.theme.purple};
    transition: color, 0.5s;

    :hover {
      color: ${(props) => props.theme.purple_dark};
    }
  }
`;

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.base_card};

  border-radius: 6px;
  background-color: ${(props) => props.theme.purple_dark};
  transition: background-color, 0.5s;

  :hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
