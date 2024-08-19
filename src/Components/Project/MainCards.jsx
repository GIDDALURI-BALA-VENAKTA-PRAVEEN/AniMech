import './MainCards.css';

import * as React from 'react';

import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MouseTracker from './MouseTracker';
import Typography from '@mui/material/Typography';

export default function MainCards() {

    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = React.useState(null);
  
  const cardData = [
    {
      image: require('./Assests/sample.webp'),
      title: 'Project 1',
      description: 'Hospital Management',
    },
    {
        image: require('./Assests/p-1.png'),
      title: 'Project 2',
      description: 'Education Management',
    },
    {
        image: require('./Assests/sample.webp'),
      title: 'Project 3',
      description: 'E-commerce Platform',
    },
    {
        image: require('./Assests/p-1.png'),
      title: 'Project 4',
      description: 'Social Media App',
    },
    {
        image: require('./Assests/sample.webp'),
      title: 'Project 5',
      description: 'Financial Management',
    },
  ];


  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className='card-back'>
    <div className="cards-container" onMouseMove={handleMouseMove}>
      {cardData.map((card, index) => (
        <Card className="card" key={index} sx={{ maxWidth: 10000 }
    } onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}>
          <CardActionArea className="one">
            <CardMedia className='imges'
              component="img"
              height="250"
              image={card.image}
              alt={card.title}
            />
            <div className="overlay">{card.viewName}
            <CardContent  className="card-content">
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            </div>
          </CardActionArea>
        </Card>
       
      ))
    
    
    }
    {hoveredCard !== null && (
        <MouseTracker
          x={mousePosition.x}
          y={mousePosition.y}
          viewName={'view'}
          isVisible={hoveredCard !== null}
        />
      )}
    </div>
    </div>
  );
  
}
