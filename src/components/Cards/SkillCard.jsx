import React from 'react';
import { Card } from 'react-bootstrap';

function SkillCard() {
    return (
        <>
            <div className='col-lg-12'>
                <Card style={{ backgroundColor:"#3C3D37",color:"#ECDFCC", border:"solid,2px", borderColor:"#D8A25E" }}>
                    <Card.Body>
                        <Card.Title className='fw-bold fs-2'>Skills</Card.Title>
                        <hr />
                        <div className='row justify-content-center px-1'>
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-brands mx-2 fa-js" style={{color:"#FFD43B"}}></i>Javascript</h3>
                            </div>
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-brands mx-2 fa-python" style={{color:"#7cb19f"}}></i>Python</h3>
                            </div>
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-brands mx-2 fa-html5" style={{color:'red'}}></i>HTML</h3>
                            </div>
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-brands mx-2 fa-css3-alt" style={{color:'blue'}}></i>CSS</h3>
                            </div>
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-brands mx-2 fa-bootstrap" style={{color:"#693df0"}}></i>Bootstrap</h3>
                            </div>
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-brands mx-2 fa-node-js" style={{color:'lightgreen'}}></i>Node js</h3>
                            </div>
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-brands mx-2 fa-react" style={{color:'#74C0FC'}}></i>React</h3>
                            </div>
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-solid mx-2 fa-database" style={{color:"green"}}></i>MongoDB</h3>
                            </div>
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-solid mx-2 fa-database" style={{color:"lightblue"}}></i>MySQL</h3>
                            </div>
                            
                            <div className='col-lg-5 border m-2 border-light rounded'>
                                <h3 className='my-2'><i className="fa-solid mx-2 fa-server" style={{color:"#FFD43B"}}></i>Firebase</h3>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default SkillCard

