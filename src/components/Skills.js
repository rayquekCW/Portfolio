import {
  Container,
  Row,
  Col,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <h1 className="text-center">SKILLS</h1>
        </Row>
        <Row>
          <Col>
            <div className="skill-bx shadow">
              <TabContainer id="skills-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item className="hide d-block d-sm-none">
                    <Nav.Link eventKey="first">Languages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="hide d-block d-sm-none">
                    <Nav.Link eventKey="second">Frameworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="hide d-block d-sm-none">
                    <Nav.Link eventKey="third">Databases</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="hide d-block d-sm-none">
                    <Nav.Link eventKey="fourth">Tools</Nav.Link>
                  </Nav.Item>

                  <Nav.Item className=" d-none d-sm-block">
                    <Nav.Link eventKey="first">Languages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className=" d-none d-sm-block">
                    <Nav.Link eventKey="second">Frameworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className=" d-none d-sm-block">
                    <Nav.Link eventKey="third">Databases</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className=" d-none d-sm-block">
                    <Nav.Link eventKey="fourth">Tools</Nav.Link>
                  </Nav.Item>
                </Nav>
                <TabContent>
                  <TabPane eventKey="first">
                    <Row>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-css3-plain colored"></i>
                        <h5 className="my-2">CSS</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-html5-plain colored"></i>
                        <h5 className="my-2">HTML</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-javascript-plain colored"></i>
                        <h5 className="my-2">Javascript</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-python-plain colored"></i>
                        <h5 className="my-2">Python</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-php-plain"></i>
                        <h5 className="my-2">PHP</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-java-plain colored"></i>
                        <h5 className="my-2">Java</h5>
                      </Col>
                      <Col className="my-auto mx-auto" sm={6} md={4}>
                        <i class="devicon-azuresqldatabase-plain"></i>
                        <h5 className="my-2">SQL</h5>
                      </Col>
                      <Col className="my-auto mx-auto" sm={6} md={4}>
                        <i class="devicon-spring-original colored"></i>
                        <h5 className="my-2">Spring Boot</h5>
                      </Col>
                      <Col className="my-auto mx-auto" sm={6} md={4}>
                        <i class="devicon-kotlin-plain"></i>
                        <h5 className="my-2">Kotlin</h5>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane eventKey="second">
                    <Row>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-angularjs-plain colored"></i>
                        <h5 className="my-2">Angular</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-vuejs-plain colored"></i>
                        <h5 className="my-2">Vue</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-react-original colored"></i>
                        <h5 className="my-2">React</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-bootstrap-plain colored"></i>
                        <h5 className="my-2">Bootstrap</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-express-original colored"></i>
                        <h5 className="my-2">Express JS</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-nodejs-plain colored"></i>
                        <h5 className="my-2">Node JS</h5>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane eventKey="third">
                    <Row>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-firebase-plain colored"></i>
                        <h5 className="my-2">Firebase</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-mongodb-plain colored"></i>
                        <h5 className="my-2">MongoDB</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-mysql-original colored"></i>
                        <h5 className="my-2">MySQL</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-sqlite-plain colored"></i>
                        <h5 className="my-2">SQLite</h5>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane eventKey="fourth">
                    <Row>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-sass-original colored"></i>
                        <h5 className="my-2">SASS</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-figma-plain colored"></i>
                        <h5 className="my-2">Figma</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-github-original colored"></i>
                        <h5 className="my-2">Github</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-git-plain colored"></i>
                        <h5 className="my-2">Git</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
                        <h5 className="my-2">AWS</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-docker-plain colored"></i>
                        <h5 className="my-2">Docker</h5>
                      </Col>
                      <Col className="my-auto" sm={6} md={4}>
                        <i class="devicon-jira-plain colored"></i>
                        <h5 className="my-2">Jira</h5>
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
  );
};
