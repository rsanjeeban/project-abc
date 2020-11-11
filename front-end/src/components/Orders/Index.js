import { Component } from "react";
import { connect } from "react-redux";
import Table from "../Base/Table";
import Drawer from "../Base/Drawer";
import api from "../../services/api";

class Orders extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
  }
  componentDidMount() {
    this.props.fetchOrders();
  }

  setExpandStatus = (status) => {
    this.setState({ expanded: status });
  };

  render() {
    return (
      <div>
        <Table
          setExpandStatus={this.setExpandStatus}
          data={this.props.orders}
        />
        <Drawer
          setExpandStatus={this.setExpandStatus}
          expanded={this.state.expanded}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders_list,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    fetchOrders: () => {
      api.get("/order").then((res) => {
        if (res.status == 200) {
          dispatch({ type: "Orders/fetchOrder", data: res.data });
        }
      });
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(Orders);
