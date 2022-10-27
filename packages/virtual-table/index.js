import {UTable} from "umy-table";
const VirtualTable = UTable
VirtualTable.name = 'ElVirtualTable'
/* istanbul ignore next */
VirtualTable.install = function(Vue) {
  Vue.component(VirtualTable.name, VirtualTable);
};

export default VirtualTable;
