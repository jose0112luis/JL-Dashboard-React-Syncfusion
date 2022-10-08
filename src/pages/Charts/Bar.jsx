import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Tooltip, Category, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Bar = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Area' />

      <div className='w-full dark:bg-secondary-dark-bg'>
        <ChartComponent
          id='area-chart'
          height='420px'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 1 } }}
          theme={currentMode === 'Light' ? 'Material' : 'TailwindDark'}
        >
          <Inject services={[ ColumnSeries, Legend, Tooltip, Category, DataLabel ]} />

          <SeriesCollectionDirective>
            {
              barCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item} />
              ))
            }
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar;