import virtualTableColumn from '../table/src/table-column';

/* istanbul ignore next */
virtualTableColumn.install = function(Vue) {
  Vue.component(virtualTableColumn.name, virtualTableColumn);
};

export default virtualTableColumn;
