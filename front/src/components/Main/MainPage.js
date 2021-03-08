import React from 'react';
import { useHistory } from 'react-router-dom';
// import MainMap from '../Map/MainMap'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function MainPage(props) {
  const history = useHistory();


  const findButtonHandler = (event) => {
    event.preventDefault()
    history.push('/findroute')
  }

  const createButtonHandler = (event) => {
    event.preventDefault()
    history.push('/createtrip')
  }


  return (

    <Container>
      {/* <MainMap /> */}
      <div style={{ paddingTop: '100px' }}>
        <button onClick={findButtonHandler} type="button" name="find">Найти маршрут</button>
        <button onClick={createButtonHandler} type="button" name="create">Создать маршрут</button>
      </div>

    </Container>
  );
}

export default MainPage;
