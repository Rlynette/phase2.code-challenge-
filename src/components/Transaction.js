import React from "react";

function Transaction({ transactionObj }) {
  
  const { date, description, category, amount } = transactionObj;
  return (
     <tr > 
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
