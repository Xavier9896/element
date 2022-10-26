import VirtualTableColumn from '../table/src/table-column';

/* istanbul ignore next */
VirtualTableColumn.install = function(Vue) {
  Vue.component(VirtualTableColumn.name, VirtualTableColumn);
};

export default VirtualTableColumn;
