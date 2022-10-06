import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, Toolbar, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { customersData, contextMenuItems, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  
  const toolbarOptions = ['Delete', 'Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Customers' />

      <GridComponent
        dataSource={customersData}
        allowPaging={true}
        allowSorting={true}
        width='auto'
        pageSettings={{ pageSize: 15, pageCount: 3 }}
        toolbar={toolbarOptions}
        enableStickyHeader={true}
        enableHover={true}
        contextMenuItems={contextMenuItems}
        allowExcelExport={true}
        allowPdfExport={true}
        editSettings={editing}
      >
        <ColumnsDirective>
          {
            customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))
          }
        </ColumnsDirective>
        <Inject services={[ Toolbar, Page, Sort, Resize, ContextMenu, Filter, ExcelExport, PdfExport, Edit ]} />
      </GridComponent>
    </div>
  )
}

export default Customers;