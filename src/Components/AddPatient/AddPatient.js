import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap';
import addOccupants from '../Occupants/Occupants'

function AddPatientForm() {

    const [mrn, setMRN] = useState("");
    const [admDate, setAdmDate] = useState(null);


    const handleSubmit = event => {
        event.preventDefault();
        addOccupants("matty");

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicMRN">
                <Form.Label>MRN</Form.Label>
                <Form.Control type="text" placeholder="Enter MRN"
                    onChange={event => setMRN(event.target.value)} />
                <Form.Text className="text-muted">
                Please enter the MRN carefully
                </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicAdmDate">
                <Form.Label>Admission Date</Form.Label>
                <Form.Control type="date" placeholder="Admission Date" 
                    onChange={event => setAdmDate(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            MRN: {mrn}
            <br/>
            Date: {admDate}    
        
        </div>
      );
}

export default AddPatientForm;