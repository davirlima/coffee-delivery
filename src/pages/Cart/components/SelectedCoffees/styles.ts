import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;

  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px 44px;
`;

export const ValuesInfomationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
  }

  .total {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme.base_subtitle};
  }
`;

export const RequestButton = styled.button`
  width: 100%;
  height: 2.875rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.yellow};
  transition: background-color, 0.5s;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  text-transform: uppercase;

  :hover:not(:disabled) {
    background-color: ${(props) => props.theme.yellow_dark};
  }

  :disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
