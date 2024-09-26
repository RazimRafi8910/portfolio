import React from 'react';
import { Card } from 'react-bootstrap';

function AboutCard() {
    return (
        <>
            <div className='col-lg-8 col-md-8 col-12 my-2'>
                <Card className='h-100' style={{ backgroundColor:"#3C3D37",color:"#ECDFCC", border:"solid,2px", borderColor:"#D8A25E" }}>
                    <Card.Body className='text-center'>
                        <Card.Title className='text-center fs-2 fw-bold'>Hi, I am Razim Rafi</Card.Title>
                        <Card.Subtitle>
                            <span className='text-secondary'>Email </span> : razimrafi@gmail.com |
                            <span className='text-secondary'> Phone </span> : +91 8848764715</Card.Subtitle>
                        <h3 className='text-start font-monospace fw-bold mt-4'>
                            About me
                        </h3>
                        <hr />
                        <Card.Text className='fs-5 font-monospace lh-'>
                            I'm a BCA student specializing in Artificial Intelligence with a strong passion for software development. As a self-taught MERN stack developer, I've built an e-commerce website and a blog React web app, showcasing my skills in both front-end and back-end technologies.
                            I am eager to leverage my expertise in AI and web development to pursue a career as a software engineer and contribute to innovative projects in the tech industry.
                            
                        </Card.Text >
                        <div className=''> 
                        <Card.Link href="#"><i className="fs-2 fa-brands fa-linkedin"></i></Card.Link>
                        <Card.Link href="#"><i className="fs-2 fa-brands fa-github" style={{color:"white"}}></i></Card.Link>
                        <Card.Link href="#"><i className="fs-2 fa-brands fa-instagram"style={{color:"darkOrange"}} ></i></Card.Link>
                            <Card.Link href="#"><i class="fs-2 fa-brands fa-whatsapp" style={{color:"#129900"}}></i></Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default AboutCard