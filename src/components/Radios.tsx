import { Card, CardBody, CardImg, CardText } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

const Radios = () => {
  return (
    <div className="container my-4">
      <h4>
        Nuovi episodi radio <ChevronRight />{" "}
      </h4>
      <div className="d-flex border-0 justify-content-between">
        <Card className=" bg-transparent myCard p-2">
          <CardBody className=" bg-transparent p-0">
            <CardImg
              className="imgCard"
              src="../src/assets/images/2a.png"
            ></CardImg>
            <CardText className="text-secondary">Pròlogo con Abuelo</CardText>
          </CardBody>
        </Card>
        <Card className=" bg-transparent myCard p-2">
          <CardBody className="p-0">
            <CardImg
              className="imgCard"
              src="../src/assets/images/2b.png"
            ></CardImg>
            <CardText className="text-secondary">Two Enderer</CardText>
          </CardBody>
        </Card>
        <Card className=" bg-transparent myCard p-2">
          <CardBody className=" bg-transparent p-0">
            <CardImg
              className="imgCard"
              src="../src/assets/images/2c.png"
            ></CardImg>
            <CardText className="text-secondary">
              Micheal Bublé & Carly Pearce
            </CardText>
          </CardBody>
        </Card>
        <Card className=" bg-transparent myCard2 p-2">
          <CardBody className=" bg-transparent p-0">
            <CardImg
              className="imgCard"
              src="../src/assets/images/2d.png"
            ></CardImg>
            <CardText className="text-secondary">
              Micheal Bublé & Carly Pearce
            </CardText>
          </CardBody>
        </Card>
        <Card className=" bg-transparent myCard2 p-2">
          <CardBody className=" bg-transparent p-0">
            <CardImg
              className="imgCard"
              src="../src/assets/images/2e.png"
            ></CardImg>
            <CardText className="text-secondary">
              Micheal Bublé & Carly Pearce
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default Radios;
