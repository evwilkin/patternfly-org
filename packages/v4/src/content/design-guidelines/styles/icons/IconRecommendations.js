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
  console.log(iconRecommendations);
  const rows = iconRecommendations.map((rowObj, idx) => ({
    cells: Object.keys(rowObj).map((cell, i) => {
      console.log(cell, rowObj[cell]);
      const { style, icon, name } = rowObj[cell][0]
;      const title = cell === 'iconUsage' ? rowObj[cell][0] : <React.Fragment><i className={`${style} ${name}`}></i><div>{icon}</div></React.Fragment>;
      return {
        title,
        props: {
          key: `cell ${idx}-${i}`
        }
      }
    })
  }));
  // const rows = iconRecommendations.map(recGroup => (
  //   recGroup.map(icon => ({
  //     cells: [
  //       icon.iconType === 'old'
  //         ? <React.Fragment><i className={icon.iconName.indexOf('pf-') === 0 ? `pf-icon ${icon.iconName}` : icon.iconName}></i>{icon.iconName}</React.Fragment>
  //         : '',
  //       icon.iconType !== 'old'
  //         ? <React.Fragment><i className={icon.iconName.indexOf('pf-') === 0 ? `pf-icon ${icon.iconName}` : icon.iconName}></i>{icon.iconName}</React.Fragment>
  //         : '',
  //       icon.iconUsage
  //     ]
  //   }))
  // ));
  // <table className="pf-c-table pf-m-compact ws-icon-recommendations" aria-label="icons recommendation guidelines breakout">
  //   <thead>
  //     <tr>
  //       <th>Old icon</th>
  //       <th>Update icon</th>
  //       <th>Updated contextual usage</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {iconRecommendations.map(recGroup => (
  //       recGroup.map(icon => (
  //         <tr key={icon.style ? `${icon.style}-${icon.iconName}` : icon.iconName}>
  //           {icon.iconType === 'new' && <td></td>}
  //           <td>
  //             <i className={icon.iconName.indexOf('pf-') === 0 ? `pf-icon ${icon.iconName}` : icon.iconName}></i>
  //             {icon.iconName}
  //           </td>
  //           {icon.iconType === 'old' && <td></td>}
  //           <td>
  //             {icon.iconUsage}
  //           </td>
  //         </tr>
  //       ))
  //     ))}
  //   </tbody>
  // </table>

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
