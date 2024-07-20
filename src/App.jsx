import { useState } from 'react'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import { InputBox } from "./components/Index";
 

function App() {

const [amount, setAmount] = useState(0)
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")
const[convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo = useCurrencyInfo(from)  //this is our customize hook and we know it return only one value which is an object
const options = Object.keys(currencyInfo)   //we know in currencyInfo we are passing the objest so using this syntex we will get all the keys of that object

const swap = () => {
  setTo(from)
  setFrom(to)
  setConvertedAmount(amount)    //isse value v change ho jayega
  setAmount(convertedAmount)
}

const convert = () => {
  setConvertedAmount(amount*currencyInfo[to])   //on convert the amount will be multiplied by the converted amount and currency info have the key for all converted amount so we can use it directly
}
return (
  <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://img.freepik.com/premium-vector/money-transfer-global-currency-stock-exchange-background_115579-579.jpg')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();   //form jab submit hota h to kahi jata hai wo naa ho uske liye ye kiye h
                      convert()   //submit hone pe convert kar do
                  }}
              >
                    {/* Upper input box */}
                  <div className="w-full mb-1">
                      <InputBox     //yaha pe amount from ka amount ko define kar raha
                          label="From"
                          amount={amount}       //starting me amount 0 vej rahe hai
                          currrencyOptions={options}        //sara keys vej rahe hai
                          //ye ek method vej rahe hai
                          onCurrencuChange={(currency) => setFrom(currency)}
                          selectCurrency = {from}       //starting me usd vej rahe hai
                          onAmountChange={(amount) => setAmount(amount)}
                      />
                  </div>
                  {/* swap button */}
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>

                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currrencyOptions={options}
                          onCurrencuChange={(currency)=>
                            setTo(currency)
                          }
                          selectCurrency = {to}
                          
                          
                      />

                      
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
