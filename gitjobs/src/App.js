import React from "react";
import { useState } from 'react';
import useFetchJobs from "./useFetchJobs";
import {Container} from 'react-bootstrap'
import Job from './Job'

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs , loading , error} =useFetchJobs()

  return (
    <Container>
      {loading && <h1>loading....</h1>}
      {error && <h1>Error.Try Refreshing</h1>}
      <h1>{jobs.length}</h1>

    </Container>
  );
}

export default App;
