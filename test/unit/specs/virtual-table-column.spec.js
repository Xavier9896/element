import { createTest, destroyVM } from '../util';
import VirtualTableColumn from 'packages/virtual-table-column';

describe('VirtualTableColumn', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(VirtualTableColumn, true);
    expect(vm.$el).to.exist;
  });
});

