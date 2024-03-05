import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../shared/hotels_shared/SearchBar';

import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import f1 from '../flights-images/istockphoto-1314517985-612x612.jpg';
import f2 from '../flights-images/flight2.jpg';
import f3 from '../flights-images/bg1.jpg';
import b1 from '../flights-images/b1.jpeg';
import b2 from '../flights-images/b2.avif';
import b3 from '../flights-images/interior-public-bus-transport.jpg';
import h1 from '../flights-images/traveller-1.jpg';
import h2 from '../flights-images/traveller-2.jpg';
import h3 from '../flights-images/traveller-3.jpg';
import SearchBar from '../shared/hotels_shared/SearchBar';

export const About = () => {
    return (
        <Container className="main_divider">
            <Row>
                <Col>
                    <h1 className="headings">About Us</h1>
                    <p className="detail">
                        Welcome to our online booking system! We offer three
                        main services - Flights, Hotels, and Buses. Our mission
                        is to provide you with a seamless and enjoyable booking
                        experience for your travel needs. Whether you're
                        planning a vacation, a business trip, or a family visit,
                        we have you covered.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="headings">Our Services</h2>
                    <p className="detail">
                        <strong className='h2'>Flights:</strong><br /> Book flights to your desired
                        destination at the best prices. We partner with major
                        airlines to offer you a wide range of options.
                    </p>
                    <div className="flights">
                        <Card className='mb-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={f1} />
                            <Card.Body>
                                <Card.Title>Flight Service one</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className='mb-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={f2} />
                            <Card.Body>
                                <Card.Title>Flight Service two</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className='mb-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={f3} />
                            <Card.Body>
                                <Card.Title>Flight Service Three</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <p className="detail">
                        <strong className='h2'>Hotels:</strong> <br />Find comfortable and affordable
                        accommodation at top hotels. We have partnerships with
                        hotels around the world to ensure your stay is pleasant.
                    </p>
                    <div className="hotels">
                        <Card className='mb-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={h1} />
                            <Card.Body>
                                <Card.Title>Hotel Setvice One</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className='mb-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={h2} />
                            <Card.Body>
                                <Card.Title>Hotel Setvice Two</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className='mb-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={h3} />
                            <Card.Body>
                                <Card.Title>Hotel Setvice Three</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <p className="detail">
                        <strong className='h2'>Buses:</strong><br />Book bus tickets for local or
                        long-distance travel. We collaborate with reliable bus
                        operators to make your journey hassle-free.
                    </p>
                    <div className="buses">
                        <Card className='mb-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={b1} />
                            <Card.Body>
                                <Card.Title>Busses Service One </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className='mb-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={b2} />
                            <Card.Body>
                                <Card.Title>Busses Service Two</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={b3} />
                            <Card.Body>
                                <Card.Title>Busses Service Three</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="headings">Our Team</h2>
                    <p className="detail">
                        We are a team of dedicated developers passionate about
                        creating innovative solutions for travel enthusiasts.
                        Our expertise in web development and user experience
                        design enables us to deliver a high-quality booking
                        platform.
                    </p>
                </Col>
            </Row>
            <SearchBar/>
        </Container>
        
    );
};
