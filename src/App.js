import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PantallaInicio from './Componentes/Vistas/PantallaInicio';
import Juego from './Componentes/Vistas/JuegoIA';
import Juegoa from './Componentes/Vistas/Juego';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PantallaInicio} />
        <Route exact path="/Gato" component={Juego} />
        <Route exact path="/Gato2" component={Juegoa} />
      </Switch>
    </Router>
  );
}

export default App;
