import React from "react";

function Transaction({ transactionObj, handleDeletion }) {
  
  const { id,date, description, category, amount } = transactionObj;
  return (
     <tr onClick={()=>handleDeletion(id)}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
