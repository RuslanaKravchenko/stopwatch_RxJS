import styled from "styled-components";
const StopwatchStyled = styled.section`
  padding: 50px 20px 0;
  text-align: center;

  .stopwatch__title {
    margin-bottom: 20px;
    font-size: 36px;
    color: #0d5667;
  }

  .stopwatch__display {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    font-size: 50px;
    color: #212121;
  }

  .stopwatch__display-units {
    display: inline-block;
    width: 70px;
  }

  .stopwatch__btn-container {
    margin-top: 30px;

    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .stopwatch__btn {
    width: 200px;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #7915c5;
    border-color: #7915c5;
    border-radius: 30px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    &:focus,
    &:hover {
      color: #7915c5;
      background-color: #fff;
      border: 2px solid #883dc7f2;
      box-shadow: 6px 8px 18px 3px rgba(98, 46, 150, 0.23);
      outline: none;
    }

    &:disabled {
      cursor: default;
      pointer-events: none;
      background-color: #9e9fa0c7;
      border-color: #9e9fa0c7;
    }

    @media (max-width: 480px) {
      &:nth-child(1) {
        margin-bottom: 15px;
      }
    }

    @media (min-width: 768px) {
      &:nth-child(1) {
        margin-right: 15px;
      }
    }
  }
`;
export default StopwatchStyled;
