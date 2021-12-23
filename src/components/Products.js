import { useEffect, useState } from "react";
import { ProductsContainer } from "../styles/ProductsStyles";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";

const Products = () => {
  const [ingredientes, setIngredientes] = useState();

  const [subtotal, setSubtotal] = useState(0);

  const [items, setItems] = useState(0);

  const [formValue, handleInputChange] = useForm({
    cantidad1: 0,
    cantidad2: 0,
    cantidad3: 0,
    cantidad4: 0,
    cantidad5: 0,
    cantidad6: 0,
    cantidad7: 0,
  });

  const {
    cantidad1,
    cantidad2,
    cantidad3,
    cantidad4,
    cantidad5,
    cantidad6,
    cantidad7,
  } = formValue;

  const getData = async () => {
    const resp = await fetch("https://recipe-rissoto.vercel.app/recipe");

    const json = await resp.json();

    setIngredientes(json.ingredients);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (subtotal < 0) setSubtotal(0);
  }, [subtotal]);

  const handleSelect = ({ target }) => {
    if (target.checked && target.name === "0") {
      setSubtotal(subtotal + Number(target.value) * Number(cantidad1));
      setItems(items + Number(cantidad1));
    }

    if (target.checked && target.name === "1") {
      setSubtotal(subtotal + Number(target.value) * Number(cantidad2));
      setItems(items + Number(cantidad2));
    }

    if (target.checked && target.name === "2") {
      setSubtotal(subtotal + Number(target.value) * Number(cantidad3));
      setItems(items + Number(cantidad3));
    }

    if (target.checked && target.name === "3") {
      setSubtotal(subtotal + Number(target.value) * Number(cantidad4));
      setItems(items + Number(cantidad4));
    }

    if (target.checked && target.name === "4") {
      setSubtotal(subtotal + Number(target.value) * Number(cantidad5));
      setItems(items + Number(cantidad5));
    }

    if (target.checked && target.name === "5") {
      setSubtotal(subtotal + Number(target.value) * Number(cantidad6));
      setItems(items + Number(cantidad6));
    }

    if (target.checked && target.name === "6") {
      setSubtotal(subtotal + Number(target.value) * Number(cantidad7));
      setItems(items + Number(cantidad7));
    }

    if (!target.checked && target.name === "0") {
      setSubtotal(subtotal - Number(target.value) * Number(cantidad1));
      setItems(items - Number(cantidad1));
    }

    if (!target.checked && target.name === "1") {
      setSubtotal(subtotal - Number(target.value) * Number(cantidad2));
      setItems(items - Number(cantidad2));
    }

    if (!target.checked && target.name === "2") {
      setSubtotal(subtotal - Number(target.value) * Number(cantidad3));
      setItems(items - Number(cantidad3));
    }

    if (!target.checked && target.name === "3") {
      setSubtotal(subtotal - Number(target.value) * Number(cantidad4));
      setItems(items - Number(cantidad4));
    }

    if (!target.checked && target.name === "4") {
      setSubtotal(subtotal - Number(target.value) * Number(cantidad5));
      setItems(items - Number(cantidad5));
    }

    if (!target.checked && target.name === "5") {
      setSubtotal(subtotal - Number(target.value) * Number(cantidad6));
      setItems(items - Number(cantidad6));
    }

    if (!target.checked && target.name === "6") {
      setSubtotal(subtotal - Number(target.value) * Number(cantidad7));
      setItems(items - Number(cantidad7));
    }
  };

  const handleSelectAll = () => {
    const d = document;

    let subtotal = 0;

    d.getElementById("0").setAttribute("checked", true);
    d.getElementById("1").setAttribute("checked", true);
    d.getElementById("2").setAttribute("checked", true);
    d.getElementById("3").setAttribute("checked", true);
    d.getElementById("4").setAttribute("checked", true);
    d.getElementById("5").setAttribute("checked", true);
    d.getElementById("6").setAttribute("checked", true);

    subtotal =
      Number(d.getElementById("0").value) * Number(cantidad1) +
      Number(d.getElementById("1").value) * Number(cantidad2) +
      Number(d.getElementById("2").value) * Number(cantidad3) +
      Number(d.getElementById("3").value) * Number(cantidad4) +
      Number(d.getElementById("4").value) * Number(cantidad5) +
      Number(d.getElementById("5").value) * Number(cantidad6) +
      Number(d.getElementById("6").value) * Number(cantidad7);

    setSubtotal(subtotal);

    setItems(
      items +
        Number(cantidad1) +
        Number(cantidad2) +
        Number(cantidad3) +
        Number(cantidad4) +
        Number(cantidad5) +
        Number(cantidad6) +
        Number(cantidad7)
    );
  };

  const handleDeselect = () => {
    const d = document;

    //console.log("deselect");

    d.getElementById("0").removeAttribute("checked");
    d.getElementById("1").removeAttribute("checked");
    d.getElementById("2").removeAttribute("checked");
    d.getElementById("3").removeAttribute("checked");
    d.getElementById("4").removeAttribute("checked");
    d.getElementById("5").removeAttribute("checked");
    d.getElementById("6").removeAttribute("checked");

    setSubtotal(0);

    setItems(0);
  };

  //console.log(ingredientes);

  //console.log(subtotal);

  //console.log(formValue);

  return (
    <ProductsContainer>
      <div className="header">
        <p>INGREDIENTES</p>
        <h1>Rissoto</h1>
        <span onClick={handleSelectAll}>Seleccionar todo</span>
        <span onClick={handleDeselect}>Deseleccionar todo</span>
      </div>

      <div className="main">
        {ingredientes?.map((el, index) => (
          <div className="product" key={index}>
            <div className="container-desc">
              <div className="container-1">
                <input
                  type="checkbox"
                  name={index}
                  id={index}
                  value={el.price}
                  onClick={handleSelect}
                />
                <input
                  type="text"
                  placeholder="0"
                  name={`cantidad${index + 1}`}
                  onChange={handleInputChange}
                />
              </div>

              <div className="container-2">
                <p>{el.product}</p>
                <p>{el.brand}</p>
                <p>{el.quantity}</p>
              </div>
            </div>

            <p className="price">{el.price} &euro;</p>
          </div>
        ))}
      </div>

      <div className="footer">
        <p className="items">
          Items: <span>{items}</span>
        </p>

        <div className="subtotal">
          <p>Subtotal</p>
          <p>{subtotal.toFixed(2)} &euro;</p>
        </div>

        <div className="envio">
          <p>Gastos de envio</p>
          <p>7.00 &euro;</p>
        </div>

        <div className="total">
          <p>Total</p>
          <p>{subtotal === 0 ? 0 : (subtotal + 7.0).toFixed(2)} &euro;</p>
        </div>

        <Link to="/compra">
          <button>
            Comprar Ingredientes:{" "}
            {subtotal === 0 ? 0 : (subtotal + 7.0).toFixed(2)} &euro;
          </button>
        </Link>
      </div>
    </ProductsContainer>
  );
};

export default Products;
