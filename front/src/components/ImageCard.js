import React from 'react';
import { Button, NavLink } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const ImageCard = ({ image, deleteImage, saveImage }) => {
  const authorPortfolioURL = image.user?.portfolio_url;
  const authorName = image.user?.name;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{' '}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        {authorPortfolioURL ? (
          <NavLink href={authorPortfolioURL} target="_blank">
            {authorName}
          </NavLink>
        ) : (
          authorName
        )}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
