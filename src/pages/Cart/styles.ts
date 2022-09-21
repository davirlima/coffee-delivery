import styled from "styled-components";

export const CartContainer = styled.main`
  width: 1440px;
  margin: 2.5rem auto;
  display: grid;
  grid-template-columns: 40rem 28rem;
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

export const FrameContentContainer = styled.div`
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
      color: ${(props) => props.theme.base_subtitle};
    }
    p {
      font-size: 0.875rem;
    }
  }
`;

export const FormAddressContainer = styled.form`
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
    width: 12.5rem;
  }
  #complemento {
    width: 21.75rem;
  }
  #cidade {
    width: 17.25rem;
  }
  #uf {
    width: 3.75rem;
  }
`;

export const ButtonsPaymentContainer = styled.div`
  display: flex;
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
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background-color: ${(props) => props.theme.base_button};
    border: 1px solid transparent;
    border-radius: 6px;
    font-size: 0.75rem;

    .icon {
      font-size: 1rem;
      color: ${(props) => props.theme.purple};
    }
  }
`;
