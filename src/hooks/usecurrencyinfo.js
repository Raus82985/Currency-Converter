import { useEffect, useState } from "react"

//we are creating our own hook which will return thing according to my preference
function useCurrencyInfo(currency){     //currency means jisse convert karna chahate hai
    currency = currency.toLowerCase()
    //now i want to use an api but we will not use fetch as we want to call the api when this hook get called
    console.log(currency.toLowerCase());
    const [data, setData] = useState({})
    console.log(currency);
    useEffect(() => {fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-04-06/v1/currencies/${currency.toLowerCase()}.json`)
    .then((res) => res.json())
    .then((res) => (res[currency]))      //.currency nahi kar sakta q ki ye variable hai
    .then((res) => setData(res))
    console.log(data);

    //data is like
    //agar from me usd hai to usse jitna convert ho skta hai wo sab ka ek object bna ke data me store kar ke vej de raha hai 
}, [currency])
return data;  
}

export default useCurrencyInfo;
