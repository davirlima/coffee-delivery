import styled from "styled-components";
import background from "../../../../assets/introductionBackground.svg";

export const IntroductionContainer = styled.section`
  width: 100%;
  min-height: 34rem;

  display: flex;
  align-items: center;

  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
  width: 1440px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media screen and (max-width: 1440px) {
    width: 1120px;
  }
  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 0 10%;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  max-width: 36.75rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

export const ItemsContainer = styled.div`
  margin-top: 4.125rem;
  max-width: 35.4rem;

  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;
`;

interface IconBackgroundProps {
  color: "yellow" | "yellow_dark" | "gray" | "purple";
}

export const BenefitContainer = styled.div<IconBackgroundProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: ${(props) => {
      switch (props.color) {
        case "yellow_dark":
          return props.theme.yellow_dark;
        case "yellow":
          return props.theme.yellow;
        case "gray":
          return props.theme.base_txt;
        case "purple":
          return props.theme.purple;
      }
    }};

    border-radius: 50%;

    font-size: 1rem;
    color: ${(props) => props.theme.body_bg};
  }

  h3 {
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const CoffeeImage = styled.img`
  width: 29.75rem;

  @media screen and (max-width: 1024px) {
    width: 25rem;
  }

  @media screen and (max-width: 320px) {
    width: 20rem;
  }
`;
