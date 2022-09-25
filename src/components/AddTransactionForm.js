import React from "react";

function AddTransactionForm({ submit }) {
  const [data, setFormData] = React.useState({})
  function handleChange(event) {
    setFormData({
      ...data,[event.target.name]:event.target.value
    })
  }

  function submitData(e) {
    e.preventDefault();
    submit(data)
  }
  
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit" onClick={submitData}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
