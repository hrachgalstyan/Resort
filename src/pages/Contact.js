import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Title from '../components/Title';

const Contact = (props) => {
    return (
        <>
            <Hero>
                <Banner title="Luxurious rooms" subtitle="Deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">Our rooms</Link>
                </Banner>
            </Hero>
            <Title title="Contact form" />
            <div className="w-50 mx-auto" id="form">
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="examplePassword">Name</Label>
                    <Input type="name" name="name" id="examplename" placeholder="Name" />
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="exampleSelect">Persons</Label>
                <Input type="select" name="select" id="exampleSelect">
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
            </FormGroup>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" id="exampleCity" placeholder="City" />
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="text" name="state" id="exampleState" placeholder="State" />
                </FormGroup>
                </Col>
                <Col md={2}>
                <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" id="exampleZip" placeholder="Zip" />
                </FormGroup>  
                </Col>
            </Row>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" placeholder="Message" />
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck"/>
                <Label for="exampleCheck" check>Check me out</Label>
            </FormGroup>
            <button className="btn-primary my-3">Contact</button>
            </div>
        </>
    );
}

export default Contact;