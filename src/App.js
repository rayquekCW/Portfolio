import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      {loading ? (
        <Container>
          <Row>
            <Col className="pac mx-auto">
              <PacmanLoader
                className="my-auto"
                color={"#424242"}
                size={150}
                loading={loading}
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <span>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
        </span>
      )}
    </div>
  );
}

export default App;
