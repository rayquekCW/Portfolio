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
                                          <img className="w-25" src={CSSLogo}></img>
                                          <h5 className="py-3">CSS</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={HTMLLogo}></img>
                                          <h5 className="py-3">HTML</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={JavascriptLogo}></img>
                                          <h5 className="pb-3 pt-2">Javascript</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25 py-3" src={PythonLogo}></img>
                                          <h5 className="py-3">Python</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25 py-3" src={PHPLogo}></img>
                                          <h5 className="py-3">PHP</h5>
                                      </Col>
                                      <Col  className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={JavaLogo}></img>
                                          <h5 className="py-3">Java</h5>
                                      </Col>
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="second">
                                  <Row>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25 py-1" src={VueLogo}></img>
                                          <h5 className="pb-3">Vue</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={ReactLogo}></img>
                                          <h5 className="py-3">React</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={BootstrapLogo}></img>
                                          <h5 className="py-3">Bootstrap</h5>
                                      </Col>
                                  </Row>
                                </TabPane>
                                <TabPane eventKey="third">
                                  <Row>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25 py-4" src={SASSLogo}></img>
                                          <h5 className="pb-3">SASS</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={FigmaLogo}></img>
                                          <h5 className="py-3">Figma</h5>
                                      </Col>
                                      <Col className="my-auto" sm={6} md={4}>
                                          <img className="w-25" src={GithubLogo}></img>
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