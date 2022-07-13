import React, { useState } from "react";
import hero from "./images/hero_image3.svg";
import DailyData from "./utils/DailyData";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function App() {
  const [name, setName] = useState("");
  // const [data, setData] = useState([]);

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:5000/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? "rzp_test_lSoy1v73u6TPV8" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for your kind donation",
      image: { hero },
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name,
        email: "sdfdsjfh2@ndsfdf.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  // const callback = (data) => {
  //   console.log(data);
  //   setData(data);
  // };

  return (
    <div className="App">
      <div className="hero">
        <div>
          <img src={hero} alt="hero" />
        </div>
        <div className="hero-content">
          <p className="hero-text">Covid Relief</p>
          <p className="hero-body">
            This website provides the real-time statistics and analysis of covid-19 data
            in India.
          </p>
          <a
            className="App-link"
            onClick={displayRazorpay}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </div>
      </div>
      {/* <DailyData callback={callback} /> */}
      <DailyData />
    </div>
  );
}

export default App;
