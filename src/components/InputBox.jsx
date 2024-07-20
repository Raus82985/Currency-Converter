import { useId } from "react";
import React from "react"; 


function InputBox({
    label,      //for write TO or FROM
    amount,
    onAmountChange,
    onCurrencuChange,
    currrencyOptions = []  ,      //giving a default value to encounter error
    selectCurrency = "",
    amountDisable = false,
    currencyDisable = false,
    
    className = "",     //if user want his own css thats why this option is there
}) { 
    const val = selectCurrency.toUpperCase();
    console.log(`This is value ${val}`);
    const userid = useId();     //giving a unique id to each number
    return (
        
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={userid} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={userid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  //on change hme amount ki value change krni hao
                    // agar onAmountChange available hai then usko use krenge other wise crash kar jayega so checking is important
                    //number is liyee liye h q ki target normally string deta h but we need number

                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={val}
                    onChange = {(e) => {onCurrencuChange && onCurrencuChange(e.target.value)}}       //e.target.value changed value h jo user dala hai
                    
                >
                        {currrencyOptions.map((currency) => (
                            <option key={currency} value={currency}>        {/*agar loop use karna hai to key daalna nahi bhulna */}
                            {currency}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
