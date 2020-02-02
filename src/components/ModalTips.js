import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Media
} from 'reactstrap';
import autofill from './images/autofill.jpg'

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>AutoFill Feature</CardTitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;