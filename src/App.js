import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box,Button,  styled } from '@mui/material';
import './App.css';

import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import FilterTransactions from './components/FilterTransactions'; // Import the component here
import NewTransaction from './components/NewTransactions';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
  margin: 10px 0;
  color: blue;
  font-size: 36px;
  text-transform: uppercase;
`;

const Component = styled(Box)`
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  height: 100%;
  margin: auto;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
`
const LinkButton = styled(Button)`
  color: white;
  text-transform: uppercase;
  margin-right: 20px;
  &.active {
    background-color: #00bcd4;
  }
`;
function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
  }

  // filterByMonth function filters transactions by month
 

  // filterByType function filters transactions by type
  

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="App">
      <AppBar position="static">
        <LinkButton>
          <Typography variant="h6" component="div">
            Home Page
          </Typography>
        </LinkButton>
        <LinkButton>
          <Typography variant="h6" component="div">
          Report Transaction
          </Typography>
        </LinkButton>
      </AppBar>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
        <Box>
          <FilterTransactions filterByMonth={filterByMonth} filterByType={filterByType} />
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Component>
    </div>
  );
}

export default App;
