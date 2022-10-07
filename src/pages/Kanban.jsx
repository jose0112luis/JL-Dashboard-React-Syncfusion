import React, { useState } from 'react';
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {

  const editTemplate = (props) => {
    return (<KanbanEditFormTemplate {...props} />);
  }

  const cardTooltipTemplate = (data) => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><b>Assignee:</b></td>
              <td>{ data.Assignee }</td>
            </tr>
            <tr>
              <td><b>Type:</b></td>
              <td>{ data.Type }</td>
            </tr>
            <tr>
              <td><b>Priority:</b></td>
              <td>{ data.Priority }</td>
            </tr>
            <tr>
              <td><b>Estimate:</b></td>
              <td>{ data.Estimate }</td>
            </tr>
            <tr>
              <td><b>RankId:</b></td>
              <td>{ data.RankId }</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // TODO: función para crear una nueva actividad
  // const addClick = () => {
  //   const cardIds = kanbanData.map((obj) => parseInt(obj.Id.replace('Task ', ''), 10));
  //   const cardCount = Math.max.apply(Math, cardIds) + 1;
  //   const cardDetails = { Id: "Task " + cardCount, Status: "Open", Priority: "Normal", Assignee: "Andrew Fuller", Estimate: 0, Tags: "", Summary: "" };
  //   kanbanData.openDialog('Add', cardDetails);
  //   console.log(cardCount);
  // }

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='App' title='Kanban' />

      {/* Botón agregar nueva actividad */}
      {/* <div className='mb-5 ml-3'>
        <button id='addNew' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addClick()}>Add New Card</button>
      </div> */}

      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        keyField='Status'
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id',
          tagsField: 'Tags',
          grabberField: 'Color',
          footerCssField: 'ClassName'
        }}
        dialogSettings={{
          template: (kanbanData) => editTemplate(kanbanData)
        }}
        //swimlaneSettings={{ keyField: 'Assignee' }}  //descomentar para agrupar tareas por encargado
        enableTooltip={true}
        tooltipTemplate={cardTooltipTemplate}
      >
        <ColumnsDirective>
          {
            kanbanGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))
          }
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

// Componente para editar una tarea/actividad
const KanbanEditFormTemplate = (props) => {

  const assigneeData = [
    'Nancy Davloio', 'Andrew Fuller', 'Janet Leverling',
    'Steven walker', 'Robert King', 'Margaret hamilt', 'Michael Suyama'
  ];
  const statusData = ['Open', 'InProgress', 'Testing', 'Close'];
  const priorityData = ['Low', 'Normal', 'Critical', 'Release Breaker', 'High'];

  const [summary, setSummary] = useState(props.Summary);

  const handleChange = (e) => {
    const value = e.target.value;
    setSummary(value);
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="e-label">ID</td>
            <td>
              <div className="Id_wrapper">
                <span className='e-input-group e-control-wrapper e-disabled e-valid-input'>
                  <input id="Id" name="Id" type="text" className="e-field" value={props.Id} disabled />
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="e-label">Status</td>
            <td>
              <DropDownListComponent id='Status' name="Status" dataSource={statusData} className="e-field" placeholder='Status' value={props.Status}></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-label">Assignee</td>
            <td>
              <DropDownListComponent id='Assignee' name="Assignee" className="e-field" dataSource={assigneeData} placeholder='Assignee' value={props.Assignee}></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-label">Priority</td>
            <td>
              <DropDownListComponent type="text" name="Priority" id="Priority" popupHeight='300px' className="e-field" value={props.Priority} dataSource={priorityData} placeholder='Priority'></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-label">Summary</td>
            <td>
              <div className="e-float-input e-control-wrapper">
                <textarea name="Summary" className="e-field" value={summary} onChange={handleChange}></textarea>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Kanban;