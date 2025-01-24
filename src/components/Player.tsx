import { Container } from "react-bootstrap";
import {
  FastForwardFill,
  MusicNoteBeamed,
  PlayFill,
} from "react-bootstrap-icons";

const Player = () => {
  return (
    <>
      <Container className="music-player">
        <div className="track-icon">
          <MusicNoteBeamed />
        </div>
        <div className="controls">
          <button>
            <PlayFill />
          </button>
          <button>
            <FastForwardFill />
          </button>
        </div>
      </Container>
    </>
  );
};

export default Player;
