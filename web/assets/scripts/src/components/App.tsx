import React, { useEffect } from "react";
import Api from "../utils/api";

function App() {
  const [order, setOrder] = React.useState({
    name: "",
    phone: "",
    service: "",
  });
  const [validate, setValidate] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const services = await Api.getServices();
    };

    fetchData();
  }, []);


  const sendOrder = () => {
    setValidate(true);

    const setOrder = async () => {
      const send = await Api.setOrder(order);
    };

    let valid = true;
    Object.values(order).map((i) => {
      if (i === "") {
        valid = false;
      }
    });

    if (valid) {
      setOrder();
    }
  };

  const setOrderData = (e: any) => {
    const el = e.target;
    if (el) {
      const name = el.name;
      const value = el.value;

      setOrder({ ...order, [name]: value });
    }
  };

  return (
    <div>
      <form className="order">
        <h3>Form</h3>
        <div className="w3-panel w3-padding-top-24">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Type You First Name"
            name="name"
            autoComplete="off"
            onChange={(e) => setOrderData(e)}
          ></input>
          <div
            className={
              validate && !order.name ? "validate__error" : "validate__hidden"
            }
          >
            Please, type You First Name
          </div>
        </div>

        <div className="w3-panel w3-border-top w3-padding-top-24">
          <label>You phone:</label>
          <input
            type="text"
            placeholder="Type you phone"
            name="phone"
            autoComplete="off"
            onChange={(e) => setOrderData(e)}
          ></input>
          <div
            className={
              validate && !order.phone ? "validate__error" : "validate__hidden"
            }
          >
            Please, type you phone
          </div>
        </div>



        <div className="w3-panel">
          <button
            type="button"
            className="w3-button w3-round-xlarge w3-green"
            onClick={() => sendOrder()}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
