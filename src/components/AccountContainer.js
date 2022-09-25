import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const[transactions, setTransactions] = React.useState([]);
  const [copyTransactions, setCopytransaction] = React.useState([]);

  function dataFetch() {
    fetch("http://localhost:8001/transactions")
    .then(resp => resp.json())
    .then(result =>{
      setCopytransaction(result)
      setTransactions(result)
    })
  }
      React.useEffect(() => {
        dataFetch()
      }, [])
    
    
function onSubmit(obj) {
  console.log(obj);
    fetch("http://localhost:8001/transactions", {
    method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ ...obj, "amount": parseInt(obj.amount) })
     }).then(() => dataFetch())
 }
    
function handleSearch(event) {
   let searching = event.target.value.toLowerCase();
    setTransactions(copyTransactions.filter(val =>
    val.description.toLowerCase().includes(searching)));
 }
  
    return (
        <div>
          <Search  handleSearch={handleSearch} />
          <AddTransactionForm  submit={onSubmit} />
          <TransactionsList transactions={transactions}  />
        </div>
      );
    }

    
export default AccountContainer;

