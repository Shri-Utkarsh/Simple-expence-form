import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setExpenses }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const [errors, setErrors] = useState({});

  const validationConfiq = {
    title: [{ required: true, message: "Title is required" }],
    category: [{ required: true, message: "category is required" }],
    amount: [
      {
        required: true,
        message: "amount is required",
        
      },
       
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (validationConfiq[key]) {
        // Check if validation config exists for the key
        validationConfiq[key].forEach((rule) => {
          if (rule.required && !value) {
            errorsData[key] = rule.message;
            return true
          }
          // if(rule.pattern && !rule.pattern.test(value)){
          //   errorsData[key] = rule.message;
          //   return true
          // }
        });
      }
    });
    setErrors(errorsData);
    return errorsData;
  };

  //taking input in the form of object form FORM when clicked on button
  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { title, category, amount, id: crypto.randomUUID() };
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [...prevState, expense]);
    setTitle("");
    setCategory("");
    setAmount("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setErrors({});
        }}
        error={errors.title}
      />

      <Select
        label="Category"
        id="category"
        name="category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setErrors({});
        }}
        error={errors.category}
      />

      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
          setErrors({});
        }}
        error={errors.amount}
      />

      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
