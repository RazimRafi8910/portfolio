import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ProfileImage from '../../assets/ProfileImage.jpg'

function ProfileImageCard() {
    return (
        <>
            <div className='col-lg-4 col-md-4 col-12 my-2'>
                <Card className='py-3 w-100' style={ {maxHeight:"26rem", backgroundColor:"#3C3D37",color:"#ECDFCC", border:"solid,2px", borderColor:"#D8A25E" }}>
                    <div className='d-flex justify-content-center'>
                        <Card.Img variant="top" style={{maxHeight:"24rem", maxWidth:"23rem"}} className='rounded img-thumbnail' src={ProfileImage} />
                    </div>
                    <Card.Body className='text-center p-0'>
                        {/* <Card.Title className='fs-2 fw-bold'>Hello Iam Razim Rafi</Card.Title>
                        <Card.Text>
                            
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ProfileImageCard