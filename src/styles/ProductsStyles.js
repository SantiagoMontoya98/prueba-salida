import styled from "styled-components";

export const ProductsContainer = styled.div`
  border: 1px solid var(--color-gris);
  width: 50%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  .header {
    width: 100%;
    /* border: 1px solid green; */
    padding: 0 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--color-azul);

    p {
      margin: 0;
      margin-top: 10px;
      font-size: 12px;
      color: #757575;
    }

    h1 {
      margin: 0;
      margin-bottom: 15px;
    }

    span {
      color: var(--color-azul);
      cursor: pointer;
    }

    span:nth-of-type(1) {
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid var(--color-azul);
    }
  }

  .main {
    width: 100%;
    border-bottom: 1px solid var(--color-gris);
    padding-bottom: 10px;

    .product {
      width: 100%;
      /* border: 1px solid green; */
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .container-desc {
        display: flex;
        /* border: 1px solid black; */
        margin-left: 15px;
      }

      .container-1 {
        /* border: 1px solid red; */
        display: flex;
        align-items: center;

        input[type="text"] {
          width: 50px;
          padding: 10px 15px;
          border: 1px solid var(--color-gris-2);
          font-size: 25px;
          color: var(--color-azul);
          margin-left: 5px;
          border-radius: 2px;
          text-align: center;

          &::placeholder {
            color: var(--color-azul);
          }
        }
      }

      .container-2 {
        /* border: 1px solid red; */
        margin-left: 10px;
        p {
          margin: 0;
        }

        p:nth-of-type(1) {
          font-weight: 700;
        }

        p:nth-of-type(2) {
          font-size: 14px;
          color: var(--color-gris-2);
        }

        p:nth-of-type(3) {
          font-size: 14px;
        }
      }

      .price {
        color: var(--color-verde);
        font-size: 20px;
        font-weight: 700;
        /* border: 1px solid black; */
        margin-right: 50px;
      }
    }
  }

  .footer {
    width: 100%;
    /* border: 1px solid green; */
    padding: 0 30px;
    margin-top: 30px;

    .items {
      margin: 0;
      margin-bottom: 16px;
      color: var(--color-gris-3);

      span {
        color: black;
      }
    }

    .subtotal {
      width: 100%;
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-between;

      p {
        margin-top: 0;
      }

      p:nth-of-type(1) {
        color: var(--color-gris-3);
      }
    }

    .envio {
      width: 100%;
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-between;

      p {
        margin-top: 0;
      }

      p:nth-of-type(1) {
        color: var(--color-gris-3);
      }
    }

    .total {
      width: 100%;
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-between;

      p {
        margin-top: 0;
        margin-bottom: 0;
      }

      p:nth-of-type(1) {
        font-weight: 600;
      }

      p:nth-of-type(2) {
        font-size: 22px;
        font-weight: 600;
        color: var(--color-verde);
      }
    }

    button {
      width: 100%;
      margin-top: 20px;
      border-width: 0;
      margin-bottom: 30px;
      padding: 10px;
      font-size: 22px;
      background-color: var(--color-verde);
      border-radius: 2px;
      color: var(--color-blanco);
      cursor: pointer;
      transition: transform 500ms ease;

      &:hover {
        transform: scale(0.98);
      }
    }
  }
`;
