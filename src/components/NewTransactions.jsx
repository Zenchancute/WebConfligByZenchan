import { useState, useEffect } from 'react';
import { Typography, Box, TextField, Button, styled, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const Container = styled(Box) `
display: flex; 
flex-direction: column;
& > h5, & > div, & > button 
{ margin-top: 30px };`
const StyledButton = styled(Button) `background: #445A6F;
 color: #fff;`
const NewTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [type, setType] = useState('');
  const [amountError, setAmountError] = useState(false);
  const [formChanged, setFormChanged] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const transactionTypes = [
      { label: 'Rent', value: 'Tiền thuê nhà' },
      { label: 'Electricity', value: 'Tiền điện' },
      { label: 'Water', value: 'Tiền nước' },
      { label: 'Internet', value: 'Tiền Internet' },
      { label: 'Other', value: 'Các loại tiền khác' },
  ];
  useEffect(() => {
      if (text || amount || note || date || type) {
          setFormChanged(true);
      } else {
          setFormChanged(false);
      }
  }, [text, amount, note, date, type]);
  const newTransaction = (e) => {
    e.preventDefault();
    if (isNaN(amount)) {
      setAmountError(true);
      return;
    }
    if (!type || !note || !amount || !date) {
      setFormChanged(true);
      setButtonPressed(true); // <-- set buttonPressed to true
      return;
    }
    const transaction = {
      id: Math.floor(Math.random() * 100000000),
      text: type,
      note: note,
      amount: +amount,
      date: date,
    };
    addTransaction(transaction);
    setText('');
    setAmount('');
    setNote('');
    setDate(new Date().toISOString().substring(0, 10));
    setType('');
    setAmountError(false);
    setFormChanged(false);
    setButtonPressed(false); // <-- reset buttonPressed to false
  };  
  return (
      <Container>
          <Typography variant="h5">Thêm mới chi tiêu</Typography>
          <FormControl sx={{ mt: 1, width: '100%' }}>
              <InputLabel id="transaction-type-label">Loại</InputLabel>
              <Select
                  labelId="transaction-type-label"
                  id="transaction-type"
                  value={type}
                  label="Transaction Type"
                  onChange={(e) => setType(e.target.value)}
              >
                  {transactionTypes.map((transactionType) => (
                      <MenuItem key={transactionType.value} value={transactionType.value}>
                          {transactionType.label}
                      </MenuItem>
                  ))}
              </Select>
          </FormControl>
          <TextField value={note} label="Note" onChange={(e) => setNote(e.target.value)} />
          <TextField
              value={amount}
              label="Amount"
              error={amountError}
              helperText={amountError && 'Please enter a number.'}
              onChange={(e) => setAmount(e.target.value)}
          />
          <TextField value={date} type="date" label="" onChange={(e) => setDate(e.target.value)} />
          <StyledButton variant="contained" disabled={!formChanged} onClick={newTransaction}>
             Thêm chi tiêu
          </StyledButton>
          {buttonPressed && formChanged && (!type || !note || !amount || !date) && (
              <Typography variant="caption" color="error">
                  Vui lòng điền đầy đủ thông tin 
              </Typography>
          )}
      </Container>
  )
}

export default NewTransaction;
