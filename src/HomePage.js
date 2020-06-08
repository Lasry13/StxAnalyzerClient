import React from 'react';
import "./styles.css";
import {Card, CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
    return (
        <div className='form'>
            <div className='header'>
                <h1>Discover our services</h1>
            </div>
            <CardGroup>
                <Card>
                    <Card.Body style={{height: '400px'}}>
                        <Card.Title>Explore new Shares</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{'background-color': 'orange'}}>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Participate in online marketplace</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{'background-color': 'orange'}}>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Review your performance</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{'background-color': 'orange'}}>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Review your performance</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{'background-color': 'orange'}}>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}

export default HomePage;
