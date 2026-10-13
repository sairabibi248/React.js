import {useState} from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
  
function CurrencyConverter() {
  const currencyInfo = useCurrencyInfo("usd");
  return (
    <>
    <div>
      <h3 className="title"> Currency Converter</h3>

     
     

    </div>
    </>
  );
}

export default CurrencyConverter; 