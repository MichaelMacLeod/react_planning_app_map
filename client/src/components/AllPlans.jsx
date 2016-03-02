var React = require('react');

var AllPlans = React.createClass({

  getInitialState:function(){
    return { plans:[], currentPlan:null }
  }, 

  //Now get info from API by making a request to the REST server: 

  componentDidMount:function(){
    var url = "https://github.com/MichaelMacLeod/react_planning_app_map/blob/master/data.json"
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState( { plans: data } )
    }.bind(this)
    request.send(null);
  },

  render: function(){
    return(
      <div>
        <h4> All Plans </h4>
      </div>
      )
  }
})

module.exports = AllPlans;