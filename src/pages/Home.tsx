import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <div>
      <Link to="/budget-app">
        <Button variant="contained">Start</Button>
      </Link>

      <img
        src="https://res.cloudinary.com/dzawqz7fy/image/upload/v1714236847/budget-pic_zzwv42.jpg"
        alt="budget-image"
      />
    </div>
  );
};
export default Home;
