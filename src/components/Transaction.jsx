import { ListItemText, ListItem, styled, ListItemIcon, Switch, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import PowerIcon from '@mui/icons-material/Power';
import OpacityIcon from '@mui/icons-material/Opacity';
import LanguageIcon from '@mui/icons-material/Language';
import LabelIcon from '@mui/icons-material/Label';

const List = styled(ListItem)`
  display: flex;
  margin-top: 10px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  &:hover {
    background-color: #f6f6f6;
  }
`;

const getTypeIcon = (type) => {
  switch (type) {
    case '':
      return <HomeIcon />;
    case 'Electricity':
      return <PowerIcon />;
    case 'Water':
      return <OpacityIcon />;
    case 'Internet':
      return <LanguageIcon />;
    case 'Other':
      return <LabelIcon />;
    default:
      return null;
  }
};

const Transaction = ({ transaction, deleteTransaction }) => {
  const { text, amount, date, type, note } = transaction;
  const sign = amount >= 0 ? '$' : '-$';
  const absAmount = Math.abs(amount);
  const amountText = sign + absAmount;
  const color = amount >= 0 ? 'Green' : 'Red';

  return (
    <Tooltip title={note} placement="right">
      <List style={{ background: color, color: '#fff' }}>
        <ListItemIcon>
          <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
        </ListItemIcon>
        <ListItemIcon style={{ color: '#fff' }}>
          {getTypeIcon(type)}
        </ListItemIcon>
        <ListItemText primary={text} />
        <ListItemText primary={amountText} secondary={date.toLocaleString()} />
      </List>
    </Tooltip>
  );
};

export default Transaction;
