import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ExperienceCard({ projectName, description, sreenshot, gitLink }) {
    return (
        <>
            <div className='col-lg-4 my-2'>
                <Card style={{ backgroundColor: "#3C3D37", color: "#ECDFCC", border: "solid,2px", borderColor: "#D8A25E" }}>
                    <Card.Img variant="top" src={sreenshot} />
                    <Card.Body>
                        <Card.Title className='fs-2'>{projectName}</Card.Title>
                        <Card.Text className='fs-6 lh-sm'>
                            {description}
                        </Card.Text>
                        <div className='d-flex justify-content-end px-4'>
                            <a href={gitLink} target="_blank" >
                                <Button variant="outline-light" className='border-2 d-flex align-items-center text-decoration-none fw-bold border-dark px-4' >
                                <i className="fs-2 fa-brands mx-2 text-decoration-none fa-github" style={{color:"white"}}></i>
                                    Github
                                </Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ExperienceCard