import styled from "styled-components";

export const RegistroContainer = styled.div`
  width: 40%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  h1 {
    text-align: center;
  }

  .form {
    border: 1px solid var(--color-gris);
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type="submit"] {
      border-width: 0;
      margin-top: 10px;
      /* border: 1px solid red; */
      padding: 10px;
      background-color: var(--color-azul);
      color: var(--color-blanco);
      border-radius: 2px;
      cursor: pointer;
      width: 150px;
    }
  }

  .input-container {
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    label {
      margin-bottom: 5px;
    }

    input {
      margin-bottom: 20px;
      height: 25px;
    }
  }

  a {
    text-decoration-line: none;
    color: black;
  }

  p {
    text-align: center;
    margin-top: 50px;

    &:hover {
      color: var(--color-azul);
      text-decoration-line: underline;
    }
  }
`;
