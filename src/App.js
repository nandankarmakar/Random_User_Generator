import React, { useState, useEffect } from "react";

import { Container, Row, Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Axios from "axios";
import Cards from "./Cards";

function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);

    const details = data.results[0];

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className="p-4 bg-primary App">
    <div className='display-4 text-center text-white'>Refresh this page to get a new User</div>
      <Row>
        <Col className="offset ml-4 mt-4">
          <Cards details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
