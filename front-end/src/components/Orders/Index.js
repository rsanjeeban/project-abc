import { Component } from "react";
import { connect } from "react-redux";
import Table from "../Base/Table";

import api from "../../services/api";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    return (
      <div>
        Orders
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar_status: state.masterData.sidebar_status,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    fetchOrders: () => {
      api.post("/order").then((res) => {
        dispatch({ type: "Orders/fetchOrder", data: res.data });
      });
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(Orders);
