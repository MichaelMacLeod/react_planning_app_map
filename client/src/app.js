var React = require('react');
var ReactDOM = require('react-dom');
var AllPlans = require('./components/AllPlans.jsx')

window.onload = function(){
  ReactDOM.render(
    <AllPlans></AllPlans>,
    document.getElementById('app')
  );
}
