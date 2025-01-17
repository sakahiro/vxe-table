export default {
  vxe: {
    error: {
      groupFixed: 'If grouping headers are used, fixed columns must be on the left and right sides.',
      groupMouseRange: 'Grouping headers and "{{0}}" cannot be used at the same time, which may cause errors.',
      cellEditRender: 'The renderer "cell-render" and "edit-render" cannot be used together.',
      treeFixedExpand: 'The fixed column of the tree structure conflicts with the expanded row.',
      treeLineExpand: 'The node line of tree structure conflicts with the expanded line.',
      scrollXNotGroup: 'Horizontal Virtual scrolling does not support grouping headers',
      unableInsert: 'Unable to insert to the specified location.',
      useErr: 'Error installing "{{0}}" module, possibly in the wrong order, dependent modules need to be installed before Table.',
      barUnableLink: 'Toolbar cannot associate table.',
      toolbarId: 'Toolbar must have a unique "id"',
      expandContent: 'Expand row slot should be "content", please check if it is correct.',
      reqModule: 'require "{{0}}" module.',
      reqProp: 'Missing the necessary "{{0}}" parameter, which can cause error.',
      emptyProp: 'The property "{{0}}" is not allowed to be empty.',
      errProp: 'Unsupported parameter "{{0}}", possibly "{{1}}".',
      notFunc: 'method "{{0}}" not exist.',
      notSlot: 'slot "{{0}}" does not exist',
      noTree: 'The tree structure does not support "{{0}}".',
      delFunc: 'The function "{{0}}" is deprecated, please use "{{1}}".',
      delProp: 'The property "{{0}}" is deprecated, please use "{{1}}".',
      delEvent: 'The event "{{0}}" is deprecated, please use "{{1}}"',
      removeProp: 'The property "{{0}}" is deprecated and is not recommended, which may cause error.',
      notType: 'Unsupported file types "{{0}}"',
      notExp: 'The browser does not support import / export.',
      impFields: 'Import failed, please check that the field name and data format are correct.',
      treeNotImp: 'Tree table does not support import.',
      typeErr: 'type error for "{{0}}". Expected {{1}}, got value {{2}}.'
    },
    table: {
      emptyText: 'No Data',
      allTitle: 'Select all / cancel',
      seqTitle: '#',
      confirmFilter: 'Confirm',
      resetFilter: 'Reset',
      allFilter: 'All',
      sortAsc: 'Ascending: lowest to highest',
      sortDesc: 'Descending: highest to lowest',
      filter: 'Enable filtering on selected columns',
      impSuccess: 'Successfully imported {{0}} records',
      expSuccess: 'Export success',
      expFilename: 'Export_{{0}}',
      expOriginFilename: 'Export_original_{{0}}',
      expSheetName: 'Sheet1'
    },
    grid: {
      selectOneRecord: 'Please choose at least one piece of record!',
      deleteSelectRecord: 'Are you sure you want to delete the selected record?',
      removeSelectRecord: 'Are you sure you want to remove the selected record?',
      dataUnchanged: 'Data unchanged! ',
      saveSuccess: 'save successfully.'
    },
    pager: {
      goto: 'Go to',
      pagesize: '{{0}}/page',
      total: 'Total {{0}} record',
      pageClassifier: '',
      prevPage: 'Previous page',
      nextPage: 'next page',
      prevJump: 'Jump previous page',
      nextJump: 'Jump next page'
    },
    alert: {
      title: 'Message notification'
    },
    button: {
      confirm: 'Confirm',
      cancel: 'Cancel'
    },
    import: {
      modes: {
        covering: '覆盖',
        insert: '新增'
      },
      impTitle: 'Import parameter settings',
      impFile: 'Filename',
      impSelect: 'Select file',
      impType: 'File type',
      impOpts: 'Import option',
      impConfirm: 'Import'
    },
    export: {
      types: {
        csv: 'CSV (Comma separated) (*.csv)',
        html: 'Web Page (*.html)',
        xml: 'XML Data(*.xml)',
        txt: 'Text (Tab delimited) (*.txt)',
        xlsx: 'Excel Workbook (*.xlsx)',
        pdf: 'PDF (*.pdf)'
      },
      modes: {
        current: 'Current data',
        selected: 'Selected Data',
        all: 'All data'
      },
      expTitle: 'Export parameter settings',
      expName: 'Filename',
      expNamePlaceholder: 'Please enter filename',
      expSheetName: 'Sheet name',
      expSheetNamePlaceholder: 'Please enter a sheet name',
      expType: 'Save the type',
      expMode: 'Data to export',
      expCurrentColumn: 'All the field',
      expColumn: 'The field to export',
      expOpts: 'Export option',
      expOptHeader: 'Header',
      expHeaderTitle: 'Need to export header',
      expOptFooter: 'Footer',
      expFooterTitle: 'Need to export footer',
      expOptOriginal: 'Original data',
      expOriginalTitle: 'Need to export original data? If it is checked, import to table is supported',
      expPrint: 'Print',
      expConfirm: 'Export'
    },
    modal: {
      zoomIn: 'Maximization',
      zoomOut: 'Downward reduction',
      close: 'Close'
    },
    form: {
      folding: 'Folding',
      unfolding: 'Unfolding'
    },
    toolbar: {
      import: 'Import data',
      export: 'Export data',
      refresh: 'Refresh',
      zoomIn: 'Full screen',
      zoomOut: 'Reduction',
      custom: 'Column settings',
      customAll: 'All',
      customConfirm: 'Confirm',
      customRestore: 'Restore'
    },
    input: {
      date: {
        m1: 'January',
        m2: 'February',
        m3: 'March',
        m4: 'April',
        m5: 'May',
        m6: 'June',
        m7: 'July',
        m8: 'August',
        m9: 'September',
        m10: 'October',
        m11: 'November',
        m12: 'December',
        today: 'Today',
        prevMonth: 'Previous Month',
        nextMonth: 'Next Month',
        monthLabel: '{{0}}',
        dayLabel: '{{1}} {{0}}',
        labelFormat: {
          date: 'dd/MM/yyyy',
          week: '[Week] WW, yyyy',
          month: 'MM/yyyy',
          year: 'yyyy'
        },
        weeks: {
          w: 'Week',
          w0: 'Sun',
          w1: 'Mon',
          w2: 'Tue',
          w3: 'Wed',
          w4: 'Thu',
          w5: 'Fri',
          w6: 'Sat'
        },
        months: {
          m0: 'Jan',
          m1: 'Feb',
          m2: 'Mar',
          m3: 'Apr',
          m4: 'May',
          m5: 'Jun',
          m6: 'Jul',
          m7: 'Aug',
          m8: 'Sep',
          m9: 'Oct',
          m10: 'Nov',
          m11: 'Dec'
        }
      }
    }
  }
}
