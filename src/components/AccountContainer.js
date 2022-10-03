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
  
 function handleSort(e) {
  let criteria = e.target.textContent.toLowerCase();
  function compare( a, b ) {
    if ( a[criteria].toLowerCase() < b[criteria].toLowerCase() ){
      return -1;
    }
    if ( a[criteria].toLowerCase() > b[criteria].toLowerCase() ){
      return 1;
    }
    return 0;
  }
  console.log("Hello")
  setTransactions([...transactions.sort( compare )]);
}

  function handleDeletion(id){
    fetch(`http://localhost:8001/transactions/${id}`,{
      method:"DELETE"
    })
    .then(()=>dataFetch());
  }

    return (
        <div>
          <Search handleSearch={handleSearch} />
          <AddTransactionForm  submit={onSubmit} />
          <TransactionsList 
          transactions={transactions}
          handleSort={handleSort}
          handleDeletion={handleDeletion}
          />
        </div>
    );
  }
    
export default AccountContainer;

