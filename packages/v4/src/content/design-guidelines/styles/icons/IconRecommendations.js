import React from 'react';
import { iconRecommendations } from './recommendations';

export const IconRecommendations = () => (
  <table className="pf-c-table pf-m-compact ws-icon-recommendations" aria-label="icons recommendation guidelines breakout">
    <thead>
      <th>Old icon</th>
      <th>Update icon</th>
      <th>Updated contextual usage</th>
    </thead>
    <tbody>
      {iconRecommendations.map(recGroup => (
        recGroup.map(icon => (
          <tr>
            {icon.iconType === 'new' && <td></td>}
            <td>
              <i className={icon.iconName.indexOf('pf-') === 0 ? `pf-icon ${icon.iconName}` : icon.iconName}></i>
              {icon.iconName}
            </td>
            {icon.iconType === 'old' && <td></td>}
            <td>
              {icon.iconUsage}
            </td>
          </tr>
        ))
      ))}
    </tbody>
  </table>
);
