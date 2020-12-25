import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap';

const RandomUser = (props) => {
    const user = props.user;
    console.log(user);
    return (
        <Container>
            <Row>
                {
                    user.map(
                        usr => 
                        <Col md={4}>
                            <Card className='mb-3' border='info'>
                                <Card.Img className='p-2 rounded-circle' variant="top" src={usr.picture.large} />
                                <Card.Body>
                                <Card.Title className='text-center'>{usr.name.title +' '+ usr.name.first +' '+ usr.name.last}</Card.Title>
                                <Card.Text>
                                    <p><strong>Email:</strong> {usr.email}</p>
                                    <p><strong>Phone:</strong> {usr.cell}</p>
                                    <p><strong>Age:</strong> {usr.dob.age}</p>
                                    <p><strong>Location:</strong> {usr.location.city}, {usr.location.country}.</p>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )

                }
            </Row>
        </Container>
    );
};

export default RandomUser;