import { UTableColumn } from "umy-table";
const VirtualTableColumn = UTableColumn;
VirtualTableColumn.name = "ElVirtualTableColumn";

/* istanbul ignore next */
VirtualTableColumn.install = function(Vue) {
	Vue.component(VirtualTableColumn.name, VirtualTableColumn);
};

export default VirtualTableColumn;
