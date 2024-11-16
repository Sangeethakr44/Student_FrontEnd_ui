import React from 'react'

import Gif from "./Assets/icons8-book.gif"
import { motion } from "framer-motion";

import FirstSlide from './Assets/pexels-photo-46274.webp'
import SecondSlide from './Assets/pexels-photo-12365555.webp'
import ThirdSlide from './Assets/pexels-photo-7809948.webp' 
import './Dashboard.css';
import { Link } from 'react-router-dom';

import student from './Assets/pexels-photo-1007066.webp'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const Dashboard = () => {
  return (
    <>
         <table>
          <tr>
            <td>
            <img src={Gif}  className="id" id="img" width="150px" height="100px" alt="Logo" />
            </td> 
                     
            <td>
            <motion.h1
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 0.9 }}
      >
        <td>
        <p style={{fontSize:'80px',color:'black',textAlign:"left"}}>Student Course Enrolment System</p>

        </td>

      </motion.h1>
            </td>
         
          </tr>
         

         </table>
      <table>

     <tr>

     <td className='table'> 
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={student}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Student List
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            To Click to Find the Student List
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={'/student'}> <Button size="small" color="primary">
         Show
        </Button></Link>
      </CardActions>
    </Card>
    </td>
<td  className='table'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={student}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Course List
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            To Click to Find the Courses
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={'/course'}>
        <Button size="small" color="primary">
         Show
        </Button>
        </Link>
      </CardActions>
    </Card>
    </td>
    <td  className='table'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={student}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Enrollment new
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            To Click to Enrollment
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={'/enrollment'}>
        <Button size="small" color="primary">
         Show
        </Button>
        </Link>

      </CardActions>
    </Card>
    </td>
    </tr>
    
    </table>

    
</>
 
  )
}

export default Dashboard