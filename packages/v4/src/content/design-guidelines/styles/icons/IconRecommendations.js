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
  const rows = iconRecommendations.map((rowObj, idx) => ({
    cells: Object.keys(rowObj).map((cell, i) => {
      const { style, icon, name } = rowObj[cell][0];
      const title = cell === 'iconUsage'
        ? rowObj[cell][0]
        : <React.Fragment><i className={`${style} ${name}`}></i><div>{icon}</div></React.Fragment>;
      return {
        title,
        props: {
          key: `cell ${idx}-${i}`
        }
      }
    })
  }));

  return (
    <Table
    aria-label="Updated icons table"
    cells={columns}
    rows={rows}
    variant={TableVariant.compact}
    >
      <TableHeader />
      <TableBody />
    </Table>
  )
}
