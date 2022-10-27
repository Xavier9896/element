/*
 * @Date: 2022-10-27 12:03:34
 * @LastEditors: 吴迪
 * @LastEditTime: 2022-10-27 12:04:30
 * @FilePath: \km-element\packages\virtual-table-column\index.js
 */
import { UTableColumn } from "umy-table";
const VirtualTableColumn = UTableColumn;
VirtualTableColumn.name = "ElVirtualTableColumn";

/* istanbul ignore next */
VirtualTableColumn.install = function(Vue) {
  Vue.component(VirtualTableColumn.name, VirtualTableColumn);
};

export default VirtualTableColumn;
