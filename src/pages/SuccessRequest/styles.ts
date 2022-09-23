import styled from "styled-components";

export const SuccessRequestContainer = styled.main`
  width: 1440px;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75rem;

  .success-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h1 {
      font-size: 2rem;
      color: ${(props) => props.theme.yellow_dark};
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 400;
    }
  }

  .content {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 1440px) {
    width: 1120px;
  }
  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 0 10%;
  }
`;

export const OrderInformationContainer = styled.section`
  position: relative;
  padding: 2.5rem;

  border-radius: 6px 36px;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );

  ::before {
    content: "";
    background-color: ${(props) => props.theme.body_bg};
    position: absolute;
    inset: 1px;
    border-radius: 6px 36px;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .icon {
      padding: 0.5rem;
      border-radius: 50%;
      color: ${(props) => props.theme.white};
    }

    .background-purple {
      background-color: ${(props) => props.theme.purple};
    }

    .background-yellow {
      background-color: ${(props) => props.theme.yellow};
    }

    .background-yellow_dark {
      background-color: ${(props) => props.theme.yellow_dark};
    }

    .address {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0rem;
    }
  }
`;
