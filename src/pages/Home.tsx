import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <div>
      <Link to="/budget-app">
 
        <Button variant="contained">Start</Button>
      </Link>

      <img src="./src/img/budget-pic.jpg" alt="budget-image" />
    </div>
  );
};
export default Home;
