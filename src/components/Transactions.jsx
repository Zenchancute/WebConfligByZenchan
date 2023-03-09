import { Typography, List, Divider, styled, Box } from '@mui/material';
import Transaction from './Transaction';

const Component = styled(Box)`
  & > h5 {
    margin-bottom: 10px;
  }

  & .scrollable {
    max-height: 400px;
    overflow-y: auto;
  }
`;

const Transactions = ({ transactions, deleteTransaction }) => {
  return (
    <Component>
      <Typography variant="h5">Transaction History</Typography>
      <Divider style={{ width: '100%' }} />
      <List className="scrollable">
        {transactions.map((transaction) => (
          <Transaction
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            key={transaction.id}
          />
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="type-label">Transaction Type</InputLabel>
        <Select
          labelId="type-label"
          value={selectedType}
          label="Transaction Type"
          onChange={handleTypeChange}
        >
          <MenuItem value="">Tất cả các loại</MenuItem>
          <MenuItem value="Rent">Rent</MenuItem>
          <MenuItem value="Water">Tiền nước</MenuItem>
          <MenuItem value="Electric">Tiền điện</MenuItem>
          <MenuItem value="Internet">Tiền Internet</MenuItem>
          <MenuItem value="Others">Các loại khác</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Month (0-12)"
        value={selectedMonth}
        onChange={handleMonthChange}
        type="number"
        sx={{ marginLeft: '20px' }}
      />
    </Box>
    </Component>
  );
};

export default Transactions;
