import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";

import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { Switch } from "@progress/kendo-react-inputs";
import { Link } from "react-router-dom";
import history from "../../utils/history";
import Orders from "../Orders/Index";

const items = [
  { text: "Home", icon: "k-i-home", selected: true, route: "/" },
  { separator: true },
  { text: "Orders", icon: "k-i-inbox", route: "/orders" },
  { text: "About Us", icon: "k-i-calendar", route: "/aboutus" },
  { separator: true },
];

const Sidebar = (props) => {
  const [selectedId, setSelectedId] = React.useState(
    items.findIndex((x) => x.selected === true)
  );

  const handleSelect = (e) => {
    setSelectedId(e.itemIndex);
    history.push(e.itemTarget.props.route);
  };

  const handleClick = () => {};

  const properties = {
    expanded: props.sidebar_status,
    mode: "push",
    items: items.map((item, index) => ({
      ...item,
      selected: index === selectedId,
    })),

    onSelect: handleSelect,
  };

  return (
    <div>
      <Drawer {...properties}>
        <DrawerContent>
          <Orders />
        </DrawerContent>
      </Drawer>
      <style>
        {`my-app {
                    padding: 0;
                }
                .k-drawer-content { padding: 20px; }

                .k-drawer-container {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                }
                .k-drawer-item {
                    user-select: none;
                }`}
      </style>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sidebar_status: state.masterData.sidebar_status,
});
export default connect(mapStateToProps)(Sidebar);
