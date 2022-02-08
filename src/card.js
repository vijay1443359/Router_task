import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Route,Routes,Link,NavLink } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          XYZ Organization
        </Typography>
        <Typography variant="h5" component="div">
          India
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2">
          Learning is the
          <br />
          {'"KEY to SUCCESS"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link to="/contactus"  id="cardcontact">CONTACT US</Link>
          </Button>
      </CardActions>
    </Card>
  );
}
