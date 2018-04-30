import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Home = () => <h2>Home</h2>;
const Projects = () => <h2>Projects</h2>;
const About = () => <h2>About</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact={true} path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
