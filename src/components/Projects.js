import { Container,Row,Col,Nav, TabContainer, TabContent, TabPane } from "react-bootstrap"
import React, { useState } from 'react';
import laptopImage  from "../assets/img/SPLocalApple.png";
import color from "../assets/img/color-pallete-2.png"
import Carousel from 'react-bootstrap/Carousel';
import supportLogo from "../assets/img/Nobackgroundlogo.png";
import VueLogo  from "../assets/img/vue.svg";
import SASSLogo  from "../assets/img/sass.svg";
import CSSLogo  from "../assets/img/css.svg";
import HTMLLogo  from "../assets/img/html.svg";
import BootstrapLogo  from "../assets/img/bootstrap.svg";
import JavascriptLogo  from "../assets/img/javascript.svg";
import MongoDBLogo  from "../assets/img/mongodb.svg";
import NodeJSLogo from "../assets/img/nodejs.svg";
import ExpressLogo  from "../assets/img/express.svg";
import BusinessPhoto from "../assets/img/Business.png";
import color2 from "../assets/img/colorpallete-2.png"
import recycleLogo from "../assets/img/iRecycle.png"
import iRecycleCompile from "../assets/img/iRecycleCompile.png"
import iRecycleFeature1 from "../assets/img/iRecycleFeatures.png"
import iRecycleFeature2 from "../assets/img/iRecycleFeatures2.png"

