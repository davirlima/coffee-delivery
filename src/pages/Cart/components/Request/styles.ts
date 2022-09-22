import styled from "styled-components";

export const RequestContainer = styled.div`
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px;

  .header {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;

    .icon-yellow_dark {
      color: ${(props) => props.theme.yellow_dark};
    }
    .icon-purple {
      color: ${(props) => props.theme.purple};
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
    }
    p {
      font-size: 0.875rem;
    }
  }
`;

export const FormAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }

  input {
    padding: 0.75rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme.base_input};
    border: 1px solid ${(props) => props.theme.base_button};

    font-size: 0.875rem;
    color: ${(props) => props.theme.base_txt};

    ::placeholder {
      color: ${(props) => props.theme.base_label};
    }

    :focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.yellow_dark};
    }
  }

  #cep,
  #numero,
  #bairro {
    width: 35.71%;
  }
  #complemento {
    width: 62.14%;
  }
  #cidade {
    width: 49.28%;
  }
  #uf {
    width: 10.71%;
  }
`;

export const ButtonsPaymentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  input {
    display: none;
    :checked {
      ~ label {
        background-color: ${(props) => props.theme.purple_light};
        border: 1px solid ${(props) => props.theme.purple};
      }
    }
  }

  label {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background-color: ${(props) => props.theme.base_button};
    transition: background-color, 0.5s;
    border: 1px solid transparent;
    border-radius: 6px;
    font-size: 0.75rem;

    .icon {
      font-size: 1rem;
      color: ${(props) => props.theme.purple};
    }

    :hover {
      background-color: ${(props) => props.theme.base_hover};
    }
  }
`;