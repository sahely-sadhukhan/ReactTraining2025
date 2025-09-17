import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addBalance, withdrawBalance } from "./balanceReducer";
import './App.css'

function TransactionMgr() {

    const myAcc = useSelector(state => state.acountDtls);
    const dispatch = useDispatch();
    //console.log("myAcc ", myAcc);
    const [amount, setAmount] = useState(0);

    function addBalanceHandler() {
        if(amount > 0) {
            dispatch(addBalance(Number(amount)));
            setAmount(0);
        }
    }

    function withdrawBalanceHandler() {
        if(amount > 0) {
            if(amount > myAcc.balance) {
                alert("Insufficient Balance");
                return;
            }
            dispatch(withdrawBalance(Number(amount)));
            setAmount(0);
        }
    }

    return (
        <div>
            <h2>Welcome {myAcc.name}</h2>
            <span>Account Number: <b>{myAcc.accountNo}</b></span>
            <br />
            <span>Current Balance: <b>{myAcc.balance}</b></span>
            <br />
            <span>Transaction Amount:</span>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={addBalanceHandler}>Add Balance</button>
            <button onClick={withdrawBalanceHandler}>Withdraw Balance</button>
        </div>
    );
}
export default TransactionMgr;