export const Projects = ()=>{

    
      
    
    return(
        <section className="project" id="projects">
            <Container>
                <Row > 
                  <h1 className="text-center">PROJECTS</h1>
                </Row>
                <Row>
                    <Col >
                        <div className="shadow">
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Support <br className="d-sm-none"></br> Local</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">iRecycle UI/UX</Nav.Link>
                            </Nav.Item>
                        </Nav>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <TabContainer id="projects-tabs-secondary"  defaultActiveKey="first-secondary">
                                        <Nav variant="pills" className="nav-pills-secondary mb-5 justify-content-center align-items-center" id="pills-tab-secondary">
                                            <Nav.Item className="secondary ">
                                                <Nav.Link eventKey="first-secondary">Project<br className="d-sm-none"></br> Intro</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="secondary">
                                                <Nav.Link eventKey="third-secondary">Color <br className="d-sm-none"></br>Scheme</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="secondary">
                                                <Nav.Link eventKey="second-secondary">Tech <br className="d-sm-none"></br> Stack</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <TabContent>
                                            <TabPane eventKey="first-secondary"> 
                                                <Row>
                                                <a href="https://supportlocal.netlify.app/#/"><img className="w-25 mx-auto" src={supportLogo} alt="supportLocal"></img></a>
                                                <Carousel className="my-4" variant="dark"  >
                                                    <Carousel.Item interval={4000}>
                                                        <img
                                                        className="w-50 pb-5"
                                                        src={laptopImage}
                                                        alt="First slide"
                                                        />
                                                        
                                                    </Carousel.Item>
                                                    <Carousel.Item interval={10000}>
                                                        
                                                        <img className="w-75" src={BusinessPhoto} alt="businessPhoto"></img>
                                                        <h5 className="px-5 pb-5 mx-5 text-justify  ">SupportLocal is an eCommerce website that aggregates all local businesses, services, and products into an easy-to-use portal, allowing businesses to market their products and services to customers.</h5>
                                                        
                                                    </Carousel.Item>
                                                    </Carousel>
                                                </Row>
                                            </TabPane>
                                            <TabPane eventKey="second-secondary"> 
                                                <a href="https://supportlocal.netlify.app/#/"><img className="w-25 mx-auto" src={supportLogo} alt="supportLocal"></img></a>
                                                <div  className="w-50 mx-auto techStack">Front End</div>
                                                <Row>                                        
                                                    <Col className="my-auto " sm={6} md={4}>
                                                        <img className=" techImage" src={HTMLLogo} alt="HTML"></img>
                                                        <h5 className="py-3">HTML</h5>
                                                    </Col>
                                                    <Col className="my-auto " sm={6} md={4}>
                                                        <img className=" techImage" src={JavascriptLogo} alt="javascript"></img>
                                                        <h5 className="py-3">Javascript</h5>
                                                    </Col>
                                                    <Col className="my-auto" sm={6} md={4}>
                                                        <img className=" techImage" src={CSSLogo} alt="css"></img>
                                                        <h5 className="py-3">CSS</h5>
                                                    </Col>
                                                    <Col className="my-auto " sm={6} md={4}>
                                                        <img className=" techImage" src={SASSLogo} alt="sass"></img>
                                                        <h5 className="py-3">SASS</h5>
                                                    </Col>
                                                    <Col className="my-auto " sm={6} md={4}>
                                                        <img className=" techImage" src={VueLogo} alt="vue"></img>
                                                        <h5 className="pb-3">Vue</h5>
                                                    </Col>
                                                    <Col className="my-auto" sm={6} md={4}>
                                                        <img className="techImage" src={BootstrapLogo} alt="bootstrap"></img>
                                                        <h5 className="py-3">Bootstrap</h5>
                                                    </Col>
                                                </Row>
                                                <div className="w-50 mx-auto techStack">Back End</div>
                                                <Row>
                                                    <Col className="my-auto " sm={6} md={4}>
                                                        <img className="pt-4 techImages" src={MongoDBLogo} alt="mongdb"></img>
                                                        <h5 className="pb-3 pt-4">MongoDB</h5>
                                                    </Col>
                                                    <Col className="my-auto " sm={6} md={4}>
                                                        <img className="pt-4 techImages" src={NodeJSLogo} alt="nodejs"></img>
                                                        <h5 className="pb-3 pt-4">NodeJS</h5>
                                                    </Col>
                                                    <Col className="my-auto " sm={6} md={4}>
                                                        <img className=" techImage" src={ExpressLogo} alt="express"></img>
                                                        <h5 className="pb-0">Express</h5>
                                                    </Col>
                                                </Row>
                                                
                                            </TabPane>
                                            <TabPane eventKey="third-secondary"> 
                                                <Row>
                                                <a href="https://supportlocal.netlify.app/#/"><img className="w-25 mx-auto" src={supportLogo} alt="supportLocal"></img></a>
                                                </Row>
                                                <img className="w-75 mb-5" src={color} alt="color"/>
                                            </TabPane>
                                        </TabContent>
                                    </TabContainer> 
                                </TabPane>
                                <TabPane eventKey="second">
                                <TabContainer id="projects-tabs-secondary"  defaultActiveKey="first-secondary">
                                        <Nav variant="pills" className="nav-pills-secondary-2 mb-5 justify-content-center align-items-center" id="pills-tab-secondary">
                                            <Nav.Item className="secondary ">
                                                <Nav.Link eventKey="first-secondary">Project<br className="d-sm-none"></br> Intro</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="secondary ">
                                                <Nav.Link eventKey="second-secondary">Color <br className="d-sm-none"></br>Scheme</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="secondary ">
                                                <Nav.Link eventKey="third-secondary">Main <br className="d-sm-none"></br> Features</Nav.Link>
                                            </Nav.Item>
                                            
                                        </Nav>
                                        <TabContent>
                                            <TabPane eventKey="first-secondary"> 
                                                <Row>
                                                <a href="https://www.figma.com/proto/AJKN75On4lXVA2NSn2CN5G/Iter-2?page-id=1%3A4&node-id=326%3A3129&viewport=123%2C-273%2C0.15&scaling=scale-down&starting-point-node-id=326%3A3129"><img className="iRec " src={recycleLogo} alt="irecycle"></img></a>
                                                </Row>
                                                <Row>
                                                        <img
                                                        className="recycle pb-2 mx-auto"
                                                        src={iRecycleCompile}
                                                        alt="First slide"
                                                        />
                                                    
                                                        <h5 className="px-5 pb-5 mx-5 text-justify mx-auto">iRecycle is a mobile application aimed at motivating teenagers to recycle through technology, while providing rewards to further motivate them.</h5>
                                                    
                                                </Row>
                                            </TabPane>
                                            <TabPane eventKey="second-secondary"> 
                                                <Row>
                                                <a href="https://www.figma.com/proto/AJKN75On4lXVA2NSn2CN5G/Iter-2?page-id=1%3A4&node-id=326%3A3129&viewport=123%2C-273%2C0.15&scaling=scale-down&starting-point-node-id=326%3A3129"><img className="iRec" src={recycleLogo} alt="irecycle"></img></a>
                                                </Row>
                                                <img className="w-75 mb-5" src={color2} alt="color"/>
                                            </TabPane>
                                            <TabPane eventKey="third-secondary"> 
                                                <Row>
                                                <a href="https://www.figma.com/proto/AJKN75On4lXVA2NSn2CN5G/Iter-2?page-id=1%3A4&node-id=326%3A3129&viewport=123%2C-273%2C0.15&scaling=scale-down&starting-point-node-id=326%3A3129"><img className="iRec" src={recycleLogo} alt="irecycle"></img></a>
                                                </Row>
                                                <Carousel className="my-4" variant="dark"  >
                                                    <Carousel.Item interval={3000}>
                                                        <img
                                                        className="w-75 pb-3"
                                                        src={iRecycleFeature1}
                                                        alt="First slide"
                                                        />
                                                        
                                                    </Carousel.Item>
                                                    <Carousel.Item interval={3000}>                                                        
                                                        <img className="w-75 pb-3" src={iRecycleFeature2} alt="secondslide"></img>
                                                    </Carousel.Item>
                                                    </Carousel>
                                            </TabPane>
                                        </TabContent>
                                    </TabContainer> 
                                </TabPane>
                            </TabContent>
                        </TabContainer>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
    
}
