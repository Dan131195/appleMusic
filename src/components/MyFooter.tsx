import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container className="mx-3">
      <div className="my-2">
        <span className="text-white me-2">Italia</span>
        <span>|</span>
        <span className="text-secondary ms-2">English (UK)</span>
      </div>
      <div className="my-2">
        <span className="text-secondary me-2">
          Copyright &copy; {new Date().getFullYear()}
        </span>
        <span>Apple Inc.</span>
        <span className="text-secondary ms-2">Tutti i diritti riservati</span>
      </div>
      <div className="my-3">
        <span>Condizioni dei servizi internet</span>
        <span className="mx-4 text-secondary">|</span>
        <span>Apple Music e privacy</span>
        <span className="mx-4 text-secondary">|</span>
        <span> Avviso sui cookie</span>
        <span className="mx-4 text-secondary">|</span>
        <span>Supporto</span>
        <span className="mx-4 text-secondary">|</span>
        <span>Feedback</span>
      </div>
    </Container>
  );
};
export default MyFooter;
