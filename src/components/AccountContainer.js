import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  
  const[transactions,setTransactions]=React.useState([]);
  ReactuseEffect(()=>
    fetch("http://localhost:8001/transactions")
    .then(resp => resp.json())
    .then(result => console.log(result))
    return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
