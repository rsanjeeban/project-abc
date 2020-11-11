import * as React from "react";
import { connect } from "react-redux";
import {
  Drawer,
  DrawerContent,
  DrawerItem,
} from "@progress/kendo-react-layout";
import { Switch } from "@progress/kendo-react-inputs";

function DrawerComponent(props) {
  const items = [{ text: "Data" }];

  const [expanded, setExpanded] = React.useState(true);
  const [mode, setMode] = React.useState(true);
  const [selectedId, setSelectedId] = React.useState(
    items.findIndex((x) => x.selected === true)
  );

  let expandMode = mode ? "overlay" : "push";
  let animation = { duration: 400 };

  const handleClick = () => {
    // setExpanded((prevState) => !prevState);
    props.setExpandStatus(!props.expanded);
  };
  const handleChange = () => {
    setMode((prevState) => !prevState);
  };
  const handleSelect = (ev) => {
    setSelectedId(ev.itemIndex);
    // setExpanded(false);
  };

  const canRenderData = () => {
    if (props.order_view != null) {
      return true;
    } else {
      return false;
    }
  };
  const customItem = (properties) => {
    return (
      <DrawerItem {...properties}>
        <div className="orderData">
          <h1>{properties.text}</h1>
          <div className="order_label">Order Status:</div>
          <div className="order_value">
            {props.order_view != null
              ? props.order_view.orderStatus
                ? props.order_view.orderStatus
                : "-"
              : ""}
          </div>

          <div className="order_label">Contact Person:</div>
          <div className="order_value">
            {props.order_view != null
              ? (props.order_view.contactPerson.contactPersonTitle != null
                  ? props.order_view.contactPerson.contactPersonTitle + ". "
                  : "") + props.order_view.contactPerson.contactPersonName
              : "'"}
          </div>

          <div className="order_label">Orderer :</div>
          <div className="order_value">
            {props.order_view != null
              ? (props.order_view.contactPersonOrdererTitle != null
                  ? props.order_view.contactPersonOrdererTitle
                      .contactPersonOrdererTitle + ". "
                  : "") +
                props.order_view.contactPersonOrderer.contactPersonOrdererName
              : "'"}
          </div>

          <div className="order_label">From:</div>
          <div className="order_value">
            {props.order_view != null ? props.order_view.datetimeFrom : ""}
          </div>

          <div className="order_label">To</div>
          <div className="order_value">
            {props.order_view != null ? props.order_view.datetimeTo : ""}
          </div>
        </div>

        {/* <div>
            {props.order_view != null
              ? props.order_view.contactPerson.contactPersonLastName
              : ""}
          </div>
          <div>
            {props.order_view != null
              ? props.order_view.contactPerson.contactPersonName
              : ""}
          </div>
          <div>
            {props.order_view != null
              ? props.order_view.contactPerson.contactPersonTitle
              : ""}
          </div> */}
        {/* <div>
            {props.order_view.datetimeFrom ? props.order_view.datetimeFrom : ""}
          </div>
          <div>
            {props.order_view.datetimeTo ? props.order_view.datetimeTo : ""}
          </div>
          <div>
            {props.order_view.orderNumber ? props.order_view.orderNumber : ""}
          </div>
          <div>
            {props.order_view.orderStatus ? props.order_view.orderStatus : ""}
          </div> */}
      </DrawerItem>
    );
  };
  const properties = {
    expanded: props.expanded,
    position: "end",
    mode: expandMode,
    animation: animation,
    item: customItem,
    items: items.map((item, index) => ({
      ...item,
    })),

    onOverlayClick: handleClick,
    onSelect: handleSelect,
  };

  return (
    <div>
      <Drawer {...properties}>
        {/* <DrawerContent> */}
        {/* <div className="k-form">
            <div className="k-form-field">
              <button className="k-button" onClick={handleClick}>
                Toggle the Drawer state
              </button>
            </div>
            <div className="k-form-field">
              <label htmlFor={"expandedSwitch"}>
                Switch Drawer expand mode &nbsp;
              </label>
              <Switch
                checked={mode}
                onChange={handleChange}
                id={"expandedSwitch"}
              />
            </div>
            <div className="k-form-field">
              <p>
                Current drawer mode is <b>{expandMode}</b>
              </p>
            </div>
          </div> */}
        {/* </DrawerContent> */}
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  debugger;
  return {
    order_view: state.order.order_view,
  };
};

export default connect(mapStateToProps)(DrawerComponent);
