import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Types } from "../types/types";
import { useEffect, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";

const mySong: Types[] = [];

const Releases = () => {
  const [songs, setSongs] = useState<Types[]>([]);
  const [error, setError] = useState(true);

  const getSong = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (response.ok) {
        const data = await response.json();
        setSongs(data.data);
        console.log(songs);
        // mySong.push(songs);
        setError(false);
      } else {
        throw new Error("Errore nel recupero dati..");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getSong();
  }, []);

  return (
    <>
      {console.log("songs:", mySong)}
      <Container id="myContainer">
        <h4>
          Nuove uscite <ChevronRight />
        </h4>

        {songs && (
          <Row>
            {songs.map((result) => (
              <Col xs={4} md={3} key={result.id}>
                <Card className=" bg-transparent myCard mb-5">
                  <CardBody className=" bg-transparent p-0">
                    <CardImg
                      className="imgCard"
                      src={result.artist.picture_xl}
                    ></CardImg>
                    <CardText className="text-white releasesParag m-0">
                      {result.title}{" "}
                    </CardText>
                    <CardText className="text-white releasesParag">
                      {result.artist.name}{" "}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};
export default Releases;
