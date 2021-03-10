import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar'
import Pagination from './Components/Pagination/Pagination'
import Table from './Components/Table/Table'
import Layout from './Components/Layout/Layout'
import { Container, Row, Col } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="themed-container" fluid={true}>
        <Navbar />
        <Container>
          <Table />
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}><Pagination /></Col>
          </Row>
            
        </Container>
      </Container>
    </div>
  );
}

export default App;
