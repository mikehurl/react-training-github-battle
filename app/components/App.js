var Battle = require('./Battle');
var Home = require('./Home');
var Nav = require('./Nav');
var Popular = require('./Popular');
var Results = require('./Results');
var React = require('react');
var ReactRouter = require('react-router-dom');

var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/battle" component={Battle} />
          <Route path="/battle/results" component={Results} />
          <Route path="/popular" component={Popular} />
          <Route
            render={function () {
              return <p>404</p>;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

module.exports = App;
