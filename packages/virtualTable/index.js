/*
 * @Date: 2022-10-26 10:19:55
 * @LastEditors: 吴迪
 * @LastEditTime: 2022-10-26 10:28:50
 * @FilePath: \km-element\packages\virtualTable\index.js
 */
import './revise-el-table-mixins'
import virtualTable from './src/u-table';

virtualTable.install = function(Vue) {
  Vue.component(virtualTable.name, virtualTable);
};

export default virtualTable;
