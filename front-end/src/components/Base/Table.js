import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import {
  Grid,
  GridColumn,
  GridDetailRow,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import orderStatusFilterCell from "../Base/orderStatusFilterCell";
import {
  IntlProvider,
  load,
  LocalizationProvider,
  loadMessages,
  IntlService,
} from "@progress/kendo-react-intl";

import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";
import { filterBy } from "@progress/kendo-data-query";

import numbers from "cldr-numbers-full/main/es/numbers.json";
import currencies from "cldr-numbers-full/main/es/currencies.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";

import esMessages from "./es.json";
import orders from "./orders.json";
import { process } from "@progress/kendo-data-query";

load(
  likelySubtags,
  currencyData,
  weekData,
  numbers,
  currencies,
  caGregorian,
  dateFields,
  timeZoneNames
);

loadMessages(esMessages, "es-ES");

const DATE_FORMAT = "yyyy-mm-dd hh:mm:ss.SSS";
const intl = new IntlService();

// orders.forEach((o) => {
//   o.orderDate = intl.parseDate(o.orderDate, DATE_FORMAT);
//   o.shippedDate =
//     o.shippedDate === "NULL"
//       ? undefined
//       : intl.parseDate(o.shippedDate, DATE_FORMAT);
// });

class DetailComponent extends GridDetailRow {
  render() {
    const dataItem = this.props.dataItem;
    return <div></div>;
  }
}

const orderStatusList = ["submitted", "accepted", "processing", "cancelled"];

const orderStatusFilter = orderStatusFilterCell(
  orderStatusList,
  "Select category"
);
class Table extends React.Component {
  locales = [
    {
      language: "en-US",
      locale: "en",
    },
    {
      language: "es-ES",
      locale: "es",
    },
  ];
  constructor(props) {
    super(props);
    const dataState = {
      skip: 0,
      take: 20,
      sort: [{ field: "orderDate", dir: "desc" }],
      group: [{ field: "customerID" }],
    };
    debugger;
    this.state = {
      dataResult: process(orders, dataState),
      dataState: dataState,
      currentLocale: this.locales[0],
    };
  }

  dataStateChange = (event) => {
    this.setState({
      dataResult: process(orders, event.dataState),
      dataState: event.dataState,
    });
  };

  expandChange = (event) => {
    // const isExpanded =
    //   event.dataItem.expanded === undefined
    //     ? event.dataItem.aggregates
    //     : event.dataItem.expanded;
    // event.dataItem.expanded = !isExpanded;

    this.setState({ ...this.state });
    this.props.setDrawerData(event.dataItem);
    this.props.setExpandStatus(true);
  };

  state = {
    filter: {
      logic: "and",
      filters: [{ field: "ProductName", operator: "contains", value: "" }],
    },
  };

  _pdfExport;
  exportExcel = () => {
    this._export.save();
  };

  _export;
  exportPDF = () => {
    this._pdfExport.save();
  };

  render() {
    return (
      <LocalizationProvider language={this.state.currentLocale.language}>
        <IntlProvider locale={this.state.currentLocale.locale}>
          <div>
            <ExcelExport
              data={orders}
              ref={(exporter) => {
                this._export = exporter;
              }}
            >
              <Grid
                style={{ height: "700px" }}
                sortable
                filterable
                reorderable
                pageable={{ buttonCount: 4, pageSizes: true }}
                data={filterBy(this.props.data, this.state.filter)}
                {...this.state.dataState}
                onDataStateChange={this.dataStateChange}
                detail={DetailComponent}
                expandField="false"
                onExpandChange={this.expandChange}
                filter={this.state.filter}
                onFilterChange={(e) => {
                  this.setState({
                    filter: e.filter,
                  });
                }}
              >
                <GridToolbar>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    title="Export to Excel"
                    className="k-button k-primary"
                    onClick={this.exportExcel}
                  >
                    Export to Excel
                  </button>
                  &nbsp;
                  <button
                    className="k-button k-primary"
                    onClick={this.exportPDF}
                  >
                    Export to PDF
                  </button>
                </GridToolbar>
                <GridColumn
                  field="orderStatus"
                  filter="numeric"
                  filterable
                  filterCell={orderStatusFilter}
                />
                <GridColumn filterable field="orderNumber" />
                <GridColumn
                  filterable
                  field="contactPerson.contactPersonName"
                  title="Contact Person"
                />
                <GridColumn
                  filterable
                  field="contactPersonOrderer.contactPersonOrdererName"
                  title="Orderer"
                />
                <GridColumn
                  filterable
                  field="datetimeFrom"
                  title="From"
                  filter="date"
                />
                <GridColumn
                  filterable
                  field="datetimeTo"
                  title="To"
                  filter="date"
                  format="{0:D}"
                />
              </Grid>
            </ExcelExport>
            <GridPDFExport
              ref={(element) => {
                this._pdfExport = element;
              }}
              margin="5cm"
            >
              {
                <Grid
                  data={process(this.props.data, {
                    skip: this.state.dataState.skip,
                    take: this.state.dataState.take,
                  })}
                >
                  <GridColumn field="orderStatus" width="200px" />
                  <GridColumn field="orderNumber" width="300px" />
                  <GridColumn field="orderNumber" width="280px" />
                  <GridColumn
                    field="datetimeFrom"
                    filter="date"
                    width="200px"
                  />
                  <GridColumn
                    field="datetimeTo"
                    filter="date"
                    format="{0:D}"
                    width="300px"
                  />
                </Grid>
              }
            </GridPDFExport>
          </div>
        </IntlProvider>
      </LocalizationProvider>
    );
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    setDrawerData: (data) => {
      dispatch({ type: "order/SetDrawerOrderData", data: data });
    },
  };
};

export default connect(null, mapActionsToProps)(Table);
