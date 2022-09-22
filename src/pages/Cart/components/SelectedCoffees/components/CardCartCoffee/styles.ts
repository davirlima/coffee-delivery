import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.base_button};

  .information {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme.base_subtitle};
      }

      .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
    }
  }

  .value {
    font-size: 1rem;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) and (min-width: 801px) {
    justify-content: space-around;
    .information {
      img {
        width: 3.5rem;
      }
    }
    .details {
      h3 {
        font-size: 0.7rem;
      }
    }
  }
`;

export const BaseDatailButton = styled.div`
  height: 2rem;
  padding: 0 0.5rem;

  background-color: ${(props) => props.theme.base_button};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CountButton = styled(BaseDatailButton)`
  span {
    font-size: 1rem;
    width: 1.25rem;
    text-align: center;
    color: ${(props) => props.theme.base_title};
  }

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

export const RemoveButton = styled(BaseDatailButton)`
  font-size: 0.75rem;
  cursor: pointer;
  transition: background-color, 0.5s;

  .icon {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background-color: ${(props) => props.theme.base_hover};
  }
`;
