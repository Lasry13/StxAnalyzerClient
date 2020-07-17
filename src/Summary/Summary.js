import React, {useState, useEffect} from 'react';
import {CardDeck, Card} from 'react-bootstrap';
import './Summary.css'
import axios from "axios";

const Summary = () => {
    const [stats, setStats] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/user/getUserByEmail/daniel.lasry9@gmail.com')
            .then(response => {
                setStats(response.data);
                setIsLoading(false)
            });
    }, []);
    if (isLoading)
        return <p>Loading ...</p>;
    return (
        <div>
            <hr></hr>
            <h1>Your Dashboard</h1>
            <hr></hr>
        <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title>Budget</Card.Title>
                    <Card.Text style = {{'fontSize' : '50px'}}>
                        ${Math.round(stats.user.budget * 100)/100}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Spend</Card.Title>
                    <Card.Text style = {{'fontSize' : '50px'}}>
                        $2345
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Budget</Card.Title>
                    <Card.Text style = {{'fontSize' : '50px'}}>
                        $2345
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    <CardDeck>
        <Card>
            <Card.Body>
                <Card.Title>Budget</Card.Title>
                <Card.Text style = {{'fontSize' : '50px'}}>
                    $2345
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small>Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
                <Card.Title>Budget</Card.Title>
                <Card.Text style = {{'fontSize' : '50px'}}>
                    $2345
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small>Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
                <Card.Title>Budget</Card.Title>
                <Card.Text style = {{'fontSize' : '50px'}}>
                    $2345
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small>Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardDeck>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Budget</Card.Title>
                        <Card.Text style = {{'fontSize' : '50px'}}>
                            $2345
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Budget</Card.Title>
                        <Card.Text style = {{'fontSize' : '50px'}}>
                            $2345
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Budget</Card.Title>
                        <Card.Text style = {{'fontSize' : '50px'}}>
                            $2345
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Budget</Card.Title>
                        <Card.Text style = {{'fontSize' : '50px'}}>
                            $2345
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Budget</Card.Title>
                        <Card.Text style = {{'fontSize' : '50px'}}>
                            $2345
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Budget</Card.Title>
                        <Card.Text style = {{'fontSize' : '50px'}}>
                            $2345
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Summary
