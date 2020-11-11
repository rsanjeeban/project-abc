import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// KendoReact components
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";

import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";

// store
import store from "../../store/index";
import { CHANGE_SIDEBAR_STATUS } from "../../store/actions/index";
// Components
import UserIcon from "../Base/User";

class Header extends React.Component {
  menuBtnClick = () => {
    store.dispatch({ type: "master/ChangeSidebarStatus" });
  };

  render() {
    return (
      <div>
        <AppBar>
          <AppBarSection>
            <button
              onClick={this.menuBtnClick}
              className="k-button k-button-clear"
            >
              <span className="k-icon k-i-menu" />
            </button>
          </AppBarSection>
          <AppBarSpacer style={{ width: 4 }} />
          <AppBarSection>
            <h1 className="title">Back Office</h1>
          </AppBarSection>
          <AppBarSpacer style={{ width: 32 }} />
          <AppBarSection>
            <ul>
              <li>
                <span>
                  <Link to="/">Home</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/orders">Orders</Link>
                </span>
              </li>
            </ul>
          </AppBarSection>
          <AppBarSpacer />

          <UserIcon />
        </AppBar>
        <style>{`
                body {
                    background: #dfdfdf;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
               
                li {
                    margin: 0 10px;
                }
                li:hover {
                    cursor: pointer;
                    color: #84cef1;
                }
                .k-button {
                    padding: 0;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
                li a{
                  text-decoration:none;
                }
            `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar_status: state.masterData.sidebar_status,
  };
};

// const mapActionToProps = (dispatch) => {

// }

export default connect(mapStateToProps)(Header);
