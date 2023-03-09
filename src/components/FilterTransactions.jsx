import { useState,useEffect } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const FilterTransactions = ({ transactions, type , month}) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const filterByType = (transactions, type = "All", date = null) => {
    if(date === null){
      if(type === "All")
        return transactions
      else return transactions.filter(transaction => transaction.text.includes(type))
    }else{
      
    }
    
  };
  // const filterByMonth = (transactions, month) => {
  //   return transactions.filter(transaction => {
  //     return transaction.date.getMonth() === month;
  //   });
  // };
  
  const handleMonthChange = (event) => {
    const month = parseInt(event.target.value);
    if (isNaN(month) || month < 0 || month > 12) {
      alert('Please enter a valid month (0-12)');
    } else {
      setSelectedMonth(month);
      filterByMonth(month);
    }
  }
  useEffect(()=>{
    filterByType(selectedType)
  })

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  }

  return (
    <List className="scrollable">
        {filterByType.map((transaction) => (
          <Transaction
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            key={transaction.id}
          />
        ))}
      </List>
  );
}

export default FilterTransactions;
