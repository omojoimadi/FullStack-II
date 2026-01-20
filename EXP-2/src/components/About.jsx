import { Card, CardContent, Typography, Stack } from '@mui/material';
import Button from './Button';
import TextField from './TextField';
import Select from './Select';
import Rating from './Rating';
import CheckBox from './CheckBox';

export default function Home() {
  return (
    <Card sx={{ width: 320 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          About Page
        </Typography>

        <Stack spacing={2}>
          <TextField />
          <Select />
          <Rating />
          <CheckBox />
          <Button />
        </Stack>
      </CardContent>
    </Card>
  );
}
