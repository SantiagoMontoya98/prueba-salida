import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  box-shadow: 0 0 10px -1px black;

  p {
    font-size: 22px;
    font-weight: 700;
  }

  .buttons {
    /* border: 1px solid green; */
    width: 240px;
    display: flex;
    justify-content: space-between;

    button {
      border-width: 0;
      width: 100px;
      height: 35px;
      cursor: pointer;
      transition: transform 500ms ease;
      border-radius: 2px;

      &:hover {
        transform: scale(0.95);
      }
    }

    button:nth-of-type(1) {
      background-color: var(--color-azul);
      color: var(--color-blanco);
    }

    button:nth-of-type(2) {
      background-color: var(--color-verde);
      color: var(--color-blanco);
    }
  }
`;
