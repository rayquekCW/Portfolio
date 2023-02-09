import { Container,Row,Col,Nav, TabContainer, TabContent, TabPane } from "react-bootstrap"
import PythonLogo  from "../assets/img/python.svg";
import CSSLogo  from "../assets/img/css.svg";
import HTMLLogo  from "../assets/img/html.svg";
import JavascriptLogo  from "../assets/img/javascript.svg";
import VueLogo  from "../assets/img/vue.svg";
import SASSLogo  from "../assets/img/sass.svg";
import PHPLogo  from "../assets/img/php.svg";
import JavaLogo  from "../assets/img/java.svg";
import ReactLogo  from "../assets/img/react.svg";
import BootstrapLogo  from "../assets/img/bootstrap.svg";
import FigmaLogo  from "../assets/img/figma.svg";
import GithubLogo  from "../assets/img/github.svg";
import SQLLogo  from "../assets/img/sql.svg";

export const Skills =() =>{


      return(
        <section className="skill" id ="skills">
            <Container>
                <Row > 
                  <h1 className="text-center">SKILLS</h1>
                </Row>
                <Row>
                    <Col>
                        <div className="skill-bx shadow">
                            <TabContainer id="skills-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                
                                <Nav.Item className="hide d-block d-sm-none">
                                    <Nav.Link  eventKey="first">Languages</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="hide d-block d-sm-none">
                                    <Nav.Link eventKey="second">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="hide d-block d-sm-none">
                                    <Nav.Link  eventKey="third">Tools</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className=" d-none d-sm-block">
                                    <Nav.Link  eventKey="first">Languages</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className=" d-none d-sm-block">
                                    <Nav.Link  eventKey="second">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className=" d-none d-sm-block">
                                    <Nav.Link  eventKey="third">Tools</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <Row>
                                        <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={CSSLogo} alt="css"></img>
                                          <h5 className="py-3">CSS</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={HTMLLogo} alt="HTML"></img>
                                          <h5 className="py-3">HTML</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={JavascriptLogo} alt="javascript"></img>
                                          <h5 className="pb-3 pt-2">Javascript</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25 py-3" src={PythonLogo} alt="python"></img>
                                          <h5 className="py-3">Python</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25 py-3" src={PHPLogo} alt="php"></img>
                                          <h5 className="py-3">PHP</h5>
                                      </Col>
                                      <Col  className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={JavaLogo} alt="java"></img>
                                          <h5 className="py-3">Java</h5>
                                      </Col>
                                      <Col  className="my-auto mx-auto" sm={6} md={4}>
                                          <img className="w-25 py-3" src={SQLLogo} alt="sql"></img>
                                          <h5 className="py-3">SQL</h5>
                                      </Col>
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="second">
                                  <Row>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25 py-1" src={VueLogo} alt="vue"></img>
                                          <h5 className="pb-3">Vue</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={ReactLogo} alt="react"></img>
                                          <h5 className="py-3">React</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={BootstrapLogo} alt="bootstrap"></img>
                                          <h5 className="py-3">Bootstrap</h5>
                                      </Col>
                                  </Row>
                                </TabPane>
                                <TabPane eventKey="third">
                                  <Row>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25 py-4" src={SASSLogo} alt="sass"></img>
                                          <h5 className="pb-3">SASS</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={FigmaLogo} alt="figma"></img>
                                          <h5 className="py-3">Figma</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={GithubLogo} alt="github"></img>
                                          <h5 className="py-3">Github</h5>
                                      </Col>
                                  </Row>
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