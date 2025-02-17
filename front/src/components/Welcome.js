import React from 'react';
import { Container, Alert, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="mt-4">
      <Alert
        variant="info"
        className="text-center bg-white text-dark border-dark"
      >
        <h1>Images Gallery</h1>
        <p>
          This is app that retrieves photos using Unsplash API. To start typing
          any word and see the miracle{' '}
        </p>
        <Button
          className="custom-button"
          variant="primary"
          href="https://unsplash.com/"
          target="_blank"
        >
          Learn more
        </Button>
      </Alert>
    </Container>
  );
};

export default Welcome;
