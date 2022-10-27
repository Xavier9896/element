import { createTest, destroyVM } from '../util';
import VirtualTable from 'packages/virtual-table';

describe('VirtualTable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(VirtualTable, true);
    expect(vm.$el).to.exist;
  });
});

