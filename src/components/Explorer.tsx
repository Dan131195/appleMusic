import { Col, Container, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

const Explorer = () => {
  return (
    <Container>
      <h4 className="mb-3">Altro da esplorare</h4>
      <Row>
        <Col xs={12} md={4} className="mb-3 myCard">
          <div className="d-flex justify-content-between align-items-center bg-dark rounded-2 p-2">
            <p className="text-danger m-0">Esplora per genere</p>
            <ChevronRight color="red" />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3 myCard">
          <div className="d-flex justify-content-between align-items-center bg-dark rounded-2 p-2">
            <p className="text-danger m-0">Decenni</p>
            <ChevronRight color="red" />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3 myCard">
          <div className="d-flex justify-content-between align-items-center bg-dark rounded-2 p-2">
            <p className="text-danger m-0">Attività e stati d'animo</p>
            <ChevronRight color="red" />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3 myCard">
          <div className="d-flex justify-content-between align-items-center bg-dark rounded-2 p-2">
            <p className="text-danger m-0">Worldwide</p>
            <ChevronRight color="red" />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3 myCard">
          <div className="d-flex justify-content-between align-items-center bg-dark rounded-2 p-2">
            <p className="text-danger m-0">Classifiche</p>
            <ChevronRight color="red" />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3 myCard">
          <div className="d-flex justify-content-between align-items-center bg-dark rounded-2 p-2">
            <p className="text-danger m-0">Audio Spaziale</p>
            <ChevronRight color="red" />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3 myCard">
          <div className="d-flex justify-content-between align-items-center bg-dark rounded-2 p-2">
            <p className="text-danger m-0">Video musicali</p>
            <ChevronRight color="red" />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3 myCard">
          <div className="d-flex justify-content-between align-items-center bg-dark rounded-2 p-2">
            <p className="text-danger m-0">Nuovi artisti</p>
            <ChevronRight color="red" />
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3 myCard">
          <div className="d-flex justify-content-between align-items-center bg-dark rounded-2 p-2">
            <p className="text-danger m-0">Hit del passato</p>
            <ChevronRight color="red" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Explorer;
