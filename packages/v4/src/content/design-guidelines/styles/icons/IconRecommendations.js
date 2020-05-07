import React from 'react';
import { iconRecommendations } from './recommendations';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from '@patternfly/react-table';

export const IconRecommendations = () => {
  const columns = ['Old icon', 'Updated icon', 'Updated contextual usage'];
  const rows = iconRecommendations.map((rowObj, idx) => {
    const columnNames = Object.keys(rowObj);
    const cells = columnNames.map(columnName => { // old
      const cellObj = {
        title: [],
        key: `${columnName}-${idx}`
      };
      rowObj[columnName].map((cellLine, index) => {
        const { style, icon, name } = cellLine;
        (columnName === 'iconUsage')
          ? cellObj.title = cellLine
          : cellObj.title.push(<div><i className={`${style} ${name}`}></i>{icon}</div>);
          return null;
      })
      return cellObj;
    });
    return cells;
  });

  return (
    <Table
    aria-label="Updated icons table"
    cells={columns}
    rows={rows}
    variant={TableVariant.compact}
    id="ws-icons-recommendations"
    >
      <TableHeader />
      <TableBody />
    </Table>
  )
}
