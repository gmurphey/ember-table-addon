import Ember from 'ember';
import TableCell from '../views/table-cell';

export default TableCell.extend({
  templateName: 'financial-table/financial-table-tree-cell',
  classNames: 'ember-table-table-tree-cell',

  paddingStyle: Ember.computed(function() {
    return 'padding-left:' + (this.get('row.indentation')) + 'px;';
  }).property('row.indentation')
});
