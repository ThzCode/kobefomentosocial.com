import styled from "styled-components";

export const Container = styled.div`
  h1 {
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
  }

  .countdown-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .countdown-item {
    color: #111;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 30px;
    margin-top: 80px;
    margin: 10px;
    padding-top: 5px;
    position: relative;
    width: 60px;
    height: 60px;
    @media only screen and (max-width: 960px) {
      width: 40px;
      height: 40px;
      margin-top: 30px;
    }
    @media only screen and (max-width: 560px) {
      width: 18px;
      height: 18px;
      margin-top: 35px;
      margin: 20px;
    }
    @media only screen and (max-width: 460px) {
      width: 14px;
      height: 14px;
      margin-top: 30px;
      margin: 20px;
    }
  }

  .countdown-item span {
    color: #333;
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    @media only screen and (max-width: 560px) {
      font-size: 7px;
    }
    @media only screen and (max-width: 460px) {
      font-size: 6px;
    }
  }

  .countdown-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
  }
`;
